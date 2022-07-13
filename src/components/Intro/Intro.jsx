import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import Floating from '../Floating/Floating';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context';
const Intro = () => {
const transition ={duration:2,type:'spring'}
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className='intro container' id='Intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode ? 'white':''}}>Hy! I Am</span>
                <span>Aakash Gupta</span>
                <span style={{color:darkMode ? 'white':'',fontWeight:darkMode ? '400':''}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis porro laborum tenetur, vel placeat maxime dolores repellat officiis sunt, nulla, eos molestias consequuntur facilis earum. Dignissimos assumenda deserunt quidem deleniti!</span>
            </div>
            <button className="btn i-btn">
                Hire ME
            </button>
            <div className="i-icons">
              <a href='https://github.com/AakashGupta24' target='_blank'><img src={Github} alt="github" /></a>
              <a href='https://www.linkedin.com/in/aakash-gupta-15807a239' target='_blank'><img src={LinkedIn} alt="github" /></a>
              <a href='https://www.instagram.com/aakash_the_sky__/' target='_blank'><img src={Instagram} alt="github" /></a>
            </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <motion.img 
        initial={{top:'20rem'}}
        transition={transition}

        whileInView={{top:'0rem'}}
        src={boy} alt="" />
        <motion.img
        initial={{left:'-36%'}}
        whileInView={{left:'-20%'}}
        transition={transition}
        src={glassesimoji} alt="" />
        <motion.div 
        initial={{top:'-4%',left:'74%'}}
whileInView={{left:'68%'}}        
transition={transition}
        
        style={{top:'-4%', left:'68%',color:darkMode ? 'orange':''}}
        className='floating-div'>
          <Floating image={crown} text1='Web' text2='Developer'/>
        </motion.div>
        <motion.div 
        initial={{top:'18rem',left:'9rem'}}
        whileInView={{left:'0%'}}        
        transition={transition}
        
        style={{top:'18rem', left:'0rem',color:darkMode ? 'orange':''}}
        className='floating-div'>
          <Floating image={thumbup} text1='Best Design' text2='Award'/>
        </motion.div>
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur"
        style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}
        ></div>
        </div>
    </div>
  )
}

export default Intro