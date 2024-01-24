import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Gallary.css'
const Gallary = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Explore your Self through Exploring</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
      Looking for something useful to read about travelling in India? You’ve come to the right place. Join the league of readers who find here detailed insights, interesting travel tips and ideas and daily inspiration.


</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">

      <div className="flex flex-wrap w-1/2  " >
        <div className="md:p-2 p-1 w-1/2 " data-aos="zoom-in ">
          <img alt="gallery" className="w-full object-cover h-full object-center block gallary_images" src="https://cdn.pixabay.com/photo/2015/06/23/05/26/tajmahal-818317_1280.jpg"/>
        </div>

        <div className="md:p-2 p-1 w-1/2" data-aos="zoom-in">
          <img alt="gallery" title='Red ford delhi' className="w-full object-cover h-full object-center block gallary_images" src="https://cdn.pixabay.com/photo/2017/04/23/19/16/red-fort-2254704_1280.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-full" data-aos="zoom-in">
          <img alt="gallery" title='hawa mahal ' className="w-full h-full object-cover object-center block gallary_images" src="https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2" data-aos="zoom-in">
        <div className="md:p-2 p-1 w-full" >
          <img alt="gallery" title='Konark Temple, Odisha' className="w-full h-full object-cover object-center block gallary_images" src="https://cdn.pixabay.com/photo/2021/11/19/04/51/temple-6808093_1280.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2" data-aos="zoom-in">
          <img alt="gallery" title="golden temple patna " className="w-full object-cover h-full object-center block gallary_images" src="https://cdn.pixabay.com/photo/2018/02/09/08/20/golden-3141099_1280.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2" data-aos="zoom-in">
          <img alt="gallery"  title='india gate delhi ' className="w-full object-cover h-full object-center block gallary_images" src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Gallary