import '@/app/globals.css';
import Carousel from "@/_components/carousel";
import SearchBar from "@/_components/searchbar";
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Carousel/> 
      {/* <SearchBar/>   */}
      <div className='mx-8 px-16 border-box'>
      <br/><br/>
      <div className='flex'>
        <div className='w-2/5'>
            <Image
            src='/images/Caros/Vns_ghats1.png' 
            alt='Ghats'
            width={1000}
            height={1000}
            />
        </div>
        <div className='ml-6 w-3/5'>
          <h1 className='text-3xl font-bold'>Car Rental in Varanasi - Hire a Taxi for City Tours and Airport Transfers</h1> <br/>
          
          <p className='mb-6'> Welcome to Vanshika Tour and Travels, your trusted partner for hassle-free car rental services in Varanasi. Whether you need a ride for a city tour, an airport transfer, or a sightseeing adventure, we&apos;ve got you covered. Our fleet includes a wide range of vehicles, from luxury AC cars to economy cars, all available at competitive and reasonable rates.</p>
        </div>
      </div>


      <p>At Vanshika Tour and Travels, we pride ourselves on being a reliable and professional taxi service provider. Our experienced drivers know the best routes in and around Varanasi, ensuring a smooth and comfortable journey. We offer tailored services to meet all your travel needs, including: </p>

      <ul className='ml-8 mb-6 mt-2'>
      <li>Airport Transfers</li>
      <li>City Tours</li>
      <li>Temple and Sightseeing Tours</li>
      <li>Buddhist Circuit Tours</li>
      <li>Wedding Parties & Corporate Meetings</li>
      </ul>

    

      <p>As the leading tour operator and travel agency in Varanasi, Vanshika Tour and Travels is your top choice for car and Tempo Traveller rentals. Whether you&apos;re seeking a luxury ride or an affordable economy car, we have the perfect solution. We also provide tours and rentals to nearby popular destinations such as: </p>

      <ul className='ml-8 mb-6 mt-2'>
        <li>Vindhyachal</li>
        <li>Bodhgaya</li>
        <li>Ayodhya</li>
        <li>Prayagraj (earlier known as Allahabad)</li>
        <li>Mirzapur</li>
        <li>Lucknow</li>
        <li>Agra</li>
        <li>Mathura</li>
        <li>Delhi</li>
      </ul>
     

        <p>
        Additionally, we offer budget-friendly car rentals and tour packages to Nepal, covering Lumbini, Chitwan, Kathmandu, Manokamna, and Pokhara. <br/><br/>

        Book your ride today with Vanshika Tour and Travels and experience the best in affordable and convenient travel.
        </p> <br/>

        <p><Link href='/contact-us' className='underline text-blue-600 font-semibold'>Contact us</Link> today to learn more about how we can turn your travel dreams into reality.</p><br/>

        <h2 className='text-lg font-semibold'>Vanshika Tour & Travels – Your Trusted Travel Partner.
        </h2><br/>

      </div>
    </div>
  );
}
