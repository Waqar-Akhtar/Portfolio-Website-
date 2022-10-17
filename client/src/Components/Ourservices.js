import React from 'react'
import {AiOutlineLaptop} from 'react-icons/ai'
import {FaPencilRuler} from 'react-icons/fa'
import {BsGraphUp} from 'react-icons/bs'
import Lottie from "lottie-react";
import data from '../Image/laptop.json'
import pen from '../Image/pen.json'
import digital from '../Image/digital.json'
export default function Ourservices() {
  return (
    <>
      <div id='services' className="container">
        <h2> Our Services</h2>
        <div className="row2">
            <div className="box">
                <div className="sm-icons">
                    <Lottie animationData={data}/>
                </div>
                <h3>Web Devlopment </h3>
                <p>We provides services related to website development with expertise in javaScript, Reactjs, Node js, Express js, Mongoose, and in ES6. 
                    Website will be developed as per your requirements with life time technical support. The website will be fit with all size of devices and gadegts.</p>
                <div className="btn-center">
                <a href="#callnow">Connect Now</a>
                </div>
            </div>
            <div className="box">
                <div className="sm-icons">
                <Lottie animationData={pen}/>
                </div>
            <h3>Graphic Designer</h3>
            <p>Our aims is to design your dreams. The designing of dreams will be base on fully creativity and will be designed with the most premium software Adobe Photoshop, Adobe illustrator, and using Canva. Content will be provided by you for designs.</p>
               <div className="btn-center">
               <a href="#callnow">Connect Now</a>
               </div>
            </div>
            <div className="box">
                <div className="sm-icons">
                <Lottie animationData={digital}/>
                </div>
            <h3>Digital Marketing</h3>
            <p>We deliver to you in a very short time to your Audiences through Digital marketing. If you need Digital Marketing services for your business, we make long-term and short-term strategies for you. 
                Your sales will be sky-rocketing and your services will be at every doorstep.</p>
                <div className="btn-center">
                <a href="#callnow">Connect Now</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
