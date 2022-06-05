import classes from './styles.module.scss'
import reactPng from './assets/React-icon.png'
import { useCallback, useState } from 'react'
import { randomInteger } from '../utils/helpers'

const App = () => {
  const [appBackground, setAppBackground] = useState('rgb(255,255,255)')

  const generateColor = () => {
    const r = randomInteger(0, 255)
    const g = randomInteger(0, 255)
    const b = randomInteger(0, 255)
    const newColor = `rgb(${r},${g},${b})`
    setAppBackground(newColor)
  }

  const handleButtonClick = useCallback(() => {
    generateColor()
  }, [])

  return (
    <div className={classes.app} style={{ background: appBackground }}>
      <h1>React Boilerplate</h1>
      <img className={classes.reactIcon} src={reactPng} alt="React icon" />
      <button className={classes.changeButton} onClick={handleButtonClick}>
        Change
      </button>
    </div>
  )
}

export default App
