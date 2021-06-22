import { useState, useLayoutEffect } from 'react'

function useDims (ref) {
  const [dim, setDim] = useState({
    height: 0,
    width: 0,
    top: 0,
    left: 0
  })

  useLayoutEffect(() => {
    if (ref && ref.current) {
      setDim({
        height: ref.current.offsetHeight,
        width: ref.current.offsetWidth,
        top: ref.current.offsetTop,
        left: ref.current.offsetLeft
      })
    }
  }, [ref])

  return dim
}

export default useDims
