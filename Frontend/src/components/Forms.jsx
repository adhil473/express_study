import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios, { } from 'axios'
import { useNavigate } from 'react-router-dom';

const Forms = () => {
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
 const navigate = useNavigate()


  const nameChamge = (event) => {
    setname(event.target.value)
  }

  const passwordChange = (event) => {
    setpassword(event.target.value)
  }

 




  const postData = async (e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:8070/auth/signup", { name,email, password })
    // fetchDAta()
    console.log(response);
    navigate('/table')
  }


  return (
    <div>
      <Form onSubmit={postData}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name} onChange={nameChamge} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={passwordChange} />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Forms


















// import React from 'react'

// const Forms = () => {


//   return (
//     <div>
//       <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//   )
// }

// export default Forms
