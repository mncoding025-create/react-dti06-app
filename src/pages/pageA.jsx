import React from 'react';
// ตรวจสอบว่ามีไฟล์รูปนี้อยู่ใน path ที่ถูกต้องหรือไม่
import pageA01 from '../assets/pageA01.png'; // ตรวจสอบชื่อไฟล์รูปและ path ให้ถูกต้อง
import pageA02 from '../assets/pageA02.png';

// ตรวจสอบว่าติดตั้ง react-icons หรือยัง: npm install react-icons
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function PageA() {
  // กำหนดสีเขียวมินต์สำหรับใช้ใน Tailwind CSS และ style inline
  const mintColor = "#00f7a5";

  return (
    // Main Container ของหน้า
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans p-8">
      
      {/* ======== Header / Navbar ======== */}
      <header className="flex justify-between items-center max-w-7xl mx-auto py-4">
        
        {/* Left Links */}
        <nav className="flex gap-x-8 text-sm">
          {/* แก้ไข: ใช้ hover:text-[${mintColor}] ไม่ได้ ต้องเป็น hover:text-[#00f7a5] */}
          <a href="#" className="hover:text-[#00f7a5] transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[#00f7a5] transition-colors">About Me</a>
          <a href="#" className="hover:text-[#00f7a5] transition-colors">Get in Touch</a>
        </nav>

        {/* Middle Logo "hello" */}
        {/* แก้ไข: ตรวจสอบว่าส่วนนี้ไม่ได้ถูกลบออกไป */}
        <div>
          <img src={pageA01} alt="pageA01" className="absolute left-1/2 -translate-x-1/2"/>
        </div>

        {/* Right Social Icons */}
        {/* แก้ไข: ตรวจสอบว่าส่วนนี้ไม่ได้ถูกลบออกไป และ FaIcons ถูก import แล้ว */}
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
        {/* แก้ไข: ตรวจสอบว่าส่วนนี้ไม่ได้ถูกลบออกไป */}
        <h1 className="text-4xl font-bold mb-2">Somrak Sudyodjing</h1>
        <h2 
          className="text-4xl font-bold mb-2" 
          style={{ color: mintColor }} // ใช้ mintColor ที่กำหนดไว้
        >
          Freelance Web Developer
        </h2>
        <h3 className="text-3xl font-bold uppercase tracking-wide">
          Based In THAILAND
        </h3>

        {/* Profile Image */}
        <div 
          className="mt-12 p-1 rounded-full" 
          style={{ borderColor: mintColor, borderWidth: '2px' }} // ใช้ mintColor ที่กำหนดไว้
        >
          {/* แก้ไข: ตรวจสอบว่า `profilePic` ถูก import ถูกต้องและชี้ไปไฟล์รูปที่ถูกต้อง */}
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