import '@/app/globals.css';
import Carousel from "@/_components/carousel";
import Link from 'next/link';
import Head from 'next/head';
import CarouselSlider from '@/_components/carousel-slider';

export default function Home() {
  const canonicalUrl = "https://www.vanshikatour.in/";
  
  return (
    <div>
      {/* Head component for SEO, including canonical tag */}
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <div className='flex flex-col md:flex-row bg-custom-grey px-4 tablet:px-6 sm:px-8 md:px-8 lg:px-12 mb-4 md:mb-8'>
        <div className='w-full md:w-1/2 lg:w-2/5 xl:w-5/12 2xl:w-1/2 pr-4 mr-4 mt-4 mb-4'>
          <h1 className='mb-4 font-bold text-3xl'>Vanshika Tour &amp; Travels</h1>
          <p className='mb-6 md:mb-8'>Vanshika Tour & Travels is committed to attracting unforgettable experiences. We are a leading Tour and Travels Agency in Varanasi, and we really find ourselves enjoying this more than anything else. No matter whether you are planning a business getaway, family vacation or an individual travel itinerary, our team will make your travel dreams come true.</p>
          <h5 className='text-lg italic'>Vanshika Tour &amp; Travels – Your Trusted Travel Partner.</h5><br/>
          
        
          <Link href='/contact-us' className='bg-periwinkle rounded-full text-white font-bold px-4 py-2'>Contact Us</Link>
        </div>

        <div className='w-full md:w-1/2 lg:w-3/5 xl:w-7/12 2xl:w-1/2 h-60 tablet:h-72 sm:h-80 md:h-80 lg:h-96 my-4 rounded-2xl overflow-hidden'>
            <Carousel 
            path='/carousel-homepage.json'
            arrow={true}
            /> 
        </div>

      </div>
      
      {/* Outer div containing lower section of home page */}
      <div className='flex flex-col ml-2 pl-2 tablet:pl-4 sm:pl-8 lg:pl-12 pr-6 sm:pr-10 lg:pr-14 border-box '>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Why Choose Vanshika Tour &amp; Travels?</h3>
            <p>Vanshika Tour & Travels has made a mark in this field and over its half of decade long service, it has become renowned as one of the outstanding entities that serves incredible experience with tour packages. Every aspect of our every operation speaks to the excellence we are committed to. Our full-time team is over 50 strong and entirely focused on a singular mission: to empower our clients with perfectly curated, seamless travel.</p>
          </div>
          <br/>

          <div>
            <h2 className='text-lg font-semibold mb-2'>Our Services</h2>
            <p>We offer a comprehensive range of travel services tailored to meet the unique needs of our clients:</p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mt-4 mx-4'>

              <div className='bg-custom-grey services-card p-4'>
                <span className='font-bold text-red'>Customized Tour Packages:</span> 
                <p>Tailored itineraries to meet individual preferences and needs.</p>
              </div>


              <div className='bg-custom-grey services-card p-4'>
                <span className='font-semibold text-red'>Religious Activities/Tours:</span> 
                <p>Spiritual activities and tour :
                </p>
                <ul className='list-inside list-disc'>
                  <li className='list-inside'>Temple darshan</li>
                  <li>Pind daan ceremonies in Varanasi, Prayagraj and Bodhgaya</li>
                  <li>Rudraabhishek at Kashi Vishwanath</li>
                </ul>
              </div>

              <div className='bg-custom-grey services-card p-4'>
                <span className='font-semibold text-red'>Sightseeing Tours:</span> 
                <p>Exploration of significant religious and cultural sites (Vishwanath Temple, BHU, Sarnath,Ayodhya, Nalanda, Vrindavan, Taj Mahal, etc.).</p>
              </div>

              <div className='bg-custom-grey services-card p-4'>
                <span className='font-semibold text-red'>Transport Services:</span> 
                <p>Convenient transportation options including:</p>
                <ul className='list-inside list-disc'>
                  <li>Pick and drop services</li>
                  <li>Transportation for specific events</li>
                  <li>Corporate Events</li>
                </ul>
              </div>

              <div className='bg-custom-grey services-card p-4'>
              <span className='font-semibold text-red'>Hotel Bookings:</span> 
              <p>Assistance with booking accommodations to suit all budgets and preferences.</p>
              </div>

              <div className='bg-custom-grey services-card p-4'>
              <span className='font-semibold text-red'>Tour Guides:</span> 
              <p>Knowledgeable guides available to enhance your travel experience with insights and local expertise.</p>
              </div>

              <div className='bg-custom-grey services-card p-4'>
              <span className='font-semibold text-red'>Areas of Service:</span> 
              <p>We are covering Uttar Pradesh, Bihar, Delhi, Madhya Pradesh, and Nepal.</p>
              </div>

            </div>
          </div>
          <br/>

          <div className='mt-4 mb-8 w-full'>
            <h3 className='text-3xl font-semibold mb-6 text-center'>Popular Tour Packages</h3>
            <CarouselSlider/>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-2'>Our Fleet</h3>
            <p>We understand that comfort and safety are paramount when it comes to travel. Our extensive fleet of over 50 vehicles, including more than 10 Tempo Travellers, 10 Maharaja Tempo Travellers, and a variety of luxury cars, is maintained to the highest standards. Whether you&apos;re traveling with a small group or a large delegation, our vehicles ensure a smooth and comfortable journey.</p>
          </div>
          <br/>

          <div>
            <h2 className='text-lg font-semibold mb-2'>Where We Operate</h2>
            <p>Vanshika Tour &amp; Travels operates extensively across Uttar Pradesh, Bihar, Jharkhand, and Nepal, as well as other regions of India, including the picturesque northeast, vibrant south, and historic northern areas. Our deep understanding of the cultural and historical significance of these destinations allows us to create travel experiences that are both enriching and authentic.</p>
          </div>
          <br/>

          <div>
            <h3 className='text-lg font-semibold mb-2'>Our commitment</h3>
            <p>At Vanshika Tour &amp; Travels, our clients are at the heart of everything we do. We strive to exceed expectations by offering personalized services that cater to individual travel needs. Our team&apos;s passion for creating unforgettable travel memories is matched by our commitment to safety, reliability, and customer satisfaction.</p>
          </div>
          <br/>

          <div>
            <p>
            <span>Ready to embark on your next adventure? </span>
            <span className='text-blue-600 font-bold'><Link className='text-periwinkle' href='/contact-us'>Contact us</Link></span>
            <span> today and let Vanshika Tour &amp; Travels turn your travel dreams into reality.</span>
             </p>
          </div>
          <br/><br/>

        </div>
    
    </div>
  );
}