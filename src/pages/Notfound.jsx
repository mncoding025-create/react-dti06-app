import React from 'react'
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";

export default function Notfound() {
  return (
    <div className='mt-20'>
        <h1 className='text-3xl text-center font-bold mt-20 text-red-600'>
            <MdOutlineDoNotDisturbAlt className='inline text-5xl mb-2'/>
            ไม่พบหน้านี้
            <br />กรุณาตรวจสอบ URL อีกครั้ง
        </h1>
      
    </div>
  )
}
