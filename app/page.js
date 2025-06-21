'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(()=>{
      if(isDarkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = '';
      }
  },[isDarkMode])
  
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Work/>
    <Contact />
    <Footer/>
    </>
  );
}
