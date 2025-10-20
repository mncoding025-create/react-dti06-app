import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import pageC01 from '../assets/pageC01.png';
import pageC02 from '../assets/pageC02.png';

export default function PageC() {

  const skills = [
    'HTML', 'CSS', 'JAVASCRIPT', 'FLUTTER', 
    'DART', 'IoT', 'REACT', 'DATABASE'
  ];

  return (
    <div className="bg-[#0c1865] text-gray-300 min-h-screen font-sans">
      
      {/* Header */}
     <header className="bg-[#0a192f] text-white py-6"> 
  
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
    
        {/* ฝั่งซ้าย */}
        <span style={{ fontFamily:'Bebas Neue'}} className="text-lg font-bold">
          CHAKRIT BOONCHUAY
        </span>
    
    {/* ฝั่งขวา */}
        <nav className="flex gap-x-6 text-sm">
          <a href="#work" style={{ fontFamily:'Inter'}} className="hover:text-gray-400 transition-colors">Work</a>
          <a href="#about" style={{ fontFamily:'Inter'}} className="hover:text-gray-400 transition-colors">About</a>
          <a href="#contact" style={{ fontFamily:'Inter'}} className="hover:text-gray-400 transition-colors">Contact</a>
        </nav>
    
      </div>
    </header>

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Home Section  */}
        <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
           <h1 style={{ fontFamily:'Bebas Neue'}} className="text-5xl mt-0.5 md:text-7xl font-bold text-white uppercase">
          Hi, I am <br />
          Chakrit B.
        </h1>
            <p style={{ fontFamily:'Prompt'}} className="mt- text-lg">
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย <br />
              ที่มีความหลงใหลในการสร้าง เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </p>
            <div style={{ fontFamily:'Prompt'}} className="mt-8 flex items-center gap-x-4">
              <a href="#contact" className="flex items-center gap-x-2 border-2 bg-[#699ae4e9] border-[#0a192f] rounded-full px-6 py-2  text-black font-semibold transition-colors hover:bg-transparent hover:text-[#ffffff] hover:border-white">
                 CONTACT ME <span className="text-xl">•</span>
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-400 transition-colors">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img src={pageC01} alt="Chanintorn C." className="w-full h-auto rounded-lg object-cover" />
          </div>
        </section>

        <hr className="border-gray-700" />

        {/* About Me */}
        <section id="about" className="py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 style={{ fontFamily:'Bebas Neue'}} className="text-4xl md:text-5xl font-bold text-white uppercase">ABOUT ME</h2>
            </div>
            <div className="w-full md:w-2/3">
              <h3 style={{ fontFamily:'Prompt'}} className="text-2xl font-bold text-white mb-4">
                ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ในกรุงเทพฯ กำลังมองหาโอกาสที่น่าตื่นเต้น ในการ ทำงานมีพื้นฐานการศึกษาด้าน วิศวกรรมซอฟต์แวร์
              </h3>
              <p style={{ fontFamily:'Prompt'}} className="mb-10">
                ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ <br />
                มีความกระตือรือร้นและอยากรู้ อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ <br /> 
                ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ <br />
                เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม <br />
                 FIFA, Diablo กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
              </p>

              <div style={{ fontFamily:'Prompt'}} className="flex items-center gap-x-4">
                <a href="#contact" className="flex items-center gap-x-2 border-2 bg-[#699ae4e9] border-[#0a192f] rounded-full px-6 py-2  text-black font-semibold transition-colors hover:bg-transparent hover:text-[#ffffff] hover:border-white">
                  DOWNLOAD RESUME •
                </a>
                <a href="#" className="text-white hover:text-gray-400 transition-colors">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="#" className="text-white hover:text-gray-400 transition-colors">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          <img src={pageC02} alt="Work desk" className="w-full max-w-6xl mx-auto rounded-lg mt-10 object-cover" />
        </section>

        <hr className="border-gray-700" />

        {/* Capabilities */}
        <section id="capabilities" className="py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 style={{ fontFamily:'Bebas Neue'}} className="text-4xl font-bold text-white uppercase">MY CAPABILITIES</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p style={{ fontFamily:'Manrope'}} className="mb-8">
                ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนต์ การ ออกแบบ UX/UI ฐานข้อมูล 
              </p>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="border-2 border-white rounded-full px-5 py-2 text-sm font-semibold text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-700" />

        {/* Experience */}
        <section id="experience" className="py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 style={{ fontFamily:'Bebas Neue'}} className="text-4xl md:text-5xl font-bold text-white uppercase">MY EXPERIENCE</h2>
            </div>
            <div style={{ fontFamily:'Manrope'}} className="w-full md:w-2/3 flex flex-col gap-y-10">
              {/* Job 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white">Freelance Developer</h3>
                  <span className="text-sm text-gray-400">Nov 2023 – Present</span>
                </div>
                <p>
                  พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.jsทำงานร่วมกับทีม <br /> 
                  ออกแบบ UX/UIเพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจปรับปรุงความเร็วในการโหลด <br />
                  เว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายใน องค์กร
                </p>
              </div>
              {/* Job 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white">Front-End Intern</h3>
                  <span className="text-sm text-gray-400">Sep 2023 – Nov 2023</span>
                </div>
                <p>
                  พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript <br />
                  ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG <br />
                  ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-700" />

        {/* Connect */}
        <section id="contact" className="py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <h2 style={{ fontFamily:'Bebas Neue'}} className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">LET'S CONNECT</h2>
              <p style={{ fontFamily:'Manrope'}} className="mb-4">Say hello at <a href="mailto:mncoding025@gmail.com" className="text-white font-bold hover:underline">mncoding025@gmail.com</a></p>
              <p style={{ fontFamily:'Manrope'}} className="mb-8">For more info, here's my resume</p>
              <div className="flex items-center gap-x-4">
                <a href="#" className="text-[#0f59c7] hover:text-gray-400 transition-colors">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="#" className="text-[#0f59c7] hover:text-gray-400 transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="text-[#0f59c7] hover:text-gray-400 transition-colors">
                  <BsTwitterX size={24} />
                </a>
                <a href="#" className="text-[#0f59c7] hover:text-gray-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            
            {/* ช่องกรอกข้อมูล */}
            <div className="w-full md:w-2/3">
              <form action="#" className="flex flex-col gap-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" id="name" placeholder="Name" className="w-full bg-transparent border-b-2 border-gray-500 py-3 text-white focus:outline-none focus:border-white transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" placeholder="Email" className="w-full bg-transparent border-b-2 border-gray-500 py-3 text-white focus:outline-none focus:border-white transition-colors" />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input type="text" id="subject" placeholder="Subject" className="w-full bg-transparent border-b-2 border-gray-500 py-3 text-white focus:outline-none focus:border-white transition-colors" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" rows="5" placeholder="Message" className="w-full bg-transparent border-b-2 border-gray-500 py-3 text-white focus:outline-none focus:border-white transition-colors"></textarea>
                </div>
                <div>
                  <button type="submit" style={{ fontFamily:'Manrope'}} className="bg-white text-[#0a192f] font-bold rounded-full px-8 py-3 hover:bg-gray-300 transition-colors">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

      </div>


      <footer className="text-center py-8 text-white text-sm">
        © 2025 Created by SAU-Dev-Team
      </footer>

    </div>
  );
}