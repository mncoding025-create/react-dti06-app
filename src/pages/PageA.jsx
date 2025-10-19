import React from 'react';
import pageA01 from '../assets/pageA01.png';
import pageA02 from '../assets/pageA02.png';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function PageA() {
  const mintColor = "#00f7a5";

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans p-8">
      
      {/* แถบบน */}
      <header className="flex justify-between items-center max-w-7xl mx-auto py-4">
        
        {/* ฝั่งซ้าย */}
        <nav style={{ fontFamily :'Monomaniac One'}} className="flex gap-x-8 text-sm">
          <a href="#" className="hover:text-[#00f7a5] transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[#00f7a5] transition-colors">About Me</a>
          <a href="#" className="hover:text-[#00f7a5] transition-colors">Get in Touch</a>
        </nav>

        {/* โลโก้กลาง */}

        <div>
          <img src={pageA01} alt="pageA01" className="absolute left-1/2 -translate-x-1/2"/>
        </div>

        {/* ฝั่งขวา */}
        <div className="flex gap-x-6 items-center">
          <a href="#" className="hover:scale-125 transition-transform"><FaGithub size={20} /></a>
          <a href="#" className="hover:scale-125 transition-transform"><FaInstagram size={20} /></a>
          <a href="#" className="hover:scale-125 transition-transform"><FaTwitter size={20} /></a>
          <a href="#" className="hover:scale-125 transition-transform"><FaLinkedinIn size={20} /></a>
        </div>
      </header>

      {/* กลาง */}
      <main style={{ fontFamily :'Monomaniac One'}} className="flex flex-col items-center justify-center text-center mt-24">
        
        <h1 className="text-3xl font-bold mb-2">Somrak Sudyodjing</h1>
        <h2 
          className="text-4xl font-bold mb-2" 
          style={{ color: mintColor }}
        >
          Freelance Web Developer
        </h2>
        <h3 className="text-2xl font-bold uppercase tracking-wide">
          Based In THAILAND
        </h3>

        <div 
          className="mt-12 p-1 rounded-full" 
          style={{ borderColor: mintColor, borderWidth: '2px' }}
        >

          <img 
            src={pageA02} 
            alt="pageA02" 
            className="rounded-full w-48 h-48 object-cover" 
          />
        </div>

      </main>

    </div>
  );
}