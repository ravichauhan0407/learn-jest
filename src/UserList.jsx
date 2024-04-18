import React, { useState } from 'react'

const UserList = ({onSubmit}) => {
  const [name,setName] =  useState('')

  const handleSubmit=()=>{
    onSubmit({name})
  }

  return (
    <div title='div'>
        <input onChange={(e)=>setName(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UserList