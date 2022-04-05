import React from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import BlogList from './Pages/BlogList'
import BlogDetail from './Pages/BlogDetail'
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
     <Routes>
     <Route path='/home' element ={<Home/>}></Route>
      <Route path='blog' element ={<Blog/>}></Route>
      <Route path="" element = {<BlogList/>}/>  
      <Route path=":blog" element = {<BlogDetail/>}/>  
      <Route path='about' element ={<About/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App






