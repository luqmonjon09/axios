import React from 'react'
import { useLocation } from "react-router-dom"

function SinglePage() {
  const user = useLocation()?.state

  console.log(user);
  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
      <h3>{user.company.name}</h3>
      <h3>{user.address.street}</h3>
    </div>
  )
}

export default SinglePage