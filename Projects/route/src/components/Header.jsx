import logo from "../assets/react.svg";
import {Link, useLocation } from  'react-router-dom'
const Header = () => {
    const {pathname}=useLocation()
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <img src={logo} alt="logo" />
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className={`nav-link  ${pathname==='/' ? 'active':''}`} aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className={`nav-link  ${pathname==='/features' ? 'active':''}`}>
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className={`nav-link   ${pathname==='/pricing' ? 'active':''}`}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faqs" className={`nav-link   ${pathname==='/faqs' ? 'active':''}`}>
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link   ${pathname==='/about' ? 'active':''}`}>
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
