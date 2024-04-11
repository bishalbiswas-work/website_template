/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="user-account">
              <img src="/assets/imgs/template/logohbr.png" alt="Agon" />

              <div className="content">
                <h6 className="user-name">
                  Human Before Resource{" "}
                  <span className="text-brand">Pvt.Ltd.</span>
                </h6>
                {/* <p className="font-xs text-muted">
                                    You have 5 new messages
                                </p> */}
              </div>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <li
                      className={
                        isActive.key == 1
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span onClick={() => handleToggle(1)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span> */}
                      <Link href="/">
                        <a className="active">Home</a>
                      </Link>
                      {/* <ul className={isActive.key == 1 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/"><a>Homepage - 1</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-2"><a>Homepage - 2</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-3"><a>Homepage - 3</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-4"><a>Homepage - 4</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-5"><a>Homepage - 5</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-6"><a>Homepage - 6</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-7"><a>Homepage - 7</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/index-8"><a>Homepage - 8</a></Link>
                                                </li>
                                            </ul> */}
                    </li>
                    <li
                      className={
                        isActive.key == 2
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span> */}

                      <Link href="/page-about-1">
                        <a>About</a>
                      </Link>
                      {/* <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/page-about-1"><a>About Us - 1</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-2"><a>About Us - 2</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-about-3"><a>About Us - 3</a></Link>
                                                </li>
                                            </ul> */}
                    </li>
                    <li
                      className={
                        isActive.key == 3
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(3)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link href="#">
                        <a>What We Do</a>
                      </Link>
                      <ul
                        className={
                          isActive.key == 3
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/bpo_bpm_ites">
                            <a className="closer">BPO, BPM & ITES</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/IT">
                            <a className="closer">IT</a>
                          </Link>
                        </li>
                        {/* <li className="hr"><span /></li> */}
                        <li>
                          <Link href="/health_care">
                            <a className="closer">health_care</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ecommerce">
                            <a className="closer">E-Commerce</a>
                          </Link>
                        </li>
                        {/* <li className="hr"><span /></li> */}
                        <li>
                          <Link href="/manufacturing">
                            <a className="closer">Manufacturing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/retail">
                            <a className="closer">Retail</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/leadership_hiring">
                            <a className="closer">Leadership Hiring</a>
                          </Link>
                        </li>
                        {/* <li>
                                                    <Link href="/page-career-detail"><a className="closer">Career Detail</a></Link>
                                                </li> */}
                      </ul>
                    </li>
                    <li
                      className={
                        isActive.key == 4
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      <span
                        onClick={() => handleToggle(4)}
                        className="menu-expand"
                      >
                        <i className="fi-rr-angle-small-down"></i>
                      </span>

                      <Link href="#">
                        <a>Solutions</a>
                      </Link>
                      <ul
                        className={
                          isActive.key == 4
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link href="/permanent_staffing">
                            <a>Permanent Staffing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contract_staffing">
                            <a>Contract Staffing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/in_house_staffing">
                            <a>In-House Staffing</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/payroll_process">
                            <a>Payroll Process</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/blog-2">
                        <a>Insights</a>
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 5
                          ? "has-children active"
                          : "has-children"
                      }
                    >
                      {/* <span onClick={() => handleToggle(5)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span> */}

                      <Link href="/contactUs">
                        <a>Contact Us</a>
                      </Link>
                      {/* <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/blog-1"><a className="closer">Blog 1</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/blog-2"><a className="closer">Blog 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>

                                                    <Link href="/blog-single"><a>Blog Single</a></Link>
                                                </li>
                                            </ul> */}
                    </li>

                    {/* <li className={isActive.key == 6 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(6)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-shop-grid-1"><a>Shop</a></Link>
                                            <ul className={isActive.key == 6 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>

                                                    <Link href="/page-shop-grid-1"><a className="closer">Shop Grid - 1</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/page-shop-grid-2"><a className="closer">Shop Grid - 2</a></Link>
                                                </li>
                                                <li>

                                                    <Link href="/shop/1"><a>Product Details</a></Link>
                                                </li>
                                            </ul>
                                        </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default Sidebar;
