/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

const CompanyLogoSlider = () => {
    const logos = [
        "assets/imgs/slider/logo/sample-logo-1.svg",
        "assets/imgs/slider/logo/sample-logo-2.svg",
        "assets/imgs/slider/logo/sample-logo-3.svg",
        "assets/imgs/slider/logo/sample-logo-4.svg",
        "assets/imgs/slider/logo/sample-logo-5.svg",
        "assets/imgs/slider/logo/sample-logo-6.svg"
    ];

    return (
        <div className="box-swiper">
            <div className="swiper-container swiper-group-4">
                <Swiper
                    slidesPerView={2} // Initially, show 2 logos
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev-5",
                        nextEl: ".swiper-button-next-5"
                    }}
                    className="swiper-wrapper pb-20 pt-5"
                    breakpoints={{ // Adjust slidesPerView for larger screens
                        768: {
                            slidesPerView: 4,
                        },
                    }}
                >
                   {logos.map((logo, index) => (
    <SwiperSlide key={index}>
        <div className="swiper-slide">
            <div className="col-lg-10 col-md-12 col-sm-12 col-10 text-center">
                <a href="/#">
                    <img alt="Company Logo" src={logo} style={{ maxWidth: '100%' }} />
                </a>
            </div>
        </div>
    </SwiperSlide>
))}

                </Swiper>
            </div>
        </div>
    );
};

export default CompanyLogoSlider;
