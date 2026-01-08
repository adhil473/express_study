import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Action = () => {
const [idview , setIdview] = useState("") 
const {id} = useParams()  
 
   const apifetch = async () => {
   const response = await axios.get(`http://localhost:8070/auth/getUserById/${id}`)
   setIdview(response.data)
   console.log("userrr : ",response.data)
   }

  useEffect(()=>{
    apifetch()
    
  },[])



  return (
    <div>
        name:{idview.name}  <br />
        email:{idview.email}  <br />
        password:{idview.password}
        
    </div>
  )
}

export default Action
