import { useMemo } from 'react'
import dayjs from 'dayjs'

const getWeekName = unixDate => {
  return dayjs.unix(unixDate).format('dddd')
}

const getDate = unixDate => {
  return dayjs.unix(unixDate).format('MMMM DD')
}

const getDay = unixDate => {
  return dayjs.unix(unixDate).format('DD')
}

const getMonth = unixDate => {
  return dayjs.unix(unixDate).format('MMMM')
}

const useWeatherData = (weatherData) => {
  const state = useMemo(() => {
    if (!weatherData) {
      return {}
    }
    const { dt, temp, weather = [] } = weatherData
    const { description, main, id } = weather[0] || {}
    return {
      weekName: getWeekName(dt),
      date: getDate(dt),
      dayValue: parseInt(temp?.day),
      nightValue: parseInt(temp?.night),
      day: getDay(dt),
      month: getMonth(dt),
      info: {
        description,
        main,
        id
      }
    }
  }, [weatherData])

  return state
}

export default useWeatherData
