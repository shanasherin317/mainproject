// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

 function Section2() {
  return (
    <>
    <div className='p-10'>
      <Swiper
      style={{height:"250px"}}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2017/02/a-sick-person-with-a-cold-or-flu-sleeping-in-bed-with-medications-on-the-bedside-table-16x9.jpg" alt="" />
            <p className='text-center mt-1 text-[18px] font-serif max-[651px]:text-[10px]'>Cold Relief</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://hips.hearstapps.com/hmg-prod/images/definitely-cant-go-to-work-with-this-cold-royalty-free-image-1635283589.jpg?crop=1xw:0.84296xh;center,top" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Cold and Flu</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://prakashhospitals.in/wp-content/uploads/2022/06/diabetic-care-seniors-1.jpg" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Diabetes and Care</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img className='w-40' src="https://www.austingastro.com/wp-content/uploads/sites/68/2017/12/digestivehealth.jpg" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Digestive Health</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://firstaidcoursestasmania.com.au/wp-content/uploads/2022/02/Untitled-design-2022-02-17T235658.411-1024x577.png" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>First Aid</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://st4prdbebeautiful4s4ci.blob.core.windows.net/www-bebeautiful-in/right-technique-to-apply-skincare-products_mobilehome.jpg" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Skin Care</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://daynightnursinghomecare.com/wp-content/uploads/2022/03/New-Born-Baby-Care-Tips.png" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Child and Babycare</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://resize.indiatvnews.com/en/resize/newbucket/400_-/2024/01/heart-1705112110.jpg" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Heart Health</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://www.pharmakhabar.com/storage/app/categories/custom/ba84602d540eec8f524d204ba92d0868.jpeg" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Eye and Ear Care</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='border-8 border-[#944E63] rounded-md p-4'>
            <img src="https://www.teamsterscare.com/wp-content/uploads/2020/08/TeamstersCare_AugustNewsletter_Page.jpg" alt="" />
            <p className='text-center mt-1 font-serif max-[651px]:text-[10px]'>Respiratory Health</p>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );

}
  export default Section2
