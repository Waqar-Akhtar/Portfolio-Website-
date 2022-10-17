import React from 'react'
import {MdFacebook} from 'react-icons/md'
import {RiInstagramFill} from 'react-icons/ri'
import {AiOutlineTwitter} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import Link from '../Image/foreign.png'
import { TypeAnimation } from 'react-type-animation';
import { animated, useSpring } from 'react-spring'

export default function Content() {

    const styles = useSpring({
        from: {
          opacity: 0,
          y: 400,
          delay: 1000,
        },
        to: {
          opacity: 1,
          y: 0,
        }
      })
      
  return (
    <>
       <div className="right-col">
                    <p>Hello , My name is </p>
                    <div className="heading">
                    <h1>Waqar <span> Akhtar</span> </h1>
                    </div>
                    <p> <strong> 
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                        `i'm a Creative Web Developer`,
                        1500,
                        `i'm a Creative Graphic Designer `,
                        1500,
                        `i'm a Digital Marketer`,
                        1500,
                        ]}
                        speed={40} // Custom Speed from 1-99 - Default Speed: 40
                        style={{ fontSize: '1.1rem' }}
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                    />
                         </strong></p>

                    <div   className="Social-media">
                        <animated.div style={styles} className="icon">
                            <MdFacebook style = {{fontSize: '40px', color: '#4267B2'  }} />
                            <a href="https://www.facebook.com/weeekky" target= "_blank">
                                <img src={Link} alt=""/>
                            </a>
                        </animated.div>

                    <animated.div style={styles} className="icon">
                        <RiInstagramFill style = {{fontSize: '40px', color: '#C12D8B'  }} />
                        <a href="https://www.instagram.com/waqar-50"  target= "_blank">
                            <img src={Link} alt=""/>
                        </a>
                    </animated.div>

                    <animated.div style={styles} className="icon">
                        <AiOutlineTwitter style = {{fontSize: '40px', color: '#1C9CEA'  }} />
                        <a href="https://www.twitter.com/waqar13839657"  target= "_blank">
                            <img src={Link} alt=""/>
                        </a>
                    </animated.div>

                    <animated.div style={styles} className="icon">
                        <IoLogoLinkedin style = {{fontSize: '40px', color: '#0C63BC', }} />
                        <a href="https://www.linkedin.com/in/engr-waqar-akhtar/"  target= "_blank">
                            <img src={Link} alt=""/>
                        </a>
                    </animated.div>
                    
                        </div>
                        
                            <div className="client-review">
                            <a href='MernDevlope&Reactjs.pdf' target='_blank'  >
                                <button>Resume</button></a>
                        </div>
                        {/* <div className="portfolio">
                            <a href="#">Portfolio</a>
                        </div> */}


                        

                </div>
    </>
  )
}
