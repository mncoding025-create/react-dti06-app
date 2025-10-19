import React from 'react' 
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'

export default function Home() {
  return (
  <div style={{ fontFamily :'Roboto Mono'}} className='w-full bg-[#69f1b2]'>
    
    
    {/* ด้านบน */}
    <div className='w-8/12 mx-auto flex py-20 justify-between '>
    {/* ส่วนที่ 1 */}
      <div className='flex flex-col'>
        <div>
          <h1 className='text-4xl font-bold text-[#333333]'>
            My Web Design by
          </h1>
          <h1 className='text-4xl font-bold text-[#333333]'>
            React + tailwindCSS
          </h1>
        </div>
        <br />
        <div mt-10>
          <span className='text-[#333333] text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit.Beatae veniam consequatur ullam impedit fugiat <br />
            nulla delectus incidunt tenetur optio necessitatibus <br />
            autem, aut veritatis amet? Quibusdam qui odio ullam delectus vitae. 
          </span>
        </div>
        <div className='mt-8'>
          <a href='#' className='bg-[#333333] text-white rounded-full py-4 px-8'>
            Follow Me
          </a>
        </div>
        <div className='mt-10 flex gap-x-5'>
            <Link to="/PageA">
                <img src={img1} alt="img1" className='w-70 h-min mr-5' /> 
            </Link>
            <Link to="/PageB">
                <img src={img2} alt="img2" className='w-72 h-min mr-5' />
            </Link>
        </div>
      </div>
    {/* ส่วนที่ 2 */}
      <div className='flex gap-10 ml-10'>
        <Link to ="/PageC">
          <img src={img3} alt="img3" className='w=58 h-min' />
        </Link>
        <Link to ="/PageD">
          <img src={img4} alt="img4" className='w-40 h-min' />
        </Link>
      </div>

    </div>
    {/* ล่าง */}
      <div className='flex flex-col justify-center items-center text-lg'>
      <span>(รูปและเนื้อหาใช้เพื่อการศึกษาเท่านั้น)</span>
      <span>create by Fluke SAU</span>
      <span>Copyright © 2025 WoW WoW WoW</span>
      </div>
    
  </div>
  )
}
