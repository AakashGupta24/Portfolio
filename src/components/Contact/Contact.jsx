import React,{useContext} from 'react'
import './Contact.css';
import { themeContext } from '../../Context';
const Contact = () => {
    const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span  style={{color:darkMode ? 'white':'',fontWeight:darkMode ? 'bolder':''}}>Join With Us</span>
                <span>Contact Us</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>

<div className="c-right">
    <form action="">
        <input type="text" name='user_name' className='user' placeholder='Name'/>
        <input type="email" name='user_email' className='user' placeholder='email'/>
        <textarea name="message" placeholder='Meassage' className='user'/>
        <input type="submit" value='Send' className='btn'/>
        <div className="blur c-blur1" style={{background:'var(--purple)'}}></div>
    </form>
</div>



    </div>
    )
}

export default Contact