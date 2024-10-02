import '@/app/globals.css';
import Carousel from "@/_components/carousel";
import Link from 'next/link';

export default function Home() {
  return (
    <div>

      <div className='flex flex-col md:flex-row bg-custom-grey px-4 tablet:px-6 sm:px-8 md:px-8 lg:px-12 mb-4 md:mb-8'>
        <div className='w-full md:w-1/2 lg:w-2/5 pr-4 mr-4 mt-4 mb-4'>
          <h1 className='mb-4 font-bold text-3xl'>Vanshika Tour &amp; Travels</h1>
          <p className='mb-6 md:mb-12'>Discover the beauty of India with Vanshika Tours and Travels. We specialize in crafting unforgettable domestic travel experiences tailored to your preferences. From serene getaways to thrilling adventures, we have it all covered. Our comprehensive services include flight bookings, hotel accommodations, guided tours, and transportation arrangements. Let our experienced team ensure a hassle-free and enriching journey. <br/><br/>
          Choose Vanshika Tours and Travels for your next Indian adventure.</p>
          <Link href='/contact-us' className='bg-periwinkle rounded-full text-white font-bold px-4 py-2'>Contact Us</Link>
        </div>

        <div className='w-full md:w-1/2 lg:w-3/5 mb-4'>
          <div>
            <Carousel/> 
          </div>
        </div>

      </div>
      
      {/* Outer div containing lower section of home page */}
      <div className='flex flex-col ml-2 pl-2 tablet:pl-4 sm:pl-8 lg:pl-12 pr-6 sm:pr-10 lg:pr-14 border-box '>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Why Choose Vanshika Tour &amp; Travels?</h3>
            <p>With over a decade of experience in the travel and tourism industry, Vanshika Tour &amp; Travels has established itself as a trusted name in the sector. Our commitment to excellence is reflected in every aspect of our operations. We have a dedicated team of more than 50 professionals, including seasoned travel consultants, tour operators, customer service specialists, and logistics experts, all working together to create seamless and memorable travel experiences.</p>
          </div>
          <br/>

          <div>
            <h2 className='text-lg font-semibold mb-2'>Our Services</h2>
            <p>We offer a comprehensive range of travel services tailored to meet the unique needs of our clients:</p>
            <ul className='list-inside mx-1 tablet:mx-5 sm:mx-8 mt-2'>
              <li><span className='font-semibold'>Customized Travel Plans:</span> Tailor-made itineraries that cater to your specific preferences and requirements.</li>
              <li><span className='font-semibold'>Vacation Packages:</span> Curated packages for families, honeymooners, and corporate groups that offer exceptional value and unforgettable experiences.</li>
              <li><span className='font-semibold'>Corporate Travel Solutions:</span> Specialized services designed to meet the needs of businesses and organizations.</li>
              <li><span className='font-semibold'>Luxury Travel Options:</span> High-end travel experiences that combine comfort, elegance, and unique destinations.</li>
              <li><span className='font-semibold'>Group Travel Experiences:</span> Thoughtfully planned group tours that ensure a fun and stress-free journey for everyone.</li>
            </ul>
          </div>
          <br/>

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
            <span className='text-blue-600 font-bold'><Link href='/contact-us'>Contact us</Link></span>
            <span> today and let Vanshika Tour &amp; Travels turn your travel dreams into reality.</span>
             </p>
          </div>
          <br/>

          <div>
            <h5 className='text-lg font-semibold'>Vanshika Tour &amp; Travels – Your Trusted Travel Partner.</h5><br/>
          </div>
          <br/>

        </div>

    </div>
  );
}