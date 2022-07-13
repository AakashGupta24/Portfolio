import React,{useContext} from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
const Experience = () => {
  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (

    <div className="experience container" id='Experience'>
      <div className="achievement">
        <div className="circle">1+</div>
        <span style={{color:darkMode ? 'white':'',fontWeight:darkMode ? '400':''}}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">4+</div>
        <span style={{color:darkMode ? 'white':'',fontWeight:darkMode ? '400':''}}>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span style={{color:darkMode ? 'white':'',fontWeight:darkMode ? '400':''}}>Completed</span>
        <span>Projects</span>
      </div>











    </div>



    )
}

export default Experience