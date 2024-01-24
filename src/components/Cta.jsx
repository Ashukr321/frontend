import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Cta = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
      <section class="text-gray-600 body-font" >
  <div class="container px-5 py-24 mx-auto" data-aos="flip-up">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Explore your Self by Exploring  the world</h1>
      <Link to ="https://www.holidify.com/state/madhya-pradesh/top-destinations-places-to-visit.html" target='_blank'>

      <button class=" text-white bg-indigo-500 border-0  w-90 py-2 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Know more</button>
      </Link>

    </div>
  </div>
</section>
    </div>
  )
}

export default Cta