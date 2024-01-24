import React, { useEffect } from 'react'
import {Button} from '@mui/material'
import './Home.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Hero2 from '../components/Hero2';
import Features from '../components/Features';
import Cta from '../components/Cta';
import Testimonial from '../components/Testimonial';
// import Caresule from '../components/Caresule'

const Home = () => {
   useEffect(()=>{
    Aos.init();
  })
  return (
  <>
   <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" data-aos="fade-right">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"  >
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">"India Gate: A National War Memorial Honoring the Soldiers of Undivided India"
      </h1>
      <p class="mb-8 leading-relaxed">India is a country located in South Asia, known for its rich history, diverse culture, and stunning natural beauty. It is a popular destination for tourists from all over the world offering a wide range of experiences from bustling cities to serene countryside.</p>
      <div class="flex justify-center">
      <Link to="/gallary">
      <Button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">know More </Button>
      </Link>
       
        
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="zoom-in">
      <img class="object-cover object-center rounded" alt="hero" src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg"/>
    </div>
  </div>

</section>

<Hero2/>
{/* <Caresule/> */}
<Testimonial/>
<Cta/>
<Features/>
  </>
 

  )
}

export default Home