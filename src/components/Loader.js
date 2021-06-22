import React from 'react'

import imgLoader from '../utils/images/loader.gif'

export const Loader = () => {
  return (
    <div className='loader'
      style={{
        backgroundImage: `url(${imgLoader})`
      }}
    >
    </div>
  )
}
