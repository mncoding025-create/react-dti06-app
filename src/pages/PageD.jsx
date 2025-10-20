import React from 'react'
import { Link } from 'react-router-dom'
import pageD01 from "../assets/pageD01.png"
import pageD03 from "../assets/pageD03.png"
import pageD04 from "../assets/pageD04.png"
import LogoD01 from "../assets/LogoD01.png"
import menuBG01 from "../assets/menuBG01.png"
import menuD01 from "../assets/menuD01.png"
import menuD02 from "../assets/menuD02.png"
import menuD03 from "../assets/menuD03.png"
import menuD04 from "../assets/menuD04.png"
import menuD05 from "../assets/menuD05.png"
import menuD06 from "../assets/menuD06.png"
import pageD02 from "../assets/pageD02.png"
import menuD07 from "../assets/menuD07.png"
import menuD08 from "../assets/menuD08.png"
import menuD09 from "../assets/menuD09.png"
import menuD10 from "../assets/menuD10.png"
import menuD11 from "../assets/menuD11.png"
import menuD12 from "../assets/menuD12.png"
import menuD13 from "../assets/menuD13.png"
import menuD14 from "../assets/menuD14.png"
import menuD15 from "../assets/menuD15.png"
import menuD16 from "../assets/menuD16.png"
import menuD17 from "../assets/menuD17.png"
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function MyPageD() {
  return (
    <>
      {/* ======== Home Section ======== */}
      <div className="w-full bg-cover bg-center flex flex-col py-32" style={{ backgroundImage: `url(${pageD01})` }}>
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16">
          
          <nav className="flex items-center">
            <Link to="/"><img src={LogoD01} alt="" className='w-[120px]' /></Link>
            <div className='flex flex-1 justify-baseline ml-40 items-center gap-10 text-white text-2xl font-semibold' style={{ fontFamily: "Poppins" }}>
              <button className='text-[#E9BD8C]'>Home</button>
              <button className='hover:text-[#E9BD8C] transition duration-400'>Blog</button>
              <button className='hover:text-[#E9BD8C] transition duration-400'>Contact Us</button>
              <button className='hover:text-[#E9BD8C] transition duration-400'>Service</button>
            </div>
          </nav>
          
          {/* Hero Text: แก้ไข: mt-60 -> mt-48 (หรือ mt-[240px]) */}
          <div className='flex-col mt-48'>
            <p className='text-[#E9BD8C] text-3xl font-medium' style={{ fontFamily: "Inter" }}>Delicious Cafe</p>
            <h1 className='text-white text-8xl leading-tight' style={{ fontFamily: "Sansita Swashed" }}>
              Sweet Treats,<br />
              Perfect Eats
            </h1>
            <div className='flex mt-20 gap-10' style={{ fontFamily: "Inter" }}>
              <button className='text-white text-xl font-semibold bg-[#933C24] px-12 py-5 flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Shop Now
              </button>
              <button className='text-[#E9BD8C] flex justify-center items-center text-xl font-semibold hover:text-[#933C24] transition duration-400'>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* ======== Top Products Section ======== */}
      {/* แก้ไข: ใช้ Grid Layout แทน ml- และ flex */}
      <div className='max-w-7xl mx-auto px-8 md:px-16 py-24'>
        <h2 className='text-center text-7xl font-semibold mb-24' style={{ fontFamily: "Sansita Swashed" }}>Top Products</h2>
        
        {/* Grid Container: 3 คอลัมน์บนจอ PC, 1 คอลัมน์บนจอมือถือ */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          
          {/* Card 1 (และอื่นๆ): แก้ไข: ใช้ flex-col และ p-8 */}
          <div className="h-[600px] rounded-xl flex flex-col p-8" style={{ backgroundImage: `url(${menuBG01})`, backgroundSize: 'cover' }}>
            <div className="flex-1 flex items-center justify-center">
              <img src={menuD01} alt="" className="w-full max-w-[320px] h-auto object-contain" />
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center' style={{ fontFamily: "Inter" }}>
              <p>40 Baht</p> <span className='font-normal border-2 p-1 rounded-full px-5 text-xl'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center mt-8' style={{ fontFamily: "Inter" }}>
              <h1 className="text-2xl">Whold Grain <br /> Bread</h1>
              <button className='bg-[#933C24] px-4 py-2 text-lg flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="h-[600px] rounded-xl flex flex-col p-8" style={{ backgroundImage: `url(${menuBG01})`, backgroundSize: 'cover' }}>
            <div className="flex-1 flex items-center justify-center">
              <img src={menuD02} alt="" className="w-full max-w-[400px] h-auto object-contain" />
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center' style={{ fontFamily: "Inter" }}>
              <p>40 Baht</p> <span className='font-normal border-2 p-1 rounded-full px-5 text-xl'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center mt-8' style={{ fontFamily: "Inter" }}>
              <h1 className="text-2xl">Whold Grain <br /> Bread</h1>
              <button className='bg-[#933C24] px-4 py-2 text-lg flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="h-[600px] rounded-xl flex flex-col p-8" style={{ backgroundImage: `url(${menuBG01})`, backgroundSize: 'cover' }}>
            <div className="flex-1 flex items-center justify-center">
              <img src={menuD03} alt="" className="w-full max-w-[400px] h-auto object-contain" />
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center' style={{ fontFamily: "Inter" }}>
              <p>40 Baht</p> <span className='font-normal border-2 p-1 rounded-full px-5 text-xl'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center mt-8' style={{ fontFamily: "Inter" }}>
              <h1 className="text-2xl">Whold Grain <br /> Bread</h1>
              <button className='bg-[#933C24] px-4 py-2 text-lg flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="h-[600px] rounded-xl flex flex-col p-8" style={{ backgroundImage: `url(${menuBG01})`, backgroundSize: 'cover' }}>
            <div className="flex-1 flex items-center justify-center">
              <img src={menuD04} alt="" className="w-full max-w-[280px] h-auto object-contain" />
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center' style={{ fontFamily: "Inter" }}>
              <p>40 Baht</p> <span className='font-normal border-2 p-1 rounded-full px-5 text-xl'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center mt-8' style={{ fontFamily: "Inter" }}>
              <h1 className="text-2xl">Whold Grain <br /> Bread</h1>
              <button className='bg-[#933C24] px-4 py-2 text-lg flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
          
          {/* Card 5 */}
          <div className="h-[600px] rounded-xl flex flex-col p-8" style={{ backgroundImage: `url(${menuBG01})`, backgroundSize: 'cover' }}>
            <div className="flex-1 flex items-center justify-center">
              <img src={menuD05} alt="" className="w-full max-w-[280px] h-auto object-contain" />
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center' style={{ fontFamily: "Inter" }}>
              <p>40 Baht</p> <span className='font-normal border-2 p-1 rounded-full px-5 text-xl'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center mt-8' style={{ fontFamily: "Inter" }}>
              <h1 className="text-2xl">Whold Grain <br /> Bread</h1>
              <button className='bg-[#933C24] px-4 py-2 text-lg flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
          
          {/* Card 6 */}
          <div className="h-[600px] rounded-xl flex flex-col p-8" style={{ backgroundImage: `url(${menuBG01})`, backgroundSize: 'cover' }}>
            <div className="flex-1 flex items-center justify-center">
              <img src={menuD06} alt="" className="w-full max-w-[320px] h-auto object-contain" />
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center' style={{ fontFamily: "Inter" }}>
              <p>40 Baht</p> <span className='font-normal border-2 p-1 rounded-full px-5 text-xl'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl flex justify-between items-center mt-8' style={{ fontFamily: "Inter" }}>
              <h1 className="text-2xl">Whold Grain <br /> Bread</h1>
              <button className='bg-[#933C24] px-4 py-2 text-lg flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* ======== 20% Off Section ======== */}
      {/* แก้ไข: mt-50 -> mt-24, mt-23 -> mt-12 */}
      <div className="mt-24 w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${pageD02})` }}>
        <h2 className="text-[#933C24] text-6xl font-semibold mb-10 tracking-widest" style={{ fontFamily: "Sansita Swashed" }}>
          20% Off Your <br />
          <span className='ml-5'>First Order</span>
        </h2>
        <p className="text-[#5D5D5D] text-center text-2xl mt-5" style={{ fontFamily: "Inter" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Voluptatibus sed tempore distinctio, <br />
          minima nihil incidunt amet soluta cupiditate magnam?
        </p>
        <button className="font-semibold text-2xl mt-12 bg-[#933C24] text-white px-8 py-4 rounded-xl hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400">
          Learn More
        </button>
      </div>

      {/* ======== Explore More Section ======== */}
      <div className='mt-24 max-w-7xl mx-auto px-8'>
        <p className='text-center text-7xl font-semibold' style={{ fontFamily: "Sansita Swashed" }}>Explore More</p>
        
        {/* แก้ไข: mt-30 -> mt-16, gap-20 -> gap-10 md:gap-16 */}
        <div className='mt-16 text-[#5D5D5D] flex flex-wrap justify-center items-center text-3xl font-semibold gap-10 md:gap-16' style={{ fontFamily: "Poppins" }}>
          <div className="relative inline-block text-center">
            <span className='text-[#8B3E2F]'>Cake</span>
            {/* แก้ไข: w-20 -> w-16, h-2 -> h-1 */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-16 h-1 bg-[#8B3E2F] rounded-full"></div>
          </div>
          <button className='hover:text-[#933C24] transition duration-400'>Muffins</button>
          <button className='hover:text-[#933C24] transition duration-400'>Croissant</button>
          <button className='hover:text-[#933C24] transition duration-400'>Bread</button>
          <button className='hover:text-[#933C24] transition duration-400'>Tart</button>
          <button className='hover:text-[#933C24] transition duration-400'>Favorite</button>
        </div>

        <div className="ml-10 mr-10 h-[2px] bg-[#D9D9D9] opacity-50 mt-5"></div>
      </div>
      

      <div className='max-w-7xl mx-auto px-8 md:px-16 mt-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <img src={menuD07} alt="" className='w-full h-auto rounded-lg object-cover' />
          <img src={menuD08} alt="" className='w-full h-auto rounded-lg object-cover' />
          <img src={menuD09} alt="" className='w-full h-auto rounded-lg object-cover' />
          <img src={menuD10} alt="" className='w-full h-auto rounded-lg object-cover' />
          <img src={menuD11} alt="" className='w-full h-auto rounded-lg object-cover' />
          <img src={menuD12} alt="" className='w-full h-auto rounded-lg object-cover' />
        </div>
      </div>

      {/* ======== About Us Section ======== */}
      <div className="mt-24 w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${pageD03})` }}>
        <h2 className="text-white text-7xl font-semibold mb-10 tracking-widest" style={{ fontFamily: "Sansita Swashed" }}>
          About us
        </h2>
        <p className="text-[#B9B9B9] text-center text-2xl mt-5" style={{ fontFamily: "Inter" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Voluptatibus sed tempore distinctio, <br />
          minima nihil incidunt amet soluta cupiditate magnam?
        </p>
        <button className="font-semibold text-2xl mt-12 bg-[#933C24] text-white px-8 py-4 rounded-xl hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400">
          Read More
        </button>
      </div>

      {/* ======== Featured Treats Section ======== */}
      <div className='py-24 max-w-7xl mx-auto px-8 md:px-16'>
        <p className='text-center text-7xl font-semibold mb-24' style={{ fontFamily: "Sansita Swashed" }}>Featured Treats</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          
          <div className='flex-col'>
            <img src={menuD13} alt="" className='w-full rounded-lg' />
            <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
              <p>Puff Pastry</p> <span>8 Baht</span>
            </div>
          </div>
          
          <div className='flex-col'>
            <img src={menuD14} alt="" className='w-full rounded-lg' />
            <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
              <p>Doughnuts</p> <span>8 Baht</span>
            </div>
          </div>
          
          <div className='flex-col'>
            <img src={menuD15} alt="" className='w-full rounded-lg' />
            <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
              <p>Brownies</p> <span>8 Baht</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======== Footer Section ======== */}
      <div className="mt-24 w-full bg-cover bg-center flex-col py-20" style={{ backgroundImage: `url(${pageD04})` }}>
        <div className='max-w-7xl mx-auto px-8 md:px-16'>
          
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <img src={LogoD01} alt="" className='w-[150px]' />
            <div className='flex flex-col md:flex-row items-center mt-8 md:mt-0 gap-8 md:gap-12' style={{ fontFamily: "Inter" }}>
              <span className='text-2xl font-semibold text-[#E9BD8D]'>Follow us</span>
              <div className='flex gap-10 md:gap-12 text-4xl md:text-5xl text-[#E9BD8D]'>
                <a href="#" className='hover:text-[#933C24] transition duration-400'> <FaFacebook /> </a>
                <a href="#" className='hover:text-[#933C24] transition duration-400'> <FaPinterest /> </a>
                <a href="#" className='hover:text-[#933C24] transition duration-400'> <IoLogoWhatsapp /> </a>
                <a href="#" className='hover:text-[#933C24] transition duration-400'> <AiFillInstagram /> </a>
              </div>
            </div>
          </div>

          <div className="h-[2px] bg-[#E9BD8D] opacity-100 mt-8"></div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mt-16 text-white'>
            
            {/* About Us */}
            <div className='flex flex-col'>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>About Us</span>
              <span className='font-semibold text-3xl leading-loose'> (02) 807-4500 </span>
              <span className=' text-3xl leading-loose' style={{ fontFamily: "Poppins" }}>
                info@sau.ac.th  <br />
                19/1 Phetkasem Road <br />
                Nongkham Bangkok <br />
                10160
              </span>
            </div>
            
            {/* Explore */}
            <div className='flex flex-col'>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>Explore</span>
              <span className=' text-3xl leading-loose font-semibold' style={{ fontFamily: "Poppins" }}>
                Home  <br />
                Blog <br />
                Contact Us <br />
                Services
              </span>
            </div>
            
            {/* Recent News */}
            <div className='flex flex-col gap-y-8'>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>Recent News</span>
              <div className='flex items-center' style={{ fontFamily: "Poppins" }}>
                <img src={menuD16} alt="" className='w-[130px] rounded-lg' />
                <div className='flex flex-col ml-6 text-xl leading-relaxed'>
                  <span className='text-[#E9BD8C] font-semibold'>June 14,2025</span>
                  <span className='text-2xl'>Puff pastry bliss.</span>
                </div>
              </div>
              <div className='flex items-center' style={{ fontFamily: "Poppins" }}>
                <img src={menuD17} alt="" className='w-[130px] rounded-lg' />
                <div className='flex flex-col ml-6 text-xl leading-relaxed'>
                  <span className='text-[#E9BD8C] font-semibold'>June 14,2025</span>
                  <span className='text-2xl'>Puff pastry bliss.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <span className='flex justify-center items-center text-[#737373] text-3xl font-semibold mt-24' style={{ fontFamily: "Inter" }}>© 2025 Bake House. All rights reserved</span>
      </div>
    </>
  )
}