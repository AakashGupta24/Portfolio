import React,{useContext} from 'react'
import './Testimonials.css'
import { themeContext } from '../../Context';
import { Swiper, SwiperSlide } from "swiper/react"
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
const  clients=[
    {
        img:profile1,
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur deserunt totam iste, voluptatibus reprehenderit tempore qui ratione vel beatae ullam unde tempora id ab adipisci eaque reiciendis. Corporis, molestiae soluta.'
    },
    {
        img:profile2,
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur deserunt totam iste, voluptatibus reprehenderit tempore qui ratione vel beatae ullam unde tempora id ab adipisci eaque reiciendis. Corporis, molestiae soluta.'
    },
    {
        img:profile3,
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur deserunt totam iste, voluptatibus reprehenderit tempore qui ratione vel beatae ullam unde tempora id ab adipisci eaque reiciendis. Corporis, molestiae soluta.'
    },
    {
        img:profile4,
        review:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur deserunt totam iste, voluptatibus reprehenderit tempore qui ratione vel beatae ullam unde tempora id ab adipisci eaque reiciendis. Corporis, molestiae soluta.'
    },
]



  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients </span>
            <span>Space For </span>
            <span>Future </span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
{/* slider */}

<Swiper   
modules={[Pagination]}
slidesPerView={1}
pagination={{clickable:true}}

>
{clients.map((client,index)=>{
    return(
        <SwiperSlide key={index}>
            <div className="testimonials">
                
            <img src={client.img} alt="" />
            <span style={{color:darkMode ? 'blue':'',fontWeight:darkMode ? '400':''}}>{client.review}</span>
            </div>
        </SwiperSlide>
    )
})}


</Swiper>

    </div>
    )
}

export default Testimonials