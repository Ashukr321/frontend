import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom'
const Hero2 = () => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos="zoom-in">
      <img class="object-cover object-center rounded" alt="hero" src="https://cdn.pixabay.com/photo/2020/01/03/17/18/architecture-4738647_1280.jpg" />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" data-aos="fade-left">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The Golden Temple, also known as Harmandir Sahib
      
      </h1>
      <p class="mb-8 leading-relaxed">The Golden Temple, also known as Harmandir Sahib or Darbār Sahib, is a gurdwara located in the city of Amritsar, Punjab, India. It is the pre-eminent spiritual site of Sikhism and one of the holiest sites in the religion, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur and Gurdwara Janam Asthan in Nankana Sahib. The temple is an open house of worship for all people, regardless of religion or background, and is known for its inclusivity and openness, as symbolized by its four entrances representing the four directions.</p>
      <div class="flex justify-center">
      <Link to ="https://theplanetd.com/the-golden-temple-of-amritsar-indias-shining-star/" target='_blank'>

        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know more </button>
      </Link>

       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero2