import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Features = () => {
  useEffect(()=>{
    Aos.init();
  })

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto"  data-aos="fade-right">
          <div className="flex flex-wrap w-full mb-20"  >
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Indian Tourism
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://cdn.pixabay.com/photo/2019/11/02/08/15/tajmahal-4595871_1280.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  TAJMAHAL
                </h2>
                <p className="leading-relaxed text-base">
                The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://cdn.pixabay.com/photo/2020/01/03/17/18/architecture-4738647_1280.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Golden Temple
                </h2>
                <p className="leading-relaxed text-base">
                The Golden Temple, also known as Harmandir Sahib or Darbār Sahib, is a gurdwara located in the city of Amritsar, Punjab, India. It is the pre-eminent spiritual site of Sikhism and one of the holiest sites in the religion, alongside the Gurdwara Darbar Sahib Kartarpur in Kartarpur 
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg"
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  India Gate
                </h2>
                <p className="leading-relaxed text-base">
                India is a country located in South Asia, known for its rich history, diverse culture, and stunning natural beauty. It is a popular destination for tourists from all over the world offering a wide range of experiences from bustling cities to serene countryside.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://cdn.pixabay.com/photo/2019/12/15/15/47/hawa-mahal-4697399_1280.jpg"
                  alt="content"
                  aria-checked
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                 Hawa Mahal 
                </h2>
                <p className="leading-relaxed text-base">
                The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation. It has a curved architecture that leans at an 87 degree angle, and a pyramidal shape which has helped it stay erect for centuries. dedicated to Lord Krishna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
