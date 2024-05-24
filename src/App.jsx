import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../src/pages/Home"
import Success from "../src/pages/Success"



const App = () => {
  return <>
      <BrowserRouter>
         <Routes>
            <Route path = "/" element = {<Home />}/>
            
            <Route path = "/success" element = {<Success/>}/>

         </Routes>
      </BrowserRouter>
  </>
}

export default App