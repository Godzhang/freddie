import React, { useEffect, useState } from 'react'

const LazyComponent = () => {
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      // throw new Error('error')
    }, 2000)
  }, [])
  return loading ? <div>loading...</div> : <div className="lazy-component">LazyComponent</div>
}

export default LazyComponent