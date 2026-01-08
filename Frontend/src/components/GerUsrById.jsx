import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const GerUsrById = () => {
    const [details, setDetals ] = useState({})


    const {userId} = useParams()

    const fetDataById = async () =>{
        const response = await axios.get(`http://localhost:8070/auth/getUserById/${userId}`)
        console.log("llllllllllll : ",response.data)
        setDetals(response.data)
        // setDetals()

    }


    useEffect(()=>{
      fetDataById()
    },[])



  return (
    <div>
      <h1>Name{details.name}</h1>
      <h2>email{details.email}</h2>
      <h3>password{details.password}</h3>
    </div>
  )
}

export default GerUsrById
