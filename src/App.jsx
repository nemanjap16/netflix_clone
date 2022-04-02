import Jumbotron from './components/Jumbotron/Jumbotron'
import dataTxt from './data_txt/homepage.json'
import './App.scss'

const App = () => {
  return (
    <div className="root">
      {dataTxt.map((item, index) => (
        <Jumbotron key={index} {...item} />
      ))}
    </div>
  )
}

export default App
