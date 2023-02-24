import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorImmediate() {
    const navigate = useNavigate();
    setTimeout(() => {
      navigate("/");
    },0)
  
    return (
      <div>
        Error has occured 
        <h5>Please Select a valid country</h5>
      </div>
    )
}

export default ErrorImmediate