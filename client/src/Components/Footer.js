import React, { useState } from 'react'
import {MdOutgoingMail} from 'react-icons/md'
import {MdSendToMobile} from 'react-icons/md'
import {MdFacebook} from 'react-icons/md'
import {RiInstagramFill} from 'react-icons/ri'
import {AiOutlineTwitter} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import {SiFiverr} from 'react-icons/si'
import {SiUpwork} from 'react-icons/si'
import {CgCopyright} from 'react-icons/cg'
export default function Footer() {
    const [email, setEmail] = useState('')

    const postdata= async ()=>{
        const res= await fetch("/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
                email
          })
         
        } );

        const data = await res.json();  
    
         if(res.status === 404 || !data ||res.status === 500  ){
          window.alert('Please put your email in the box')
         }else{
          window.alert('Thank you so much we will get back to you Shortly')
          setEmail('');
         }
         
      }
  return (
    <>
      <div id='callnow' className="container4">
        <div className="container5">
        <div className="row4">
            <div className="footer-col col-1">
            <div className="logo">
                            <a href="#">Waqar <span>Akhtar</span> </a>
             </div>
             <p> i will happy to assist you in my field and will love to work for you! Money is not our aim ,  Our aims to make long term relationship</p>
            <div className="socialicons">
                <a href="https://www.facebook.com/weeekky"><MdFacebook style={{ color: '#4267B2' }}/></a>
                <a href="https://www.instagram.com/waqar-50"><RiInstagramFill style={{ color: '#C12D8B' }}/></a>
                <a href="https://www.twitter.com/waqar13839657"><AiOutlineTwitter style={{ color: '#1C9CEA' }} /></a>
                <a href="https://www.linkedin.com/in/engr-waqar-akhtar/" target="_blank"><IoLogoLinkedin style={{ color: '#0C63BC' }} /></a>
            </div>
            </div>
            <div className="footer-col col-2">
                <h3>Get In Touch</h3>  
                <div className='P-details ' >
                    <div className="mobile">
                    <p> <MdOutgoingMail style={{margin: '-4px 0'}}/> <span>akhtarwaqar384@gmail.com</span> </p>
                    </div>
                    <div className="mobile">    
                        <MdSendToMobile/>
                        <div className='number'>
                        <p>+92 343 9483828</p>
                        <p>+92 312 9199726</p>
                        </div>
                    </div>
                    <div className="socialicons" style={{ padding: '0.3em 0' , alignItems: 'center'}}>
                <a href="https://www.fiverr.com/waqarakhtar223"><SiFiverr style={{ color: '#1CB96F', fontSize:'43px'  }} /></a>
                <a href="https://www.upwork.com/freelancers/~01b729aa4a0af20ec3" target="_blank"><SiUpwork style={{ color: '#13A300' }}/></a>
            </div>
                 </div>
            </div>
            <div className="footer-col col-3">
                <h3>Newsletter</h3>
                <form method='POST'>
                    <div className="subscribe">
                        <input type="text" name='email' placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    </div>
                </form>
                <div className='subscribe-btn'>
                          <button onClick={postdata} >SubScribe</button>
                </div>
            </div>
        </div>
        <div className="line">
            <p>Copyright <CgCopyright style={{ fontSize: '12px' }}/> 2022 waqar akhtar</p>
        </div>
        </div>
      </div>
    </>
  )
}
