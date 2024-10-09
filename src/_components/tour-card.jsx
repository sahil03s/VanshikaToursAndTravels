import Image from "next/image";
import Link from "next/link";

export default function Card({content}) {
    return (
        <div className='flex flex-col relative w-52'>

            <div className="absolute left-4 card-image">
                <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    width={500}
                    height={500}
                    className="w-44 h-48 border-2 border-white"
                />
            </div>

            <div className='flex flex-col items-center h-44 mt-24 mb-4 pt-28 rounded-lg card-description'>
                <Link href={'/packages/' + content.link}>
                    <h3 className='text-sm h-fit px-2 py-2 text-center rounded-lg text-white bg-periwinkle hover:bg-black'>
                        {content.description}
                    </h3>
                </Link>
            </div>  
        </div>
    );
}