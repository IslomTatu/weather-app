import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { store } from '../store'

import { WeatherAdditionalInfo } from '../components/WeatherAdditionalInfo'
import { WeatherHourly } from '../components/WeatherHourly'

import { filterHourlyDataByDate } from '../helpers/weatherDay'

import styles from './weatherDetails.module.scss'

export const WeatherDetails = () => {
  const history = useHistory()
  const { state } = useContext(store)
  const { hourly } = state

  const [hourlyList, setHouryList] = useState([])

  useEffect(() => {
    if (!sessionStorage.getItem('dt')) {
      history.push('/')
    }
  }, [])

  useEffect(() => {
    if (hourly.length > 0) {
      const currentHourly = hourly.filter(filterHourlyDataByDate)
      setHouryList(currentHourly)
    }
  }, [hourly])

  return (
    <div className={styles.container}>
      <WeatherAdditionalInfo hourly={hourlyList} />
      <div>
        <WeatherHourly hourly={hourlyList} />
      </div>
    </div>
  )
}
