/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'

import { WeatherAdditionalInfo } from './WeatherAdditionalInfo'

describe('WeatherAdditionalInfo component renders testing', () => {
  it('WeatherAdditionalInfo renders without crashing', () => {
    expect(shallow(<WeatherAdditionalInfo />)).toMatchSnapshot()
  })

  it('WeatherAdditionalInfo renders hourly data empty array', () => {
    const hourly = []
    expect(shallow(<WeatherAdditionalInfo hourly={hourly} />))
  })

  it('Check component if hourly props null or undefined', () => {
    expect(shallow(<WeatherAdditionalInfo hourly={undefined} />))
    expect(shallow(<WeatherAdditionalInfo hourly={null} />))
  })
})
