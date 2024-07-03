import { BrowserRouter, Route, Routes } from "react-router-dom";
import Init from "./pages/Init";
import About from "./pages/About";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import Default from "pages/Default";

function AppRoutes() {
  return (
    <BrowserRouter>
     <Menu/>
      <Routes>
        <Route path="/" element={<Default />}> 
          <Route index element={<Init />}/>
          <Route path="about" element={<About />}/>
        </Route>
        <Route path="*" element={<div>Page not found</div>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
