import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'
import { BsPaperclip } from 'react-icons/bs'
import './ContactSection.css'

function ContactSection({chat, desc, resume}) {
  return (
    <div className="contact">
      <div className="contact-container">
          <div className="contact-header">
                {chat}
          </div>
          <div className="contact-desc">
                {desc}
          </div>
          <div className="contact-resume">
                {/* {resume} */}
          </div>
          <div className="contact-icons">
            <div className="contact-item">
                {/* <BsPaperclip /> */}
            </div>
            <div className="contact-item">
                <a href="mailto:jones.brendan1996@gmail.com" target="google.com" className='nav-link'><BiPaperPlane /></a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactSection