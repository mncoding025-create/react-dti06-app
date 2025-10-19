import React from 'react'
import pageA01 from '../assets/pageA01.png'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

// 1. แก้ไข: ชื่อ Component ใน React ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่
export default function PageA() {
  const mintColor = "#00f7a5"

  return (
    // 2. แก้ไข: ลบ <div> ครอบชั้นนอกสุดที่ไม่จำเป็นออก
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans p-8">
      
      {/* ======== Header / Navbar ======== */}
      <header className="flex justify-between items-center max-w-7xl mx-auto py-4">
        
        {/* Left Links */}
        <nav className="flex gap-x-8 text-sm">
          {/* 3. แก้ไข: Syntax ของ Tailwind ไม่รองรับ ${} ต้องใส่ค่าสีตรงๆ */}
          <a href="#" className="hover:text-[#00f7a5] transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[#00f7a5] transition-colors">About Me</a>
          <a href="#" className="hover:text-[#00f7a5] transition-colors">Get in Touch</a>
        </nav>

        {/* Middle Logo */}
        <div>
          <span 
            className="text-3xl italic" 
            style={{ color: mintColor, fontFamily: 'cursive' }}
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
            // 4. แก้ไข: เปลี่ยน src จาก profilePic เป็น pageA01
            src={pageA01} 
            alt="Profile" 
            className="rounded-full w-48 h-48 object-cover" 
          />
        </div>

      </main>

    </div>
  )
}