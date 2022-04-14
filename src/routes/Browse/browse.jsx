import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'
import { firebaseContext } from '../../context/firebaseContext'
import * as ROUTES from '../../constants/paths'
import { BrowseContainer } from '../../containers'
import useContent from '../../hooks/useContent.jsx'
import { selectionFilter } from '../../utils'
import { FaPowerOff, FaSearch } from 'react-icons/fa'
import styles from './browse.module.scss'

const Browse = () => {
  let user = JSON.parse(localStorage.getItem('authUser'))
  const { signOut, auth } = useContext(firebaseContext)
  const [block, setblock] = useState('none')
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const [active, setActive] = useState('films')
  const [searchTerm, setSearchTerm] = useState('films')
  const content = useContent(searchTerm)
  let showData = active
  let { [showData]: data } = content
  const slides = selectionFilter(searchTerm)
  // console.log(data)

  useEffect(() => {
    const fuse = new Fuse(data, {
      keys: ['title', 'genre', 'description'],
    })
    const result = fuse.search(inputValue)

    if (inputValue.length > 3 && result.length > 0) {
      data = result
      console.log(result)
    }
  }, [inputValue])

  useEffect(() => {
    if (active === 'films') {
      setSearchTerm('films')
    } else {
      setSearchTerm('series')
    }
  }, [searchTerm, active])

  const handleSignout = () => {
    localStorage.removeItem('authUser')
    signOut(auth)
    user = null
    navigate(ROUTES.SIGNIN)
  }

  const displaySignout = () => {
    if (block === 'block') {
      setblock('none')
    } else {
      setblock('block')
    }
  }

  const Loader = () => {
    return (
      <div className={styles.loading}>
        <img src="/images/misc/loading.gif" alt="loading" />
      </div>
    )
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      {user ? (
        <div>
          <div className={styles.browse}>
            <div className={styles.navbar}>
              <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                  <img src="./logo.svg" alt="logo" />
                </Link>
              </div>
              <div className={styles.links}>
                <span>
                  <button
                    onClick={() => [
                      setSearchTerm('series'),
                      setActive('series'),
                    ]}
                    onKeyDown={() => setSearchTerm('series')}
                    style={active === 'series' ? { color: '#e50914' } : {}}
                  >
                    Series
                  </button>
                </span>
                <span>
                  <button
                    onClick={() => [setSearchTerm('films'), setActive('films')]}
                    onKeyDown={() => setSearchTerm('films')}
                    style={active === 'films' ? { color: '#e50914' } : {}}
                  >
                    Films
                  </button>
                </span>
              </div>
              <div className={styles.profile}>
                <div className={styles.searchInput}>
                  <FaSearch className={styles.iconSearch} />
                  <input
                    type="text"
                    placeholder="search for films and series"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={() => setInputValue('')}
                  />
                </div>
                {user.photoURL ? (
                  <img src={`/images/users/${user.photoURL}.png`} alt="user" />
                ) : (
                  <img src="/images/misc/loading.gif" alt="user" />
                )}
                <FaPowerOff
                  onClick={() => displaySignout()}
                  className={styles.iconPowerOff}
                />
                <div className={styles.signout} style={{ display: block }}>
                  <div>
                    <img
                      src={`/images/users/${user.photoURL}.png`}
                      alt="user"
                    />
                    <h4>{user.displayName ? user.displayName : 'Guest'}</h4>
                  </div>
                  <button
                    onClick={() => handleSignout()}
                    className={styles.signoutBtn}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <h2>Watch Joker Now</h2>
              <p>
                Arthur Fleck aspires to be a stand up comedian among his small
                job working dressed as a clown holding a sign for advertising.
                He takes care of his mother- Penny Fleck, and as he learns more
                about his mental illness, he learns more about his past.
              </p>
            </div>
            <button className={styles.playBtn}>Play</button>
          </div>
          <BrowseContainer
            content={data}
            slides={slides}
            searchTerm={searchTerm}
          />
        </div>
      ) : (
        <div>{Loader()}</div>
      )}
    </>
  )
}

export default Browse
