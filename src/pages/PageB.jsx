import React from 'react';
import { FaLinkedinIn, FaBehance, FaTwitter } from 'react-icons/fa';
import pageB01 from '../assets/pageB01.png'; 
import { SiClickup, SiElastic } from 'react-icons/si';
import { SlSocialDropbox } from 'react-icons/sl';

export default function PageB() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* แถบบน */}
     <header className="flex justify-center items-center py-4">
        <nav className="flex justify-between items-center w-full max-w-7xl bg-[#1a1a1a] rounded-lg px-8 py-4 mx-8 md:mx-16">
          <div className="flex gap-x-35 ml-10 text-sm text-gray-300">
            <a href="#" className="hover:text-[#333333] transition-colors">Home</a>
            <a href="#" className="hover:text-[#333333] transition-colors">Case Studies</a>
            <a href="#" className="hover:text-[#333333] transition-colors">Testimonials</a>
            <a href="#" className="hover:text-[#333333] transition-colors">Recent work</a>
            <a href="#" className="hover:text-[#333333] transition-colors">Get In Touch</a>
          </div>

          <div className="flex gap-x-6 items-center text-gray-300">
            <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaBehance size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter size={18} /></a>
          </div>
        </nav>
      </header>


      <main className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-24 px-8 md:px-16 gap-16">
        <div className="w-full md:w-1/2">
          <h1 style={{ frontfamily : 'Raleway'}} className="text-5xl md:text-6xl font-bold mb-6">
            Chakrit Boonchuay
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem odit labore unde nemo omnis sequi hic sit laudantium, ipsa nisi eos autem.
          </p>
          <a href="#" style={{ fontFamily : 'IBM Plex Mono'}} className="bg-lime-500 text-black font-bold text-lg px-10 py-4 rounded-md inline-flex items-center gap-x-2 transition-transform hover:scale-105">
            Let's get started &gt;
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={pageB01} 
            alt="pageB01"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-gray-800 shadow-xl"
          />
        </div>
      </main>

      {/* แถบล่าง */}
      <section className="max-w-7xl mx-auto mt-24 md:mt-32 pb-20 px-8 md:px-16">
        <p style={{ fontFamily :'IBM Plex Mono'}} className="text-white text-sm mb-5">Worked with</p>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 py-6">

            <a href="#" className="flex items-center justify-center gap-x-3 bg-[#1a1a1a] border border-gray-700 rounded-lg px-6 py-4 min-w-[180px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-gray-500 transition-all duration-300">
              <SiClickup size={20} /><span className="font-bold text-lg">ClickUp</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-x-3 bg-[#1a1a1a] border border-gray-700 rounded-lg px-6 py-4 min-w-[180px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-gray-500 transition-all duration-300">
              <SlSocialDropbox size={20} /><span className="font-bold text-lg">Dropbox</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-x-3 bg-[#1a1a1a] border border-gray-700 rounded-lg px-6 py-4 min-w-[180px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-gray-500 transition-all duration-300">
              <span className="font-bold text-xl tracking-wide">PAYCHEX</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-x-3 bg-[#1a1a1a] border border-gray-700 rounded-lg px-6 py-4 min-w-[180px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-gray-500 transition-all duration-300">
              <SiElastic size={20} /><span className="font-semibold text-lg italic">elastic</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-x-3 bg-[#1a1a1a] border border-gray-700 rounded-lg px-6 py-4 min-w-[180px] grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-gray-500 transition-all duration-300">
              <span className="font-bold text-2xl italic">stripe</span>
            </a>

          </div>
      </section>

    </div>
  );
}