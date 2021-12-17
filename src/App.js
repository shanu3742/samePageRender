
import './App.css'

import React, { useRef } from 'react'
import {Routes,Button} from './Lib/SinglePageRouting/SinglePageRoutes'


 



function App() {

  const myRef = useRef(null)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
 
  return (
    <>

       <Button to={myRef}>Home</Button>
       <Button to= {homeRef}>About </Button>
       <Button to={aboutRef} >Login</Button>
        
<Routes path={myRef}>
<div className='shanu' >I wanna be seen</div> 
</Routes>
<Routes path={homeRef}>
<div className='shanu1' >I wanna be seen</div> 
</Routes>
<Routes path={aboutRef}>
<div className='shanu1' >I wanna  seen</div> 
</Routes>


       
      
    </>
  );
}

export default App;
