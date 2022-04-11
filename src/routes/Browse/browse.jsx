import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { firebaseContext } from '../../context/firebaseContext'
import * as ROUTES from '../../constants/paths'
import { BrowseContainer } from '../../containers'
import useContent from '../../hooks/useContent.jsx'
import { selectionFilter } from '../../utils'
import { FaPowerOff } from 'react-icons/fa'
import styles from './browse.module.scss'

const Browse = () => {
  const { films } = useContent('films')
  const { series } = useContent('series')
  const slides = selectionFilter({ series, films })
  let user = JSON.parse(localStorage.getItem('authUser'))

  const { signOut, auth } = useContext(firebaseContext)
  const [block, setblock] = useState('none')
  const navigate = useNavigate()

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

  return (
    <>
      <div className={styles.browse}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
              <img src="./logo.svg" alt="logo" />
            </Link>
          </div>
          <div className={styles.links}>
            <span>
              <p>Series</p>
            </span>
            <span>
              <p>Films</p>
            </span>
          </div>
          <div className={styles.profile}>
            {user.photoURL ? (
              <img src={`/images/users/${user.photoURL}.png`} alt="user" />
            ) : (
              <img src="/images/misc/loading.gif" alt="user" />
            )}
            <FaPowerOff
              onClick={() => displaySignout()}
              className={styles.icon}
            />
            <div className={styles.signout} style={{ display: block }}>
              <div>
                <img src={`/images/users/${user.photoURL}.png`} alt="user" />
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
            Arthur Fleck aspires to be a stand up comedian among his small job
            working dressed as a clown holding a sign for advertising. He takes
            care of his mother- Penny Fleck, and as he learns more about his
            mental illness, he learns more about his past.
          </p>
        </div>
      </div>
      <BrowseContainer slides={slides} />
    </>
  )
}

export default Browse
