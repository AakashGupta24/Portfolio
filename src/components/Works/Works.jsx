import React, { useContext } from 'react'
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

import {motion} from 'framer-motion';
import { themeContext } from '../../Context';



const Works = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="works" id='Works'>

            <div className="awesome container">
                <motion.span 
                initial={{x:'-20rem'}}
                whileInView={{x:0}}
                transition={{duration:2}}
                style={{color:darkMode?'white':''}}>Will Work For All </motion.span>
                <motion.span
                 initial={{y:'20rem'}}
                 whileInView={{y:0}}
                 animate={{scale:1.3}}
                 transition={{duration:2}}>These Brands</motion.span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Beatae quod perferendis vel aliquam commodi necessitatibus mollitia voluptas esse est sit!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, necessitatibus!
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit.
                </span>
                <button className='btn s-btn'>More !!</button>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side */}
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={{duration:3.5,type:'spring'}}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                </motion.div>

                {/* background circles */}
                <div className="w-backCircle blueCircle">

                </div>
                <div className="w-backCircle yellowCircle">

                </div>

            </div>




        </div>
    )
}

export default Works