import React from 'react'
import { Accordion } from '../../components'
import { Jumbotron, Footer } from '../../containers'
import text from '../../data_txt/homepage.json'

const home = () => {
  return (
    <div>
      {text.map((item) => (
        <Jumbotron key={item.id} {...item} />
      ))}
      <Accordion />
      <Footer />
    </div>
  )
}

export default home
