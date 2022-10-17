import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
export default function Navbar() {

  const [show, setShow]= useState(false)
  const [home, setHome]= useState(true)
  const [about, setAbout]= useState(false)
  const [services, setServices]= useState(false)
  const [contact, setContact]= useState(false)

const changeBackground=()=>{
  if(window.scrollY >= 0 && window.scrollY < 500){
    setHome(true)
    setAbout(false)
    setServices(false)
    setContact(false)
  }
  else if(window.scrollY > 500 && window.scrollY < 1400)
  {
    setHome(false)
    setAbout(true)
    setServices(false)
    setContact(false)
  }
  else if(window.scrollY > 1400 && window.scrollY < 2400)
  {
    setHome(false)
    setAbout(false)
    setServices(true)
    setContact(false)
  }
  else if(window.scrollY > 2200 && window.scrollY < 5000)
  {
    setHome(false)
    setAbout(false)
    setServices(false)
    setContact(true)
  }
  else{
    setHome(false)
    setAbout(false)
    setServices(false)
    setContact(false)
  }
}


window.addEventListener('scroll',changeBackground)

  return (
    <>
        
        < nav className='navbar'>
                    <div className="logo">
                            <a href="#">Waqar <span>Akhtar</span> </a>
                    </div>
                    <div className= {show? "  mobieMenuLink": "menuLink" }>
                    <ul>
                        <li><a className={home ? ' active nav-b': 'nav-a'} href='#home'>Home</a></li>
                        <li><a className={about ? ' active nav-b': 'nav-a'} href="#aboutus">About me</a></li>
                        <li><a className={services ? ' active nav-b': 'nav-a'} href="#services">Services</a></li>
                        <li><a className={contact ? ' active nav-b': 'nav-a'} href="#contactus"> Contact Us</a></li>
                    </ul>
                    </div>
                    <div className="barmenu" onClick={()=>setShow(!show)}>
                         <GiHamburgerMenu/>
                     </div>
        </nav>
        
        
        
    
            
    </>
  )
}
