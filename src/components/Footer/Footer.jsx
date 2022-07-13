import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (

<div className="footer">
    <img src={Wave}  style={{width:'100%'}} />
    <div className="f-content">
        <span>aakashgupta_ce_2020@ltce.in</span>
        <div className="f-icons">
        <a href='https://www.instagram.com/aakash_the_sky__/' target='_blank'> <AiFillInstagram color='white' size='3rem'/></a>
           <a href="https://www.facebook.com/profile.php?id=100015751447172" target='_blank'> <BsFacebook color='white' size='3rem'/></a>
           <a href='https://github.com/AakashGupta24' target='_blank'>  <BsGithub color='white' size='3rem'/></a>
        </div>
    </div>
</div>


    )
}

export default Footer