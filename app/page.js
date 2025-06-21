'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Work/>
    <Contact />
    </>
  );
}
