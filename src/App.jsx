import React from "react" 
import Navbar from "./components/Navbar/Navbar"
import Baner from "./components/Banner/Baner"
import Meto from "./components/metodologia/meto"



const App = () => {
  return (
   <>
    
      <Navbar />
       <div className="max-w-7xl mx-auto pt-4 px-6">
        <Baner />
        <Meto />
       </div>  
    
   </>
  )
}

export default App