import React from 'react'
import Navbar from './Navbar';
import ProfileImg from './ProfileImg';
import Content from './Content';

export default function Header() {

  return (
    <>
        
      <Navbar/>
      <div id='home'  className='container'>
      <div className='row'>
      <ProfileImg/>
      <Content />
      </div>
      </div>
      </>
  )
}
