import React from 'react'
import pageA01 from '../assets/pageA01.png'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function pageA() {
  const mintColor = "#00f7a5"

  return (
    <div>
      <div className="bg-[#0f0f0f] text-white min-h-screen font-sans p-8">
      
      {/* ======== Header / Navbar ======== */}
      <header className="flex justify-between items-center max-w-7xl mx-auto py-4">
        
        {/* Left Links */}
        <nav className="flex gap-x-8 text-sm">
          <a href="#" className="hover:text-[${mintColor}] transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[${mintColor}] transition-colors">About Me</a>
          <a href="#" className="hover:text-[${mintColor}] transition-colors">Get in Touch</a>
        </nav>

        {/* Middle Logo */}
        <div>
          <span 
            className="text-3xl italic" 
            style={{ color: mintColor, fontFamily: 'cursive' }} // ใช้ font-family: 'cursive' หรือฟอนต์เฉพาะถ้ามี
          >
            hello
          </span>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-x-6 items-center">
          <a href="#" className="hover:scale-125 transition-transform"><FaGithub size={20} /></a>
          <a href="#" className="hover:scale-125 transition-transform"><FaInstagram size={20} /></a>
          <a href="#" className="hover:scale-125 transition-transform"><FaTwitter size={20} /></a>
          <a href="#" className="hover:scale-125 transition-transform"><FaLinkedinIn size={20} /></a>
        </div>
      </header>

      {/* ======== Hero Section ======== */}
      <main className="flex flex-col items-center justify-center text-center mt-24">
        
        {/* Text Content */}
        <h1 className="text-4xl font-bold mb-2">Somrak Sudyodjing</h1>
        <h2 
          className="text-4xl font-bold mb-2" 
          style={{ color: mintColor }}
        >
          Freelance Web Developer
        </h2>
        <h3 className="text-3xl font-bold uppercase tracking-wide">
          Based In THAILAND
        </h3>

        {/* Profile Image */}
        <div 
          className="mt-12 p-1 rounded-full" 
          style={{ borderColor: mintColor, borderWidth: '2px' }}
        >
          <img 
            src={profilePic} 
            alt="Profile" 
            className="rounded-full w-48 h-48 object-cover" 
          />
        </div>

      </main>

    </div>
  )
}
