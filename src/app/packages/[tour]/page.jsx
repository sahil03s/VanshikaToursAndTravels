import fs from 'fs';
import path from 'path';
import Link from "next/link";

// Fetch the JSON file data
async function getTourData() {
    const filePath = path.join(process.cwd(), 'src/app/packages/[tour]/tours.json');
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

// // Generate dynamic routes for each tour based on the JSON keys
export async function generateStaticParams() {
    const tours = await getTourData();

    return Object.keys(tours).map((tour) => ({
        tour : tour,
    }));
}

export default async function Page({ params }) {

    const tours = await getTourData();
    const tour = tours[params.tour];

    if(!tour)
    {
        return <div>Tour not found</div>;
    }

    return (
        <div>
        <div className='flex flex-row  bg-white py-2 box-border'>
            <div className='w-2/5 bg-white my-4 ml-4 mr-2'>
                <img 
                src={tour.image.src}
                alt={tour.image.alt}/>
            </div>
            <div className='w-3/5 my-4 mx-2 px-2'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-xl mr-2'>{tour.heading}</h1>
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
                    href='/'>Enquire Now</Link>
                    </div>
                </div>
                <div className='mt-4 bg-custom-grey pt-1'>
                    <h2 className='font-bold text-xl'>Overview</h2>
                    <div>
                        {tour.overview.map((ele, index) => <div key={index}><p className='text-sm'>{ele}</p><br/></div>)}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }