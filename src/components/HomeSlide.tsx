import WeddingImage1 from '@/assets/images/wedding-1.jpg';
import WeddingImage2 from '@/assets/images/wedding-4.jpg';
import WeddingImage3 from '@/assets/images/wedding-2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { SelectedPage } from "@/types";
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type propsType = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const HomeSlide = ({ setSelectedPage }: propsType) => {
  return (
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    id='home'
    >
        <Swiper
            spaceBetween={30}
            speed={2500}
            effect={'fade'}
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 1500 }}
            className="mySwiper"
        >
            <SwiperSlide className='w-full h-[100vh]'>
                <img src={WeddingImage1} className="w-full h-full object-cover"  />
            </SwiperSlide>
            <SwiperSlide className='w-full h-[100vh]'>
                <img src={WeddingImage2} className="w-full h-full object-cover"  />
            </SwiperSlide>
            <SwiperSlide className='w-full h-[100vh]'>
                <img src={WeddingImage3} className="w-full h-full object-cover"  />
            </SwiperSlide>
        </Swiper>
    </motion.div>
  )
}

export default HomeSlide