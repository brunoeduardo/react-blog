import { BrowserRouter, Route, Routes } from "react-router-dom";
import Init from "./pages/Init";
import About from "./pages/About";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
     <Menu/>
      <Routes>
        <Route path="/" element={<Init />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
