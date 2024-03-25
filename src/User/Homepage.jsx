import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
     <div className='homepage'>
        <div className='d-flex align-items-center justify-content-center text-light'>
            <h1 style={{marginTop:'300px'}}>Find the current weather of all cities</h1>
        </div>
      <div className='d-flex justify-content-center align-items-center'> <Link to={'/home'}> <button className='btn btn-success text-center mt-3 fw-bold' >Explore</button></Link></div>

    </div> 
    </>
  )
}

export default Homepage
