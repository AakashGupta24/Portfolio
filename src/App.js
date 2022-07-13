import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Intro from '../src/components/Intro/Intro'
import Services from '../src/components/Services/Services'
import Experience from '../src/components/Experience/Experience'
import Works from '../src/components/Works/Works'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Testimonials from '../src/components/Testimonials/Testimonials'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'
import {themeContext} from './Context'
import { useContext } from 'react';
function App() {
const theme = useContext(themeContext);

const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background:darkMode ? 'black': '',
      color:darkMode ?  'white':''
    }}
    
    
    
    >
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
