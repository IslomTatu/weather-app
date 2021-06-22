import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import HourlyBarChart from './HourlyGraph'

export const WeatherHourly = ({ hourly = [] }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (hourly.length > 0) {
      const _data = hourly.map(item => ({
        ...item,
        temp: item.main?.temp,
        label: dayjs.unix(item.dt).format('HH:MM')
      }))
      setData(_data)
    }
  }, [hourly])

  return (
    <div
      style={{
        height: '400px',
        marginTop: '1rem'
      }}
    >
      <HourlyBarChart data={data} />
    </div>
  )
}
