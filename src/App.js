import React, { useContext, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import { store } from './store'
import api from './api/api'

import { MainContainer } from './containers/MainContainer'
import { WeatherDetails } from './containers/WeatherDetails'

import { FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS, FETCH_HOURLY_FAIL, FETCH_HOURLY_SUCCESS } from './types'
import { getCurrentGeolocation } from './helpers/geolocation'

import './styles.scss'
import { Loader } from './components/Loader'

const App = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(store)
  const { coords, city, loading } = state

  useEffect(() => {
    getCurrentGeolocation(dispatch)
  }, [])

  useEffect(() => {
    const { longitude, latitude } = coords
    if (longitude && latitude) {
      dispatch({
        type: FETCH_DATA
      })
      fetch(api.getList({ lat: latitude, lon: longitude }))
        .then(response => response.json())
        .then(result => {
          dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: {
              weatherList: result.daily.slice(0, 5)
            }
          })
          getHourlyList()
        })
        .catch(err => {
          dispatch({
            type: FETCH_DATA_FAIL
          })
        })
    }
  }, [coords])

  const getHourlyList = () => {
    const { longitude, latitude } = coords

    fetch(api.getHourlyList({ lat: latitude, lon: longitude }))
      .then(response => response.json())
      .then(result => {
        dispatch({
          type: FETCH_HOURLY_SUCCESS,
          payload: {
            city: result.city,
            hourly: result.list
          }
        })
      })
      .catch(err => {
        dispatch({
          type: FETCH_HOURLY_FAIL
        })
      })
  }

  return (
    <div className={'app'}>
      {loading && <Loader /> }
      <div>
        <h1
          style={{ cursor: 'pointer' }}
          onClick={() => history.push('/')}
        >
          {city?.name}
        </h1>
      </div>
      <Switch>
        <Route path='/:date' component={WeatherDetails} />
        <Route path='/' component={MainContainer} />
      </Switch>
    </div>
  )
}

export default App
