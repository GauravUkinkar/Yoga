import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Blog_Details from "./pages/Single-blog/Blog_Details";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Contact/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog-detail" element={<Blog_Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
