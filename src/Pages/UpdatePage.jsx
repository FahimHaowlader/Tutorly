import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineRateReview } from "react-icons/md";
import { HiMiniLanguage } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { useAuth } from '../Context/AuthContext';
import { TbFileDescription } from "react-icons/tb";
import Swal from 'sweetalert2'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import DataLoading from "../Components/DataLoading";


const UpdatePage = () => {
    const {id} = useParams()
    const {user}=useAuth();
    const [loading, setloading] = useState(true)
    const [tutor, settutor] = useState('')
   
    useEffect(() => {
      fetch(`https://assigment-backend-xi.vercel.app/tutorials/${id}`)
      .then(res => res.json())
      .then(data => {
        settutor(data)
        setloading(false)
    })
      .catch(error => {
        console.log(error)
        setloading(false)
      })
    }, [])
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = e.target 
        const language = form?.language.value
        const price = form?.price.value
        const url = form?.url.value
        const description = form?.description.value
        const tutor = {
            language,
            price,
            url,
            description
        }
        console.log(tutor)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
            
            if (result.isConfirmed) {
                fetch(`https://assigment-backend-xi.vercel.app/update/${id}`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({tutor})
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.modifiedCount){
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been Updated.",
                                    icon: "success"
                                });
                            }
                            else{
                            
                                Swal.fire({
                                  title: "Unchanged",
                                  text: "Make Some Change At first ",
                                  icon: "question"
                                });
                            }
                        })
                        .catch(error =>{
                            Swal.fire({
                                icon: "error",
                                title: "Error",
                                text: "Update failed",   
                              });
                        })
             
            }
          });

        }
       


if(loading){
    return <DataLoading/>
}
  return (
    <div>
            <h1 className='text-4xl  text-center sm:text-5xl font-bold py-10 text-[rgb(32,201,148)] '>Update your Course</h1>
            <form onSubmit={handleSubmit} className=' px-4 sm:px-20 md:px-32 pb-10  pt-7 text-xl'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-5 md:gap-20 '>
                    <div className='w-full sm:w-1/2 flex flex-col gap-5' >
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
                            <input type="number" name='review' className='w-full px-2 py-1' value={tutor ? parseInt(tutor.review) : ''} readOnly required />
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2 flex flex-col gap-5 text-gray-500' >
                    <div className=' flex flex-col gap-3 '>
                            <div className='flex justify-center items-center gap-4'>
                                <HiMiniLanguage/>
                            <input type="text" name='language' className='w-full px-2 py-1 ' defaultValue={tutor?.language?.toUpperCase()} required />
                            </div>
                            <hr />
                        </div>
                        <div className=' flex flex-col gap-3 '>
                            <div className='flex justify-center items-center gap-4'>
                                <IoPricetagOutline/>
                            <input type="number" name='price' className='w-full px-2 py-1' defaultValue={tutor?.price} required />
                            </div>
                            <hr />
                        </div>
                    <div className=' flex flex-col gap-3 '>
                            <div className='flex justify-center items-center gap-4'>
                                <FaLink/>
                            <input type="url" name='url' className='w-full px-2 py-1'
                            defaultValue={tutor?.url} required />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className=' py-7 flex flex-col gap-5'>
                <div className='flex justify-center items-center gap-4 text-gray-500'>
                                <TbFileDescription/>
                            <input type="text" name='description' className='w-full px-2 py-1'
                            defaultValue={tutor?.description} required />
                            </div>
                            <hr />
                        </div>
                        <div className='py-5 pt-6 mx-auto w-40' >
                            <input type="submit"  value='Update' className=' text-black text-3xl font-bold px-10 py-4 rounded-xl  bg-gradient-to-r from-[rgb(32,201,148)] to-[rgb(69,252,241)]'  />
                        </div>
                
            </form>
        </div>
  )
}

export default UpdatePage
