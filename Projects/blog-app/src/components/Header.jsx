
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

import { FaSearch } from "react-icons/fa";

const Header=()=>{
    return <>
   
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center">
          
            <img src="assets/img/logo.png" alt=""/> 
            <h1>ZenBlog</h1>
        </a>

        <nav id="navbar" className="navbar">
            <ul>
                <li><a href="index.html">Blog</a></li>
                <li><a href="single-post.html">Single Post</a></li>
                <li className="dropdown"><a href="category.html"><span>Categories</span>
                 <i className="bi bi-chevron-down dropdown-indicator"></i>
                 <GoTriangleDown/>
                 </a>
                    <ul>
                        <li><a href="search-result.html">Search Result</a></li>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span>
                         <i className="bi bi-chevron-down dropdown-indicator"></i>
                         <GoTriangleDown/>
                        </a>
                            <ul>
                                <li><a href="#">Deep Drop Down 1</a></li>
                                <li><a href="#">Deep Drop Down 2</a></li>
                                <li><a href="#">Deep Drop Down 3</a></li>
                                <li><a href="#">Deep Drop Down 4</a></li>
                                <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li>

                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
      

        <div className="position-relative">
            <a href="#" className="mx-2"><span className="bi-facebook"><FaFacebook/></span></a>
            <a href="#" className="mx-2"><span className="bi-twitter"><FaTwitter/></span></a>
            <a href="#" className="mx-2"><span className="bi-instagram"><FaInstagramSquare/></span></a>

            <a href="#" className="mx-2 js-search-open"><span className="bi-search"><FaSearch/></span></a>
            <i className="bi bi-list mobile-nav-toggle"></i>

           
            <div className="search-form-wrap js-search-form-wrap">
                <form action="search-result.html" className="search-form">
                    <span className="icon bi-search"></span>
                    <input type="text" placeholder="Search" className="form-control"/>
                    <button className="btn js-search-close"><span className="bi-x"></span></button>
                </form>
            </div>
           

        </div>

    </div>

</header>
    
    </>
}

export default Header;