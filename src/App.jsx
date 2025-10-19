import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
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
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
          <Route path="/pageD" element={<PageD />} />
          <Route path="*" element={<Notfound />} /> 
        </Routes>
    </BrowserRouter>
  );
}