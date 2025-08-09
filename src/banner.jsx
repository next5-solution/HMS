// src/components/Banner.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: 'https://source.unsplash.com/1600x600/?hospital,doctor',
      title: 'Expert Care, Close to Home',
      desc: 'We deliver quality healthcare with compassion.',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/1600x600/?medical,nurse',
      title: '24/7 Emergency Services',
      desc: 'Round-the-clock emergency care and rapid response.',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/1600x600/?healthcare,hospital',
      title: 'Advanced Medical Technology',
      desc: 'State-of-the-art facilities and diagnostics.',
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img src={slide.image} alt={slide.title} className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
