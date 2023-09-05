import React, { useEffect } from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


const User = () => {
 const[users,setUsers]= useState([
  
])
useEffect(()=>{
    axios.get("http://localhost:3001")
    .then(result=>{setUsers(result.data)
        })
    .catch(err => console.log(err))
    
},[])

const handleDelete=(id)=>{
    axios.delete("http://localhost:3001/delete/"+id)
    .then(
        window.location.reload()
    )
}

  return (
    
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        
        <div className=' container vertical-scrollable w-50 bg-white rounded p-4' >
        <h3 className='text-secondary'>CRUD APP</h3>
            <Link to="/create" className='btn btn-success' >ADD +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                        <th>  ACTION</th>
                    </tr>
                </thead>
                    <tbody>
                     {
                        users.map((user)=>(
                            <tr  key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td> <Link to={`/update/${user._id}`} className='btn btn-primary p-1 gap-2px' >update</Link><button className='btn btn-danger p-1' onClick={(e)=>handleDelete(user._id)}>delete</button></td>
                            </tr>
                        ))
                     }   
                    </tbody>
            </table>
        </div>
    </div>
  
  )
}

export default User