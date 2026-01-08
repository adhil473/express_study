import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdOutlinePreview } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { MdOutlineSecurityUpdate } from "react-icons/md";


const Table2 = () => {
  const [table,setTable]=useState([])

  const    navigate  = useNavigate()
  
  const apiget = async () => {
  const responee = await axios.get('http://localhost:8070/auth/getUser')
  console.log(responee.data);
  setTable(responee.data.sajid)
  }
  
  const deleteid = async (id) => {
  const deleteidd = await axios.delete(`http://localhost:8070/auth/delete/${id}`)
  setTable((currentdata)=>currentdata.filter((value)=>value._id !=id ))
  }

   const getid = (id) =>{
   navigate(`/action/${id}`)
   }

//   we use use effect to work this fu nction without side effect  
  useEffect(() => {
  apiget()
  }, [])



  return (
 
    <div>
      <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                       
                        <th> Name</th>
                        <th>emial</th>
                        <th>password</th>
                        <th>ACTION </th>
                        <th>Delete</th>
                        <th>Edit</th>

                    </tr>

                </thead>
                <tbody>
                {table.map((value)=>(
                <tr>
                   <td>{value.name}</td> 
                   <td>{value.email}</td> 
                   <td>{value.password}</td> 
                   <td style={{color: "red", }}><MdOutlinePreview onClick={()=>{getid(value._id)}} /></td>
                   <td><MdDelete onClick={()=>{deleteid(value._id)}} /></td>
                   <td><MdOutlineSecurityUpdate /></td>
                </tr>
                   
               
                ))}
               
 

                </tbody>
            </Table>
    </div>
  )
}

export default Table2
