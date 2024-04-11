import { useState } from "react";
import dynamic from "next/dynamic";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import {Roboto} from "@next/font/google"

// const roboto= Roboto({
//     subsets: ["latin"],
//     weight:['400', '700']
// })

const Layout = ({ children, headerStyle }) => {
  const [openClass, setOpenClass] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
    setMobileMenu(true);
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      setMobileMenu(false);
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />
      {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"></link> */}

      <Header
        mobileMenu={mobileMenu}
        handleOpen={handleOpen}
        headerStyle={headerStyle}
        handleRemove={handleRemove}
      />
      <Sidebar openClass={openClass} handleRemove={handleRemove} />
      {/* <main className={roboto.className}> */}
      <main className="main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
