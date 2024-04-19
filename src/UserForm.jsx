import React, { useState } from 'react'

const UserForm = ({onSubmit}) => {
  const [name,setName] =  useState('')
  const [email,setEmail] = useState('')

  const handleSubmit=()=>{
    onSubmit({name,email})
  }

  return (
    <div title='div'>
        <label htmlFor='name'>Name</label>
        <input id='name' onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor='email'>Email</label>
        <input id='email' onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UserForm;