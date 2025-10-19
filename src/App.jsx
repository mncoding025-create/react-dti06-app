import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"; // .jsx (ถ้าไฟล์เป็น .jsx)

/*
 * นี่คือจุดสำคัญ:
 * ชื่อไฟล์คือ "./pages/pageA.jsx" (ตัวเล็ก)
 * แต่เราตั้งชื่อตัวแปรที่ import เข้ามาเป็น "PageA" (ตัวใหญ่)
*/
import PageA from "./pages/PageA.jsx";
import PageB from "./pages/PageB.jsx";
import PageC from "./pages/PageC.jsx";
import PageD from "./pages/PageD.jsx";
import Notfound from "./pages/Notfound.jsx";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* * เราจึงต้องใช้ <PageA /> (ตัวใหญ่) 
            * React ถึงจะรู้ว่านี่คือ Component 
          */}
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
          <Route path="/pageD" element={<PageD />} />
          <Route path="*" element={<Notfound />} /> 
        </Routes>
    </BrowserRouter>
  );
}