import React from "react";
import "./Blog_Details.scss";

const Blog_Details = () => {
  return (
    <>
     
     <div className="pagetop-parent parent bg-img-cover">
        <div className="pagetop-cont cont">
          <nav className="breadcrumb">
            <a href="/" className="breadcrumb-link">
              Home
            </a>
            <span className="breadcrumb-separator"> &gt; </span>
            <span className="breadcrumb-current">Blog Details</span>
          </nav>
          <h2>Blog Details</h2>
        </div>
      </div>

      
      <div className="parent blog-detail-parent">
        <div className="cont blog-detail-cont">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <div className="page-top-parent bg-img-cover"></div>
         <div class="date-cat">
         <span>Jan 21, 2017</span>
         <span>Yoga</span>
         </div>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            minus eos praesentium, veritatis repudiandae officiis iure inventore
            doloribus? Culpa provident pariatur adipisci odit minima repellat id
            recusandae. Suscipit laboriosam consectetur explicabo commodi dolor,
            omnis aliquam! Harum, possimus quis porro sed ipsa optio qui
            blanditiis nihil fugit natus aliquid! Harum, quidem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            minus eos praesentium, veritatis repudiandae officiis iure inventore
            doloribus? Culpa provident pariatur adipisci odit minima repellat id
            recusandae. Suscipit laboriosam consectetur explicabo commodi dolor,
            omnis aliquam! Harum, possimus quis porro sed ipsa optio qui
            blanditiis nihil fugit natus aliquid! Harum, quidem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            minus eos praesentium, veritatis repudiandae officiis iure inventore
            doloribus? Culpa provident pariatur adipisci odit minima repellat id
            recusandae. Suscipit laboriosam consectetur explicabo commodi dolor,
            omnis aliquam! Harum, possimus quis porro sed ipsa optio qui
            blanditiis nihil fugit natus aliquid! Harum, quidem!
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog_Details;
