// import logo from './logo.svg';
import './App.css';
// import writers from "./writers";
import  ProfileCard  from './ProfileCard';
import { useEffect, useState } from 'react';
import ProfileForm from './ProfileForm';

function App() {
  const [allProfile, setAllProfile] =useState([
    {
      firstName:"Throne",
      lastName:"Sec",
      email:"throne-sec@mail.com",
      phone:"+800  456 6777",
    },
  ]);
  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllProfile(arr);
  };
   
  return (
    <div>
      <h1>Writers' Profiles</h1>
      <div className="container"> 
      <ProfileForm submit={submit}/>
      
      {
      allProfile.map((writer) => <ProfileCard key={writer.id} writer={writer} />
      )}
      </div>
      </div>
  );
}
export default App;

