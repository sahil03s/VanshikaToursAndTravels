'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "@/_components/datepicker";
import './tour.css'


export default function Preference() {

    // useRouter hook helps to redirect to thank-you page after form is submitted successfully
    const router = useRouter();

    const initialValue = {name:'', phone:'', mail:'', date:'', duration:'', passengers:'', comment:''};
    
    //regular expressions to check the validity of first name, last name and phone no.
    const pattern = {
        name: /^[A-Za-z]+[ ]*[A-Za-z]*$/,
        inputPhone: /^[1-9]{1,1}[0-9]{0,9}[ ]*$/,
        completePhone: /^[1-9]{1,1}[0-9]{9,9}[ ]*$/,
        duration:/^[1-9]{1,1}[0-9]{0,2}$/,
        passengers:/^[1-9]{1,1}[0-9]{0,3}$/,
    };

    // details helps to track the data filled in form, initially it is empty
    const [details, setDetails] = useState(initialValue);

    // formErrors keeps track of errors in input of form data, for example, putting characters in number field, formErrors.phone will contain detail of this error
    const [formErrors, setFormErrors] = useState({});


    // formValidation validates the necessary fields to be valid using regular expressions in pattern object declared above and setFormErrors accordingly, if any.
    const formValidation = (obj, submitFlag=false) => {
        const errors = {};
        if(submitFlag && !obj.name)
            errors.name = 'This is required';
        else if(obj.name && !pattern.name.test(obj.name))
            errors.name = 'Invalid input! Name must contain only alphabets and spaces';

        if(submitFlag && !obj.phone)
            errors.phone = 'This is required';
        else if(obj.phone)
        {
            if(submitFlag)
            {
                if(!pattern.completePhone.test(obj.phone))
                    errors.phone = 'Please Enter a valid phone number';
            }
            else if(!pattern.inputPhone.test(obj.phone))
                errors.phone = 'Please Enter a valid phone number';
        }
        
        if(obj.duration && !pattern.duration.test(obj.duration))
            errors.duration = 'Invalid Input';

        if(obj.passengers && !pattern.duration.test(obj.passengers))
            errors.passengers = 'Invalid Input';
            
        setFormErrors(errors);
        return errors;
    }

    // on submitting a form, this function validates the user's input, if no errors are there, api call is made to notify the user on whatsapp with brochure and then user is redirected to thank-you page
    const handleForm = async (event) => {
        event.preventDefault();
        const err = formValidation(details, true);
        if(Object.keys(err).length === 0)
        {
            fetch('/api/sendWhatsapp', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json',
                },
                body : JSON.stringify(details)
            });
            router.push('/thank-you');
        }
    }

    // handles any change in user's input in form
    const handleChange = (event) =>{
        const updated = { ...details, [event.target.name] : event.target.value};
        
        formValidation(updated);

        setDetails(updated); 
    } 


    // this function marks the border as red for those input fields which have errors on form submission
    const checkOutlineColor = (name) => {
        return Object.keys(formErrors).includes(name)  ? 'outline-red' : 'outline-gray-300';
    }

    // this function marks the border as red for those input fields which have errors on form submission
    const checkOutlineColorFocus = (name) => {
        return Object.keys(formErrors).includes(name)  ? 'outline-red' : 'outline-black';
    }
    

    // this function marks the label color as red for those input fields which have errors on form submission
    const checkLabelColor = (name) => {
        return Object.keys(formErrors).includes(name)  ? 'text-red' : 'text-black';
    }


    return (
        <div className='bg-custom-grey max-h-full h-fit w-full p-4'>

            <h3 className='font-bold text-2xl'>Your Preference</h3>

            <div className='form-container flex flex-col mt-4'>
                <form onSubmit={handleForm}>
                    <input type="input" name="name" value={details.name} autoComplete="off" placeholder="Name*"
                        onChange={handleChange}
                        className={` px-4 py-1 text-sm outline outline-1 ${checkOutlineColor('name')} focus:${checkOutlineColorFocus('name')} rounded-sm`}
                    />
                    <input type="input" name="phone" value={details.phone} autoComplete="off" placeholder="Phone*"
                        onChange={handleChange}
                        className={`px-4 py-1 text-sm outline outline-1 ${checkOutlineColor('phone')} focus:${checkOutlineColorFocus('phone')} rounded-sm`}
                    />

                    <input type="input" name="mail" value={details.mail} autoComplete="off" placeholder="Email"
                        onChange={handleChange}
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />

                    <div className='mb-4 w-11/12 flex flex-row pr-2 sm:pr-3 md:pr-1.5'>
                       <DatePicker details={details} setDetails={setDetails} preferenceFlag={true} />
                    </div>

                    <input type="input" name="duration" value={details.duration} autoComplete="off" placeholder="Duration of Stay (in Days)"
                        onChange={handleChange}
                        className={`px-4 py-1 w-full text-sm outline outline-1 ${checkOutlineColor('duration')} focus:${checkOutlineColorFocus('duration')} rounded-sm`}
                    />

                    <input type="input" name="passengers" value={details.passengers} autoComplete="off" placeholder="No. of Passengers"
                        onChange={handleChange}
                        className={`px-4 py-1 text-sm outline outline-1 ${checkOutlineColor('passengers')} focus:${checkOutlineColorFocus('passengers')} rounded-sm`}
                    />


                    <input type="input" name="comment" value={details.comment} autoComplete="off" placeholder="Comments"
                        onChange={handleChange}
                        className='px-4 py-1 text-sm outline outline-1 outline-gray-300 focus:outline-black rounded-sm'
                    />

                    <div className='mx-4 mt-1 flex justify-center'>
                        <button className='bg-periwinkle text-white font-bold text-base rounded-full px-3 py-1' type="submit">Submit now</button>
                    </div>
                    
                </form>
            </div>

        </div>
    );
}