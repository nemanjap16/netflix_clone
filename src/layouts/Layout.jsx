import React from 'react'
import { Footer } from '../containers'

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
