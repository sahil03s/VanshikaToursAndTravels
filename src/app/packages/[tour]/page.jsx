import fs from 'fs';
import path from 'path';
import Link from "next/link";
import Head from 'next/head';
import Overview from './overview';
import Policy from './policy';
import Itinerary from './itinerary';
import Preference from './preference';
import EastIcon from '@mui/icons-material/East';
import Carousel from '@/_components/carousel';

// Fetch the JSON file data
async function getTourData() {
    const filePath = path.join(process.cwd(), 'public/tours.json');
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export async function generateMetadata({ params }) {
    const tours = await getTourData();
    const tour = tours[params.tour];
  
    return {
      title: tour ? `${tour.heading} | Vanshika Tour and Travels` : "Tour Not Found | Vanshika Tour and Travels",
      description: tour ? `Explore ${tour.heading} with Vanshika Tour and Travels and enjoy a customized travel experience to famous landmarks. Our tailor-made tour packages offer seamless travel with vehicle rentals and guided tours, ensuring a memorable journey to ${tour.heading} and nearby attractions. Start your unforgettable journey today and explore more with us!` : "Tour not found",
    };
}


// Generate dynamic routes for each tour based on the JSON keys. It fetches data at build time. This data is used to pre-render the page once, and then page is served as a static HTML file to users, making its performance extremely fast
export async function generateStaticParams() {
    const tours = await getTourData();

    return Object.keys(tours).map((tour) => ({
        tour : tour,
    }));
}

// Page Content
export default async function Page({ params }) {
    //Fetch the tour package data from JSON file
    const tours = await getTourData();
    
    //Extracting tour package data according to url params.
    const tour = tours[params.tour];

    // If data is not found, return Tour not found  
    if(!tour)
    {
        return <div>Tour not found</div>;
    }

    const canonicalUrl = `https://www.vanshikatour.in/packages/${tour.link}`;

    //Parsing and Displaying details about the tour
    return (
        <div className='mx-4 tablet:mx-6 sm:mx-8 lg:mx-12'>

        {/* Head component for SEO, including canonical tag */}
        <Head>
            <link rel="canonical" href={canonicalUrl} />
        </Head> 


        <div className='grid sm:grid-cols-2 lg:grid-cols-12 bg-white py-2 box-border'>
            <div className='row-start-2 lg:col-span-5 sm:row-span-3 lg:row-span-4 bg-white mt-4 lg:mb-4 mr-2'>
                <div className='w-auto h-64 tablet:h-72 sm:h-80 lg:h-96 border-white border-4 card-image '>
                <Carousel imageList={tour.image} arrow={true}/>
                </div>
            </div>

            <div className='lg:col-span-7 mt-4 sm:mx-2 max-h-fit'>
                <div className='flex items-center mb-2 sm:mb-0'>
                    <h2 className='font-bold text-3xl sm:text-2xl md:text-3xl align-content-middle'>{tour.heading}<span className='text-red text-sm ml-3 align-middle'>{tour.duration}</span></h2>    
                </div>

                <div>
                    {tour.route.map((ele, index) => {
                        return index 
                        ? <span key={index} className='text-sm'><EastIcon fontSize=''/>{ele}</span> 
                        : <span key={index} className='text-sm'>{ele}</span>
                    })}
                    
                </div>
            </div>

            <div className='lg:col-span-7 sm:mx-2 sm:max-md:mt-2 mt-4 max-h-fit'>
                <p className='text-sm'><span className='text-sm font-bold'>Note:</span> We can customize the package according to your preferences and interests.</p>
            </div>
                    
            <Link className='lg:col-span-7 sm:mx-2 mt-2 lg:mt-1 max-h-fit' href={`/enquire-now?package=${tour.heading}&duration=${tour.duration}`}>
                <div className='flex w-fit border-box border-periwinkle rounded-sm border-2 items-center px-2 py-1 md:py-1.5'>
                    <h6 className='sm:max-md:mr-2 mr-4 text-red sm:max-md:text-sm text-base font-semibold'>Price on Request</h6>
                    <div className='px-4 py-1 border-2 border-periwinkle rounded-full mr-1 lg:mr-4 sm:max-md:text-xs text-sm font-bold bg-periwinkle hover:bg-white text-white hover:text-periwinkle duration-300'>
                        Enquire Now
                    </div>
                </div>
            </Link> 

            <div className='sm:col-span-2 lg:col-span-7 lg:mx-2'>
                {tour.overview.length!==0 && <Overview tour={tour}/>}
            </div>
        </div>

        
        <div className='grid md:grid-cols-5 lg:grid-cols-3 gap-x-4 py-2'>

            {/* Tour Itinerary Section */}
            <div className='md:col-span-3 lg:col-span-2 mb-4'>
                <Itinerary tour={tour}/>
                { tour.tips && 
                    <div className='mb-4'>
                        <h6 className='font-bold text-base'>Additional Tips:</h6>
                        <ul className='list-disc list-inside'>
                            {tour.tips.map((ele, index) => {
                                return (
                                    <li key={index}>
                                        <span className='font-bold text-sm'>{ele.text}</span>
                                        <span className='text-sm'>{ele.description}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>

            {/* Right Side container containing Form Section*/}
            <div className='md:col-span-2 lg:col-span-1 md:row-span-2'>
                <Preference/>
            </div>


            {/* Policy Section */}
            <div className='md:col-span-3 lg:col-span-2'>
                <Policy/>
            </div>

        </div>
        </div>
    );
  }