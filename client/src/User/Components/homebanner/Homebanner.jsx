

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Home1 from "../../home/Home1";
// import Home2 from '../../home/Home2';
import Home3 from '../../home/Home3';





function Homebanner() {
  return (

    <>
    <Swiper
      cssMode={true}
      navigation={true}
      // pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
      <Home3/>
      </SwiperSlide>


      <SwiperSlide>
      <Home1/>
      </SwiperSlide>

      {/* <SwiperSlide>
      <Home3/>
      </SwiperSlide>
      
      <SwiperSlide>
      <Home1/>
      </SwiperSlide> */}
    </Swiper>
  </>
  )
}

export default Homebanner
