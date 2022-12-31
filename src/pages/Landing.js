import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <p className='text-blue-500 text-2xl'>Landing Page</p>
    <Link to='/signUp'><button className='btn btn-primary'>to Sign Up</button></Link>
    </>
  )
}

export default Landing
