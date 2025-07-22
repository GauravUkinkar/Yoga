import React from "react";
import "./Blog.scss";
import img1 from "../../assets/price1.jpg";
import { MdArrowForward } from "react-icons/md";

const Blog = () => {
  const data = [
    {
      img: img1,
      date: "Jan 21, 2017",
      title: "Blog Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: img1,
      date: "Jan 21, 2017",
      title: "Blog Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: img1,
      date: "Jan 21, 2017",
      title: "Blog Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <div className="pagetop-parent parent bg-img-cover">
        <div className="pagetop-cont cont">
          <nav className="breadcrumb">
            <a href="/" className="breadcrumb-link">
              Home
            </a>
            <span className="breadcrumb-separator"> &gt; </span>
            <span className="breadcrumb-current">Blog</span>
          </nav>
          <h2>Blog</h2>
        </div>
      </div>

      <div className="parent blog-parent">
        <div className="cont blog-cont">
          {data.map((item, index) => (
            <div className="mainwrapper">
              <img src={item.img} alt="blog image" />
              <div className="content-wrap">
                <div className="date">
                  <span>{item.date} </span>
                </div>
                <h2 className="title">{item.title}</h2>
                <p className="text">{item.text}</p>
                <a href="/blog-detail" className="readmore">
                  Read More
                  <span>
                    <MdArrowForward />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
