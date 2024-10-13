'use client'

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import '@/app/globals.css';
import './styles.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Carousel({path, arrow, content, imageList}) {
    const [images, setImages] = useState([]); // array containing objects with members src and alt
    const [currIndex, setCurrIndex] = useState(0); // indicates the index of curent Image to be shown

    // fetches image objects list from json file on initial render
    useEffect(() => {
        if(path)
        {
            axios.get(path)
            .then((res) => setImages(res.data))
            .catch((err) => console.error('Error in fetching images', err));
        }
        else
            setImages(imageList);
        
    }, [imageList, path]);


    // Memoize nextSlide function to avoid recreating it on every render
    const nextSlide = useCallback(() => {
        images.length && setCurrIndex((prevIndex) => ((prevIndex+1) % images.length));
    }, [images]); // dependency array means this function will only be created when images change
    

    // Memoize prevSlide function to avoid recreating it on every render
    const prevSlide = useCallback(() => {
        setCurrIndex((prevIndex) => (prevIndex+images.length-1) % images.length);
    }, [images]); // dependency array means this function will only be created when images change

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 3000); //change image every 3 seconds
        return () => clearInterval(interval);   // cleanup the interval on unmount
    }, [nextSlide, currIndex]);

  return (
      <div className="relative h-full w-full">
        {images.map((image, index) => (
            <div 
            key={index}
            className='absolute h-full w-full'>
                <Image 
                    src={image.src} 
                    alt={image.alt}
                    height={500}
                    width={500}
                    priority
                    className={`w-full h-full transition-opacity duration-500 ease-in-out ${index === currIndex ? '' : 'hidden'}`}/>
            </div>
        ))}

        {
        arrow && 
        <div className='flex items-center absolute top-0 left-0 w-full h-full'>
        <ArrowBackIosNewIcon className='absolute left-4 lg:left-10 text-white' onClick={prevSlide}/>
        <ArrowForwardIosIcon className='absolute right-4 lg:right-10 text-white' onClick={nextSlide}/>
        </div> 
        }

        {
            content && 
            <div className='absolute bottom-2 left-4 font-bold text-lg text-white'>
                <h2>{content.heading}</h2>
                <span>{content.duration}</span>
            </div>
        }

      </div>
  )
  
}
