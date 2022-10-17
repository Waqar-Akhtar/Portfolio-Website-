import React, { useState } from 'react'
import Lottie from "lottie-react";
import data from '../Image/contact.json'
export default function Contactus() {

  const [name, setname] = useState('')
  const [email, setEmail] = useState('')
  const [Comment, setComment] = useState('')


  const postdata= async ()=>{
    const res= await fetch("/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name , email , Comment  
      })
     
    } );
    const data = await res.json();  

     if(res.status === 500 || !data || res.status === 404 ){
      window.alert('Please Fill all the Fields')
     }else{
      window.alert('Thank you so much we will get back to you Shortly')
     
     setname('');
     setEmail('');
     setComment('');
    }
  }
  return (
    <>
      <div id='contactus' className="container">
        <h2>Contact Us</h2>
        <div className="row3">
          <div className="contact">
              <Lottie animationData={data}/>
          </div>
        <div className="container7">
        <form method='POST'>
          <div className="names">
              <input type="text" name='name' placeholder= 'Your Name' value={name} onChange={(e)=>setname(e.target.value)} />
          </div>
          <div className="emails">
          <input type="text" name='email' value={email} placeholder='youremail@gmail.com' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="comment">
          <textarea name="comment" id="Comment" value={Comment} placeholder='How may i help you?' onChange={(e)=>setComment(e.target.value)} cols="60" rows="10"></textarea>
          </div>
        </form>
        
          <div className="button-submit">
            <button onClick={postdata}>Submit</button>
          </div>
          </div> 
          
        </div>
      </div>
    </>
  )
}
