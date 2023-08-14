import React from 'react'
import { useContext } from "react"

import "./Profile.css"
import { AuthContext } from '../../context/AuthContext';

export const Profile = () => {
const { user } = useContext(AuthContext);

    return (
      <div className='user-profile-container'>
        <h1 className='user-profile-heading'>User Profile</h1>
        {user? (
          <div className='user-profile-detail-container'>
            <p className='user-profile-detail'>Name: {user.firstName} {user.lastName}</p>
          
            <p className='user-profile-detail'>Email: {user.email}</p>
          </div>
        ) : (
          <p className='show-loading'>Loading user data...</p>
        )}
      </div>
    );
}

