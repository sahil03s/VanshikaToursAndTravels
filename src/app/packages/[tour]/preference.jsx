'use client'

import DatePicker from '@/_components/datepicker';
import './tour.css'


export default function Preference() {
    return (
        <div className='bg-custom-grey max-h-full h-fit w-full p-4'>

            <h2 className='font-bold text-2xl'>Your Preference</h2>

            <div className='form-container flex flex-col mt-4'>
                <form>
                    <input type="input" name="name" autoComplete="off" placeholder="Name*"
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />
                    <input type="input" name="phone" autoComplete="off" placeholder="Phone*"
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />

                    <input type="input" name="mail" autoComplete="off" placeholder="Email"
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />

                    <div className='mb-4 w-full pr-9'>
                        <DatePicker/>
                    </div>


                    <input type="input" name="passengers" autoComplete="off" placeholder="No. of Passengers"
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />

                    <input type="input" name="duration" autoComplete="off" placeholder="Duration of Stay (in Days)"
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />

                    <input type="input" name="comment" autoComplete="off" placeholder="Comments"
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />

                    <div className='mx-4 mt-1 flex justify-center'>
                        <button className='bg-periwinkle text-white text-sm rounded-full px-3 py-1' type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>

        </div>
    );
}