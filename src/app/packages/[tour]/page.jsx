import fs from 'fs';
import path from 'path';
import Link from "next/link";
import Image from 'next/image';
import Overview from './overview';
import Policy from './policy';
import Itinerary from './itinerary';
import Preference from './preference';

// Fetch the JSON file data
async function getTourData() {
    const filePath = path.join(process.cwd(), 'src/app/packages/[tour]/tours.json');
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
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

    //Parsing and Displaying details about the tour
    return (
        <div className='px-4'>
        <div className='flex flex-row bg-white py-2 box-border'>
            <div className='w-2/5 bg-white my-4 mr-2'>
                <Image
                src={tour.image.src}
                alt={tour.image.alt}
                width={1000}
                height={1000}
                />
            </div>
            <div className='w-3/5 my-4 mx-2'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-3xl align-content-middle'>{tour.heading}<span className='text-red text-sm ml-3 align-middle'>{tour.duration}</span></h1>
                    
                </div>
                <div>
                    <span className='text-sm'>{tour.route}</span>
                </div>
                <div className='mt-4'>
                    <div className='flex w-fit border-box border-periwinkle rounded-sm border-2 items-center px-2 py-1.5'>
                    <h3 className='mr-4 text-red font-semibold'>Price on Request</h3>
                    <Link 
                    className='px-4 py-1 border-2 border-periwinkle rounded-full mr-4 text-sm bg-periwinkle hover:bg-white text-white hover:text-periwinkle duration-300' 
                    href={`/enquire-now?package=${tour.heading}&duration=${tour.duration}`}>Enquire Now</Link>
                    </div>
                </div>
                <Overview tour={tour}/>
            </div>
        </div>

        
        <div className='flex py-2'>

            {/* Left Side section containing Tour Itinerary and Policy */}
            <div className='w-8/12 mr-4'>

            {/* Tour Itinerary Section */}
            <div className='mb-4'>
                <Itinerary tour={tour}/>
            </div>

            {/* Policy Section */}
            <div>
                <Policy/>
            </div>

            </div>

            {/* Right Side container containing Form Section*/}
            <div className='w-4/12'>
                <Preference/>
            </div>
        </div>
        </div>
    );
  }