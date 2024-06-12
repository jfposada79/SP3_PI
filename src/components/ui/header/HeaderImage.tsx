import Image from 'next/image';
import { useState } from 'react';

import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css';
// const HeaderImage: React.FC = () => {
//   return (
//     // <div className="flex w-full flex-col">
//     //   <div className="flex px-5 justify-center items-center w-full ">
//     //     <Image
//     //       src="/imgs/fakeslider.png"
//     //       alt="Tomatto"
//     //       className=" sm:p-0"
//     //       width={1000} // Asegúrate de proporcionar un ancho
//     //       height={500} // y una altura
//     //     />
//     //   </div>
//     // </div>

    
//   );
// };

interface Props {
  images: string[];
  title: string;
  className?: string;
}

const HeaderImage: React.FC = () => {
  return (
    <div className="swiper mt-5" style={{ width: '400px', height: '200px' }}>
      <div className="swiper-wrapper">
        {/* Imagen 1 */}
        <div className="swiper-slide">
          <img src="https://tequierofashion.com/cdn/shop/products/cdf3a82ba80aebff1acbb504e6ca7ab7_720x.jpg?v=1571720319" alt="Image 1" style={{ maxWidth: '500px' }} />
        </div>
        {/* Imagen 2 */}
        <div className="swiper-slide">
          <img src="https://tequierofashion.com/cdn/shop/products/product-image-827453293_720x.jpg?v=1571720312" alt="Image 2" style={{ maxWidth: '300px' }} />
        </div>
       
      </div>
      {/* Botones de navegación */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};


export default HeaderImage;