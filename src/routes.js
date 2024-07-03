import { BrowserRouter, Route, Routes } from "react-router-dom";
import Init from "./pages/Init";
import About from "./pages/About";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import Default from "pages/Default";
import Post from "pages/Post";
import Error404 from "./pages/Error404";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <Menu/>
      <Routes>
        <Route path="/" element={<Default />}> 
          <Route index element={<Init />}/>
          <Route path="about" element={<About />}/>
        </Route>
        <Route path="post/:id/*" element={<Post />}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
