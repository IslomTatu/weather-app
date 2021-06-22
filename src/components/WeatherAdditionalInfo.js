import dayjs from 'dayjs'
import React from 'react'

import styles from './styles.module.scss'

export const WeatherAdditionalInfo = ({ hourly = [] }) => {
  const dt = hourly ? hourly[0]?.dt : new Date().getTime()

  return (
    <div className={styles.table}>
      <div className={styles['additional-info-header']}>
        <div className={styles.title}>
          <h1>
            {dayjs.unix(dt).format('DD')}{' '}
            <span>{dayjs.unix(dt).format('MMMM')}</span>
          </h1>
        </div>
        <div className={styles['additional-info-item']}>
          <div className={styles['additional-info-item-text']}>
            <span>Min &#8451;</span>
          </div>
        </div>
        <div className={styles['additional-info-item']}>
          <div className={styles['additional-info-item-text']}>
            <span>Max &#8451;</span>
          </div>
        </div>
        <div className={styles['additional-info-item']}>
          <div className={styles['additional-info-item-text']}>
            <span>Pressure, mmHg</span>
          </div>
        </div>
        <div className={styles['additional-info-item']}>
          <div className={styles['additional-info-item-text']}>
            <span>Humidity (%)</span>
          </div>
        </div>
        <div className={styles['additional-info-item']}>
          <div className={styles['additional-info-item-text']}>
            <span>Wind gust</span>
          </div>
        </div>
        <div className={styles['additional-info-item']}>
          <div className={styles['additional-info-item-text']}>
            <span>Wind speed (m/s)</span>
          </div>
        </div>
      </div>
      {hourly && hourly.map(item => {
        const { main, wind } = item
        return (
          <div key={item.dt} className={styles['additional-info-body']}>
            <div className={styles['additional-info-item']}>
              <div className={styles['additional-info-item-value']}>
                <span>{dayjs.unix(item?.dt).format('HH:MM')}</span>
              </div>
            </div>
            <div className={styles['additional-info-item']}>
              <div className={styles['additional-info-item-value']}>
                <span>{main.temp_min}&#176;</span>
              </div>
            </div>
            <div className={styles['additional-info-item']}>
              <div className={styles['additional-info-item-value']}>
                <span>{main.temp_max}&#176;</span>
              </div>
            </div>
            <div className={styles['additional-info-item']}>
              <div className={styles['additional-info-item-value']}>
                <span>{main?.pressure}</span>
              </div>
            </div>
            <div className={styles['additional-info-item']}>
              <div className={styles['additional-info-item-value']}>
                <span>{main?.humidity}</span>
              </div>
            </div>
            <div className={styles['additional-info-item']}>
              <div className={styles['additional-info-item-value']}>
                <span>{wind?.gust}</span>
              </div>
            </div>
            <div className={styles['additional-info-item']}>
              <div className={styles['additional-info-item-value']}>
                <span>{wind?.speed}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
