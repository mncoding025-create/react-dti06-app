import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import pageA from "./pages/pageA";
import pageB from "./pages/pageB";
import pageC from "./pages/pageC";
import pageD from "./pages/pageD";
import Notfound from "./pages/Notfound";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageA" element={<pageA />} />
          <Route path="/pageB" element={<pageB />} />
          <Route path="/pageC" element={<pageC />} />
          <Route path="/pageD" element={<pageD />} />
          <Route path="*" element={<Notfound />} /> key="notfound"
        </Routes>
    </BrowserRouter>
  );
}
