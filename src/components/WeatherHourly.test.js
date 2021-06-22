/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'

import { WeatherHourly } from './WeatherHourly'

it('WeatherHourly renders without crashing', () => {
  expect(shallow(<WeatherHourly />)).toMatchSnapshot()
})
