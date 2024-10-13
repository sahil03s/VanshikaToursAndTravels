import Image from "next/image";
import Link from "next/link";

export default function Card({content}) {
    return (
        <div className='flex flex-col relative w-28 sm:w-32 md:w-40 lg:w-52 h-auto'>

            <div className="absolute left-2 sm:left-4 card-image">
                <Image
                    src={content.featured.image.src}
                    alt={content.featured.image.alt}
                    width={500}
                    height={500}
                    className="w-24 md:w-32 lg:w-44 h-24 md:h-32 lg:h-48 border-2 border-white"
                />
            </div>

            <div className='flex flex-col items-center h-32 md:h-40 lg:h-40 mt-8 lg:mt-24 mb-4 pt-20 md:pt-28 rounded-lg card-description'>
                <Link href={'/packages/' + content.link}>
                    <h3 className='text-xs md:text-sm h-fit px-1 sm:px-2 py-2 text-center rounded-lg text-white bg-periwinkle hover:bg-black'>
                        {content.featured.description}
                    </h3>
                </Link>
            </div>  
        </div>
    );
}