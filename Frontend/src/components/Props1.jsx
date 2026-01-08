import React from 'react'
import Props2, {} from '../components/Props2'
import { useState } from 'react'

const Props1 = () => {
    const [state, setstate] = useState("sajid")
    const [data, setData] = useState(10)






  return (
    <div>
      <Props2   anandu = {state} adhil = {data}/>
    </div>
  )
}

export default Props1
