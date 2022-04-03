import React from 'react'
import { Jumbotron, Footer } from '../containers'
import dataTxt from '../data_txt/homepage.json'

const home = () => {
  return (
    <div>
      {dataTxt.map((item, index) => (
        <Jumbotron key={index} {...item} />
      ))}
      <Footer />
    </div>
  )
}

export default home
