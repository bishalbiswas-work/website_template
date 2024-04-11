/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const Header = ({ mobileMenu, handleOpen, headerStyle, handleRemove }) => {
  const [scroll, setScroll] = useState(0);
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
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    {/* Use Bootstrap classes to make logo responsive */}
                    <div className="d-none d-md-block">
                      {" "}
                      {/* Show on medium and larger screens */}
                      <img
                        alt="Agon"
                        height={70}
                        width={75}
                        src="/assets/imgs/template/logohbr.png"
                      />
                    </div>
                    <div className="d-md-none">
                      {" "}
                      {/* Show on smaller screens */}
                      <img
                        alt="Agon"
                        height={50}
                        width={50}
                        src="/assets/imgs/template/logohbr.png"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="header-left">
              <div className="header-nav ">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link href="/page-about-1">
                        <a>About</a>
                      </Link>
                    </li>
                    <li className="has-children">
                      <Link href="#">
                        <a>What We Do</a>
                      </Link>
                      <ul className="sub-menu" style={{ width: "230px" }}>
                        <li>
                          <Link href="/bpo_bpm_ites">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              BPO, BPM & ITES
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/IT">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Information Technology
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/health_care">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Healthcare
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              E-commerce
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/manufacturing">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Manufacturing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/retail">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Retail
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/leadership_hiring">
                            <a className="closer">
                              <i className="fi fi-rr-gem" />
                              Leadership Hiring
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="#">
                        <a>Solutions</a>
                      </Link>
                      <ul className="sub-menu" style={{ width: "230px" }}>
                        <li>
                          <Link href="/permanent_staffing">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              Permanent Staffing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contract_staffing">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              Contract Staffing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/in_house_staffing">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              In House Staffing
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/payroll_process">
                            <a>
                              <i className="fi fi-rr-paper-plane" />
                              Payroll Process
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/blog-2">
                        <a>Insights</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contactUs">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </nav>

                {/* Conditionally render burger-icon div only in mobile view */}
                <div className="burger-icon-wrapper d-block d-xl-none">
                  <div
                    className="burger-icon burger-icon-white"
                    onClick={handleOpen}
                    style={{ marginTop: "10px" }}
                  >
                    <div>
                      {/* <span className="burger-icon-top" />
                      <span className="burger-icon-mid" />
                      <span className="burger-icon-bottom" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
