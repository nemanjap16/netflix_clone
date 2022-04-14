import React from 'react'
import { Header } from '../../containers/'
import { Accordion } from '../../components'
import { Jumbotron } from '../../containers'
import text from '../../data_txt/homepage.json'

const home = () => {
  return (
    <div>
      <Header />
      {text.map((item) => (
        <Jumbotron key={item.id} {...item} />
      ))}
      <Accordion />
    </div>
  )
}

export default home
