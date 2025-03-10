import Image from "next/image";
import { Container } from "postcss";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Contact from './components/Contact';

import Footer from "./components/Footer";

export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col bg-black"> 
      <Navbar/>
        <div className="Container  mt-24 mx-auto px-12 py-4">   
        <HeroSection/>
        </div>
      
        <AboutSection/>
        <Contact/>
        <Footer/>
   
        

     </main>
  );
}
