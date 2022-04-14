import { useState, useContext, useEffect } from 'react'
import { firebaseContext } from '../context/firebaseContext'

const useContent = (target) => {
  const [content, setContent] = useState([])
  const { db, getDocs, collection } = useContext(firebaseContext)

  useEffect(() => {
    getDocs(collection(db, target)).then((snapshot) => {
      setContent((prev) => [...prev, ...snapshot.docs.map((doc) => doc.data())])
    })
    return () => {
      setContent([])
    }
  }, [target])
  return { [target]: content }
}

export default useContent
