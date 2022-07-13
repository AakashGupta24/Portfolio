import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className='wrapper '>
        <div className="left">
            <div className="name">Aakash </div>
            <Toggle/>
        </div>

        <div className="right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <motion.li
                    initial={{y:-9}}
                    whileInView={{y:1}}
                    transition={{duration:0.5}}
                    >Home</motion.li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                    <motion.li
                     initial={{y:-9}}
                     whileInView={{y:1}}
                     transition={{duration:0.5}}>Services</motion.li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}>
                    <motion.li
                     initial={{y:-9}}
                     whileInView={{y:1}}
                     transition={{duration:0.5}}>Experience</motion.li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <motion.li
                     initial={{y:-9}}
                     whileInView={{y:1}}
                     transition={{duration:0.5}}>Portfolio</motion.li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true}>
                    <motion.li
                     initial={{y:-9}}
                     whileInView={{y:1}}
                     transition={{duration:0.5}}>Testimonials</motion.li>
                    </Link>
                </ul>
            </div>
           <Link spy={true} to='Contact' smooth={true}> <button className='btn nbtn' >Contact Us</button></Link>
        </div>
    </div>
  )
}

export default Navbar