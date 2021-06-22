import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { WeatherCard } from '../components/WeatherCard'
import { store } from '../store'

import styles from './mainContainer.module.scss'

export const MainContainer = () => {
  const history = useHistory()
  const { state } = useContext(store)
  const { weatherList } = state

  const handleOnClick = (date) => {
    history.push(`/${date}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {weatherList.map((item) => (
          <WeatherCard onClick={handleOnClick} key={item.dt} weather={item} />
        ))}
      </div>
    </div>
  )
}
