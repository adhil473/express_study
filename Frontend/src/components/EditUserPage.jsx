import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios, { } from 'axios'

const EditUserPage = () => {

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")


    const { userId } = useParams()

    const navigateee = useNavigate()


    const nameChamge = (event) => {
        setname(event.target.value)
    }

    const passwordChange = (event) => {
        setpassword(event.target.value)
    }


    let response = {data:{ _id: '68959db5433650d0f1073dd9', name: 'afrra', email: 'vv@gmai', password: '99999999', __v: 0 }, quantity: 33}

    const { data,quantity } = response
    console.log(data.name);
    console.log(data.email);
    console.log(quantity);
    
    
    



    const fetDataById = async () => {
        const response = await axios.get(`http://localhost:8070/auth/getUserById/${userId}`)
        console.log("llllllllllll : ", response.data)
        const { data } = response
        setname(data.name)
        setEmail(data.email)
        setpassword(data.password)

    }




    const edittData = async (e) => {
        e.preventDefault()
        const formData = { name, email, password }
        const response = await axios.put(`http://localhost:8070/auth/update/${userId}`, formData)
        // fetchDAta()  
        console.log("hhhhh:::", response);

        navigateee('/table')
        // console.log(name);


    }


        useEffect(() => {
        fetDataById()
    }, [])

    return (
        <div>
            <Form onSubmit={edittData}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={nameChamge} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
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

export default EditUserPage
