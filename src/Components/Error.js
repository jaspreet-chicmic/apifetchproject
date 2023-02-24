import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  },2000)

  return (
    <div>
      Error has occured 
      <h5>Please Select a valid country</h5>
    </div>
  )
}

export default Error