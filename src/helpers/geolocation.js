import { SET_COORDS } from '../types'

export const getCurrentGeolocation = (dispatch) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords } = position
      dispatch({
        type: SET_COORDS,
        payload: coords
      })
    }, (error) => handleError(error, dispatch))
  } else {
    alert('Geolocation is not supported by this browser.')
    handleError({}, dispatch)
  }
}

const handleError = (error, dispatch) => {
  dispatch({
    type: SET_COORDS,
    payload: {
      latitude: 41.3538677,
      longitude: 69.2159137
    }
  })
  switch (error?.code) {
    case error.PERMISSION_DENIED:
      alert('User denied the request for Geolocation.')
      break
    case error.POSITION_UNAVAILABLE:
      alert('Location information is unavailable.')
      break
    case error.TIMEOUT:
      alert('The request to get user location timed out.')
      break
    case error.UNKNOWN_ERROR:
      alert('An unknown error occurred.')
      break
    default:
      break
  }
}
