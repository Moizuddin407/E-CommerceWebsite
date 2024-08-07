import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import About from './pages/About.js'

import Contact from './pages/Contact.js'
import NotFound from './pages/Pagenotfound.js'
import Policy from './pages/Policy.js'

function App() {
  return (
   <>
    <Routes>
      
      <Route path='/' element = {<HomePage/>}/>
      <Route path='/about' element = {<About/>}/>  
      <Route path='/contact' element= {<Contact/>}/>
      <Route path = '/policy' element = {<Policy/>}/>
      {/* For page not found */}
      <Route path = '/*' element = {<NotFound/>}/>
    </Routes>
   </>
  );
}



export default App;
