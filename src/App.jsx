import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Blog_Details from "./pages/Single-blog/Blog_Details";
import Contact from "./component/contact/Contact";
import { useState } from "react";
import Footer from "./component/Footer/Footer";

function App() {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header setPopup={setPopup} />
        {popup && <Contact setPopup={setPopup} />}
        <Routes>
          <Route path="/" element={<Home setPopup={setPopup} />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog-detail" element={<Blog_Details />} />
        </Routes>
        <Footer setPopup={setPopup} />
      </BrowserRouter>
    </>
  );
}

export default App;
