import React from 'react'  
import coder from "../assets/pexels-pavel-danilyuk-5496464.jpg" 

// FILENAME of Component should match the function name  Content === Content

const Content = () => {  
    
  return (
    <div>
     <main   className="main-content">
      <section>I am section 1</section>   
      <section>I am section 2</section>     

      {/* How to add source attributes and iniline styling in react */}  

      <img    src={coder}  alt="coder" style={{width: 300  , height: 200, objectFit: 'cover' }} />
    </main>
    </div>
  )
}

export default Content