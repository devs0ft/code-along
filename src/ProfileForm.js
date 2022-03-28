import React, { useState } from 'react'

 const ProfileForm = () => {
     const[profile, setProfile] = useState({
       firstName:"",
       lastName:"",
       email:"",
       phone:"",
     })

     const handleChange = (e) => {
       const {name, value} = e.target;
       setProfile(prevState => ({...profile, [name]:value}))
     };
  return <form>
        <fieldset>
          <legend>Personal Information</legend>
          <input type="text" 
          name="firstName"
           onChange={handleChange} 
           value={profile.firstName}/>
          <input type="text"
           name="lastName" 
           onChange={handleChange} 
           value={profile.lastName}/>
          <input type="email"
           name="email" 
           onChange={handleChange}
            value={profile.email}/>
          <input type="phone" 
          name="phone" 
          onChange={handleChange}
           value={profile.phone}/>
        </fieldset>
  </form>
}
 export default ProfileForm;