import React from 'react'
import { AiFillInstagram, AiFillLinkedin,AiFillGithub,AiFillCustomerService} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Tripy Trip All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiFillGithub/>
        <AiFillCustomerService/>
      </p>
    </div>
  )
}

export default Footer