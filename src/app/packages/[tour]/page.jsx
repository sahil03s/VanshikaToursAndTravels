import fs from 'fs';
import path from 'path';
import Link from "next/link";
import Overview from './overview';
import Policy from './policy';

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
                <img 
                src={tour.image.src}
                alt={tour.image.alt}/>
            </div>
            <div className='w-3/5 my-4 mx-2'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-3xl mr-2'>{tour.heading}</h1>
                    <span className='text-red text-sm'>{tour.duration}</span>
                </div>
                <div>
                    <span className='text-sm'>{tour.route}</span>
                </div>
                <div className='mt-4'>
                    <div className='flex w-fit border-box border-periwinkle rounded-sm border-2 items-center px-2 py-1.5'>
                    <h3 className='mr-4 text-red font-semibold'>Price on Request</h3>
                    <Link 
                    className='px-4 py-1 border-2 border-periwinkle rounded-full mr-4 text-sm bg-periwinkle hover:bg-white text-white hover:text-periwinkle duration-300' 
                    href={`/contact-us?package=${tour.heading}&duration=${tour.duration}`}>Enquire Now</Link>
                    </div>
                </div>
                <Overview tour={tour}/>
            </div>
        </div>

        
        <div className='flex py-2'>
            <div className='w-8/12 mr-8'>
                <Policy/>
            </div>
            <div>
                <h1>Form will go here</h1>
            </div>
        </div>
        </div>
    );
  }