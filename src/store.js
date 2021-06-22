import React, { createContext, useReducer } from 'react'
import { FETCH_DATA, FETCH_DATA_FAIL, FETCH_DATA_SUCCESS, FETCH_HOURLY_SUCCESS, SET_COORDS } from './types'

const initialState = {
  loading: false,
  weatherList: [],
  city: '',
  coords: {},
  hourly: []
}

const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case FETCH_DATA:
        return {
          ...state,
          loading: true
        }
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          weatherList: payload.weatherList
        }
      case FETCH_DATA_FAIL:
        return {
          ...state,
          loading: false
        }
      case FETCH_HOURLY_SUCCESS:
        return {
          ...state,
          loading: false,
          city: payload.city,
          hourly: payload.hourly
        }
      case SET_COORDS:
        return {
          ...state,
          coords: payload
        }
      default:
        return state
    };
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
