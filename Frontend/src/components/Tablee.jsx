import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdOutlinePreview } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";


const Tablee = () => {
    const [data, setData] = useState([])
    // const [value,setValue] = useState(0)

    const navigate = useNavigate()
    

    const fetchDAta = async () => {
        const response = await axios.get('http://localhost:8070/auth/getUser')
        console.log("responeeee : ", response.data.sajid);
        setData(response.data.sajid)

    }


    const userIDD = (userId) => {
        navigate(`/view/${userId}`)


    }

    const deleteFunction = async (userId) => {

        const response = await axios.delete(`http://localhost:8070/auth/delete/${userId}`)
        setData((prevData)=> prevData.filter((value)=> value._id != userId))
        
        console.log(response);
        

    }
    const updatefunction = (userId) => {
        navigate(`/edit/${userId}`)
        
    }

    

    // useEffect(() => {
    //     fetchDAta()
    // }, [])

    useEffect(()=>{
        fetchDAta()
    },[])


    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>emial</th>
                        <th>password</th>
                        <th>Action</th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index) => (
                        <tr>
                            <td>_</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                            <td><MdOutlinePreview  onClick={()=>{userIDD(value._id)}} /></td>
                            <td><MdDelete onClick={()=>{deleteFunction(value._id)}}/></td>
                            <td><button onClick={()=>{updatefunction(value._id)}}>Edit</button></td>

                        </tr>
                    ))}
 

                </tbody>
            </Table>

        </div>
    )
}

export default Tablee
