import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import Conatct from "./Conatct";
import Service from "./Service";
import Process from "./Process";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
      <Routes>
       <Route path="/" element={<Service/>}/>
       <Route path="/aboutus" element={<AboutUs/>}/>
       <Route path="/blogs" element={<Blogs/>}/>
       <Route path="/casestudies" element={<Process/>}/>
       <Route path="/contact" element={<Conatct/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default Index;
