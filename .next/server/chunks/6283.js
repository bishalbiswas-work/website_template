"use strict";
exports.id = 6283;
exports.ids = [6283];
exports.modules = {

/***/ 6283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/jsx-key */
// import React from 'react';
// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// SwiperCore.use([Autoplay, Navigation]);
// const OfferSlider = () => {
//     const data = [
//         {
//             img: "market.svg",
//             title: "Permanent Staffing",
//             text: "Find long-term talent solutions tailored to your company's needs."
//         },
//         {
//             img: "consulting.svg",
//             title: "Temporary Staffing",
//             text: "Flexible workforce solutions for short-term projects or seasonal demands."
//         },
//         {
//             img: "cognity.svg",
//             title: "In-house Staffing",
//             text: "Dedicated staffing solutions integrated seamlessly into your organization's operations."
//         },
//         {
//             img: "consulting.svg",
//             title: "Payroll Process",
//             text: "Streamlined payroll management to ensure accuracy and efficiency."
//         },
//     ];
//     return (
//         <>
//             <div className="box-swiper">
//                 <div className="swiper-container swiper-group-4">
//                     <Swiper
//                         slidesPerView={2}
//                         spaceBetween={30}
//                         loop={true}
//                         autoplay={{
//                             delay: 2500,
//                             disableOnInteraction: false
//                         }}
//                         navigation={{
//                             prevEl: ".swiper-button-prev-5",
//                             nextEl: ".swiper-button-next-5"
//                         }}
//                         className="swiper-wrapper pb-70 pt-5"
//                     >
//                         {data.map((item, i) => (
//                             <SwiperSlide>
//                                 <div className="swiper-slide">
//                                     <div className="card-grid-style-2 hover-up">
//                                         <div className="grid-2-img">
//                                             <img src={`assets/imgs/page/homepage1/${item.img}`} alt="Agon" />
//                                         </div>
//                                         <h3 className="text-heading-5 mt-20">{item.title}</h3>
//                                         <p className="text-body-text color-gray-600 mt-20">{item.text}</p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default OfferSlider;
/* eslint-disable @next/next/no-img-element */ /* eslint-disable react/jsx-key */ 


swiper__WEBPACK_IMPORTED_MODULE_2__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation
]);
const OfferSlider = ()=>{
    const data = [
        {
            img: "market.svg",
            title: "Permanent Staffing",
            text: "Find long-term talent solutions tailored to your company's needs."
        },
        {
            img: "consulting.svg",
            title: "Temporary Staffing",
            text: "Flexible workforce solutions for short-term projects or seasonal demands."
        },
        {
            img: "cognity.svg",
            title: "In-house Staffing",
            text: "Dedicated staffing solutions integrated seamlessly into your organization's operations."
        },
        {
            img: "consulting.svg",
            title: "Payroll Process",
            text: "Streamlined payroll management to ensure accuracy and efficiency."
        }, 
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "box-swiper",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "swiper-container swiper-group-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    navigation: {
                        prevEl: ".swiper-button-prev-5",
                        nextEl: ".swiper-button-next-5"
                    },
                    className: "swiper-wrapper pb-70 pt-5",
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        }
                    },
                    children: data.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-slide",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "card-grid-style-2 hover-up",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "grid-2-img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `assets/imgs/page/homepage1/${item.img}`,
                                                alt: "Agon"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-heading-5 mt-20",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-body-text color-gray-600 mt-20",
                                            children: item.text
                                        })
                                    ]
                                })
                            })
                        }, i)
                    )
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OfferSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;