 import React from 'react'
 import { useParams } from 'react-router-dom'
 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 import axios from 'axios'
 import { useEffect } from 'react'
 
 const UpdateUser = () => {
    const {id}=useParams()
    const [name,setName]=useState('');
     const [email,setEmail]=useState('');
     const [age,setAge]=useState('');
     const navigate = useNavigate()


     useEffect(()=>{
        axios.get("http://localhost:3001/getUser/"+id)
        .then(result=>{setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)})
        .catch(err => console.log(err))
    },[])
     const handleUpdate=(e)=>{
       e.preventDefault()
         
       axios.put("http://localhost:3001/UpdateUser/"+id,{name,email,age})
       .then(
        
        navigate('/')
     ).catch(err =>console.log(err))
     }
   return (
    <div className="d-flex vh-100 bg-warning justify-content-center align-items-center">
        <div className='w-50 bg-white rounded p-3'>
          <form onSubmit={handleUpdate}>
                <h2>Update User </h2>
                <div className='mb-2'>
                    <label htmlFor='Name'><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" className='form-control'
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type="Email" placeholder="Enter Email" className='form-control'
                     value={email}
                     onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='age'><strong>Age</strong></label>
                    <input type="text" placeholder="Enter Age" className='form-control'
                     value={age}
                     onChange={(e)=>{setAge(e.target.value)}}/>
                </div>
                <button className="btn btn-success">Update</button>
        </form>    
        </div>
    </div>
   )
 }
 
 export default UpdateUser