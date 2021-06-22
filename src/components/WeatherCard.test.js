/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'

import { WeatherCard } from './WeatherCard'

describe('WeatherCard component renders testing', () => {
  it('WeatherCard renders without crashing', () => {
    expect(shallow(<WeatherCard />)).toMatchSnapshot()
  })

  it('WeatherCard renders without props', () => {
    expect(shallow(<WeatherCard />))
  })

  it('WeatherCard renders with empty weather data', () => {
    const mockProps = {
      onClick: jest.fn(),
      weather: {}
    }
    expect(shallow(<WeatherCard {...mockProps} />))
  })
})
