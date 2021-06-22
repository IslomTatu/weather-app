import React from 'react'
import useWeatherData from '../hooks/weatherData'
import icon from '../utils/icon'
import styles from './weathercard.module.scss'

export const WeatherCard = ({ weather, onClick }) => {
  const { weekName, date, dayValue, nightValue, info = {} } = useWeatherData(weather)

  const handleOnClick = () => {
    sessionStorage.setItem('dt', weather.dt)
    onClick(weekName.toLocaleLowerCase())
  }

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <div className={styles['week-name']}>
        {weekName}
      </div>
      <div className={styles['weather-card']}>
        <div className={styles['weather-card-header']}>
          <div>
            <span>Day</span>
          </div>
          <div>
            <span>Night</span>
          </div>
        </div>
        {info?.id &&
          <div className={styles['weather-card-icon']}>
            <img src={icon[info?.id]('d')} />
            <img src={icon[info?.id]('n')} />
          </div>
        }
        <div className={styles['weather-card-info']}>
          <div className={styles['weather-card-values']}>
            <h1> {dayValue} &#8451; </h1>
            <h1> {nightValue} &#8451; </h1>
          </div>
          <div className={styles['weather-card-footer']}>
            <p className={styles['weather-card-date']}> {date} </p>
            <p> {info?.description} </p>
          </div>
        </div>
      </div>
    </div>
  )
}
