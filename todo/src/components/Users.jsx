import React from 'react'
import { useNavigate } from 'react-router-dom'
const Users = () => {
    const navigate=useNavigate()
  return (
    <div>
          <button onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}

export default Users