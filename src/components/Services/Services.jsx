import React,{useContext} from 'react'
import Card from '../Card/Card'
import { motion } from 'framer-motion'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import { themeContext } from '../../Context';
import Humble from '../../img/humble.png'
import './Services.css'
const Services = () => {
    const transition = { duration: 1, type: 'sprinf' }
    const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
    return (
        <div className="services container" id='services'>
            {/* left side  */}
            <div className="awesome">
                <span style={{color:darkMode ? 'white':''}}>My Awesome</span>
                <span>Serives</span>
                <span style={{color:darkMode ? 'white':'',fontWeight:darkMode ? '400':''}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Beatae quod perferendis vel aliquam commodi necessitatibus mollitia voluptas esse est sit!</span>
                <button className='btn s-btn'>More!!</button>
            </div>
            {/* right side */}
            <div className="cards">

                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                    style={{ left: '14rem'}}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Bootstrap,Tailwindcss'} />
                </motion.div>
                <motion.div
                    whileInView={{ left: '-4rem' }}
                    initial={{ left: '-11rem',top:'12rem' }}
                    transition={transition}
                    style={{ left: '-4rem', top: '12rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html,Css,Javascript,React'} />
                </motion.div>
                <motion.div
                    whileInView={{ left: '25rem' , top:'19rem'}}
                    initial={{ left: '14rem' }}
                    transition={transition}
                    style={{ left: '12rem', top: '19rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Backend'}
                        detail={'Nodejs,Strapi'} />
                </motion.div>
                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}></div>
            </div>
        </div>
    )
}

export default Services