'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import '@/app/globals.css';
import './styles.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Carousel() {
    const [images, setImages] = useState([]); // array containing objects with members src and alt
    const [currIndex, setCurrIndex] = useState(0); // indicates the index of curent Image to be shown

    // fetches image objects list from images.json on initial render
    useEffect(() => {
        axios.get('/images/carousel/images.json')
        .then((res) => setImages(res.data))
        .catch((err) => console.error('Error in fetching images', err));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 3000); //change image every 3 seconds
        return () => clearInterval(interval);   // cleanup the interval on unmount
    }, [currIndex, images.length]);

    //Go to the next slide  
    const nextSlide = () => {
        images.length && setCurrIndex((prevIndex) => ((prevIndex+1) % images.length));
    }
      
    //Go to the previous slide
    const prevSlide = () => {
        setCurrIndex((prevIndex) => (prevIndex+images.length-1) % images.length);
    }


  return (
      <div className="relative w-full mt-4 h-96">
        {images.map((image, index) => (
            <div 
            key={index}
            className='absolute top-0 left-0 w-full'>
                {index === currIndex && (<img 
                                            src={image.src} 
                                            alt={image.alt}
                                            className={index === currIndex ? 'slide active-image' : 'slide'}/>)}
            </div>
        ))}
        <div className='flex items-center absolute top-0 left-0 w-full h-full'>
        <ArrowBackIosNewIcon className='absolute left-10 text-red-500' onClick={prevSlide}/>
        <ArrowForwardIosIcon className='absolute right-10 text-red-500' onClick={nextSlide}/>
        </div> 
      </div>
  )
  
}
