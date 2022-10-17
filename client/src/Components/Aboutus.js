import React from 'react'
import Lottie from "lottie-react";
import data from '../Image/aboutus.json'
export default function Aboutus() {
  return (
    <>
        <div id='aboutus' className="container">
            <h2>About me</h2>
                <div className="row1">
                    <div className="col1">
                        <h3>Developer & <span> Designer </span></h3>
                        <p >A Web Developer is a professional who is responsible for the design and construction of websites. Your web developer is here and has vast experience in designing and developing websites. 
                              i'M a <strong style ={{color : '#45aaf2' }} >MERN Web Developer</strong> with the expertise in <strong style ={{color : '#0E4C47' }}>JavaScript, Reactjs, Node js, Express js, Mongoose, and in ES6</strong> . If you are looking for a perfect web developer for your business then off course you are the luckiest one who have me to develop your business website.
                              Your website will be developed and designed as per the latest updated features and with beautiful layouts for your business. A famous quote by <strong style ={{ color: '#f6b93b' }} >Bill Gates</strong>  is,  <strong style ={{ color: '#0E4C47' }} >“If your business is not on the Internet then your business will be out of business”</strong> . 
                              Reaching to unreached, through a well-developed website you can increase sales of your business, or expand your services. Connect my clients through a well-developed website and make them unique in the market and help them to capture the market with their well-developed website. 
                              My clients do not have to worry about website integration with different types of gadgets and screen sizes. Your website will be perfectly integrated with all types of gadgets and screen sizes like PC, tablets, and smart phone. I will give you the assurance that your website will be fantastic and seamless with the browsing customers use on any type of device.  </p>
                    </div>
                    <div className="col2">
                    <Lottie animationData={data}/>
                    </div>
                </div>
        </div>
        
      
    </>
  )
}

