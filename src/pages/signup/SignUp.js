// Sign-up Page

// a. You can see a sign-up page from where you can sign-up using my email, first name, last name, password & confirm password.

// b. You can see a hide-show icon button that shows or hides my password.

import React from 'react'

const SignUp = () => {
  return (
    <form>
     <label>
       First Name: <input type='text'/>
    </label> 
    <label>
       last Name: <input type='text'/>
    </label>   
    <label>
       Email: <input type='text'/>
    </label> 
    <label>
       Password: <input type='text'/>
    </label> 
    <label>
       Confirm Password: <input type='text'/>
    </label> 
    <button type='submit'>Sign Up</button>
    </form>
  )
}

export default SignUp
