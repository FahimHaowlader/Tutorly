import React from 'react'
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineRateReview } from "react-icons/md";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { useAuth } from '../Context/AuthContext';
import { TbFileDescription } from "react-icons/tb";
import axios from 'axios';
import Swal from 'sweetalert2'

const AddtutorPage = () => {
    const {user}=useAuth();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        const price = form.price.value;
        const url = form.url.value;
        const review = form.review.value;
        const language = form.language.value.toLowerCase();
        console.log(language)
        const tutor = {
            name,
            email,
            description,
            price,
            url,
            review,
            language    
        }
        axios.post('https://assigment-backend-xi.vercel.app/add-tutors',tutor)
        .then(res=>{
            
            console.log(res.data)
            if(res.data.insertedId){
                form.reset()
                    Swal.fire({
                    position: "center-center",
                    icon: "success",
                    title: "Your Tutorial Has Been Saved",
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
        })
        .catch(error =>{
            // console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                
              });
        })

    }
  return (
 
    <div>
        <h1 className='text-center text-5xl font-bold py-10 text-[rgb(32,201,148)] '>Add your Course</h1>
        <form onSubmit={handleSubmit} className='px-4 sm:px-20 md:px-32 pb-10  pt-7 text-xl'>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-20 '>
                <div className='w-full  sm:w-1/2 flex flex-col gap-5' >
                    <div className=' flex flex-col gap-3 '>
                        <div className='flex justify-center items-center gap-4'>
                            <CiUser/>
                        <input type="text" name='name' className='w-full px-2 py-1' value={ user ? user?.displayName : " "} readOnly required />
                        </div>
                        <hr />
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        <div className='flex justify-center items-center gap-4'>
                            <TfiEmail/>
                        <input type="email" name='email' value={ user ? user?.email:""} readOnly required className='w-full px-2 py-1' />
                        </div>
                        <hr />
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        <div className='flex justify-center items-center gap-4'>
                            <MdOutlineRateReview/>
                        <input type="number" name='review' className='w-full px-2 py-1' value={0} readOnly required />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className='w-full sm:w-1/2 flex flex-col gap-5' >
                <div className=' flex flex-col gap-3 '>
                        <div className='flex justify-center items-center gap-4'>
                            <HiMiniLanguage/>
                        <input type="text" name='language' className='w-full px-2 py-1' placeholder='Which Language You Want Teach' required />
                        </div>
                        <hr />
                    </div>
                    <div className=' flex flex-col gap-3 '>
                        <div className='flex justify-center items-center gap-4'>
                            <IoPricetagOutline/>
                        <input type="number" name='price' className='w-full px-2 py-1' placeholder='Your course Price in Dollar' required />
                        </div>
                        <hr />
                    </div>
                <div className=' flex flex-col gap-3 '>
                        <div className='flex justify-center items-center gap-4'>
                            <FaLink/>
                        <input type="url" name='url' className='w-full px-2 py-1'
                        placeholder='Your course Image link' required />
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
            <div className=' py-7 flex flex-col gap-5'>
            <div className='flex justify-center items-center gap-4'>
                            <TbFileDescription/>
                        <input type="text" name='description' className='w-full px-2 py-1'
                        placeholder='Give A Brife Description Of Yourr Course' required />
                        </div>
                        <hr />
                    </div>
                    <div className='py-5 pt-6 mx-auto w-40' >
                        <input type="submit"  value='Submit' className=' text-black text-3xl font-bold px-10 py-4 rounded-xl  bg-gradient-to-r from-[rgb(32,201,148)] to-[rgb(69,252,241)]'  />
                    </div>
            
        </form>
    </div>
     
    
    
  )
}

export default AddtutorPage
