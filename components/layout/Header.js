import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

export default function Header({ headerCls, headerTop }) {
  const [scroll, setScroll] = useState(0);

  const [isToggled, setToggled] = useState(false);
  const handleToggled = () => {
    setToggled(!isToggled);
    !isToggled
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      {headerTop && (
        <div className="header-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>Welcome to Central Roofing System</li>
                    <li>
                      <i className="fas fa-phone-alt" />
                      <Link href="tel:0242867618"> 024 286 7618</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:agent@centralroofingsystem.com">
                        agent@centralroofingsystem.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <div className="header-top-right">
                  <div className="header-lang">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="assets/img/icon/united-states.jpg" alt="" />{" "}
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/russia.jpg" alt="" />
                          Russia
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/india.jpg" alt="" />
                          India
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/bangladesh.jpg" alt="" />
                          Bangla
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>

                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <header>
        <div
          id="sticky-header"
          className={`menu-area  ${scroll ? "sticky-menu" : ""} ${
            headerCls ? headerCls : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleToggled}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo different-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/new-logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="logo d-none">
                      <Link href="/">
                        <img src="/assets/img/logo/new-logo.png" alt="Logo" />
                      </Link>
                    </div>

                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          {/* <Link href="https://centralroofingsystem.com/"> */}
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About us</Link>
                        </li>
                        <li>
                          <Link href="/services">Services</Link>
                        </li>
                        <li>
                          <Link href="/project">Projects</Link>
                        </li>
                        {/* <li>
                          <Link href="/team">Our Team</Link>
                        </li> */}
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <Link
                            target="_blank"
                            href="https://wa.me/<number>"
                            className="btn"
                          >
                            Get a Quoute
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleToggled}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/new-logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="/#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>

                        <li>
                          <Link href="/#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
