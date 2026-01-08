import React from 'react'
import { useState } from 'react'

const Button = () => {
   const [name,setName] = useState("sajid")
   const [password, setPassword] = useState("")
   const namechange = ()=>{
     setName("anandu")
    
    
    
    }

  return (
    <div>

        <h1>{name}</h1>
        <button onClick={namechange}>change</button>
      
     

    </div>
  )
}

export default Button
