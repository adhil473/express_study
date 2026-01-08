import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Form2 = () => {

//   we used use state here to save and update data while on onchange we called on name,email passwords as values   
  const [name,setname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("")  
  
//   we use use navigate here to navigate to another page while we submit this form 
  const navigation = useNavigate()

  const namechange = (event)=>{ 
  setname(event.target.value)
  }
//   we make a function here to update the data using use state the data we typed wwill be inside event (event .target .value  )
  const emailchange = (event)=>{
  setEmail(event.target.value)  
  }

  const passwordChange = (event)=>{
  setpassword(event.target.value)
  }

  const formsubmit = async (e) => {
   e.preventDefault()
   const response = await axios.post("http://localhost:8070/auth/signup",{name,email,password} )
   console.log(response);
   navigation('/table')
   }
  
//   we created a function to post the api 
  return (
    <div>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={namechange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  value={email} onChange={emailchange} />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  value={password} onChange={passwordChange} />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={formsubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Form2
