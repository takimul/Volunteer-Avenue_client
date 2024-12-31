import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import firstImg from '../../assets/images/banner.jpg';
import secondImg from '../../assets/images/banner_2.jpg';
import thirdImg from '../../assets/images/banner_3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';


const Banner = () => {

    

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='max-w-7xl mx-auto mt-1 rounded-lg'
        >
            <SwiperSlide><img className='w-full' src={firstImg} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src={secondImg} alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full' src={thirdImg} alt="" /></SwiperSlide>

            ...
        </Swiper>
    );
};

export default Banner;