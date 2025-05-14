import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { useState,useEffect } from 'react'
import DataLoading from '../Components/DataLoading'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const MyTutorials = () => {
    const navigate =useNavigate()
    const {user} = useAuth()
    const [loading, setloading] = useState(true)
    const [MyTutorials, setMyTutorials] = useState([])
    const handleDelete = (id)=>{      
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                setloading(true)
                fetch(`https://assigment-backend-xi.vercel.app/remove?id=${id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount){
                         setMyTutorials(MyTutorials.filter(item => item._id !== id))
                         Swal.fire({
                            title: "Deleted!",
                            text: "Your Tutorial has been deleted.",
                            icon: "success"
                          });
            }
            setloading(false)
            })
            .catch(err =>{
                console.log(err)
               setloading(false)
               })
            }
          });
       console.log("delete")       
    }
    const handleUpdate = (id)=>{
        console.log("update")
        navigate(`/tutorials-update/${id}`)
    }
    useEffect(()=>{
        // fetch(`https://assigment-backend-xi.vercel.app/mytutorials?email=${user?.email}`,)
        // .then(res => res.json())
        // .then(data =>{
        //     setMyTutorials(data)
        //     setloading(false)
            
        // })
        // .catch(error =>{
        //     console.log(error)
        //     setloading(false)
        // })

        axios(`https://assigment-backend-xi.vercel.app/mytutorials?email=${user?.email}`,{withCredentials : true})
        .then(res =>{
            setMyTutorials(res.data)
            setloading(false)
        })
        .catch(error =>{
            console.log(error)
            setloading(false)
        })
    },[])
    if(loading){
        return <DataLoading/>
    }
  return (
    <div>
        {
            MyTutorials ?  
         <div>   
    <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-center py-10 '>My All <span className='text-[rgb(74,152,255)]'> Tutorials </span></h1>
      <div className=' px4 sm:px-20 md:px-32 pb-16'>
        <table className='table-fixed'>
            <thead>
                <tr>
                    <th className='border-2 py-3 hidden md:table-cell text-xl font-bold border-black w-80'>Tutorial Image </th>
                    <th className='border-2  py-3  text-xl font-bold  border-black w-72'> Tutorial Info </th>
                    <th className='border-2  py-3 hidden md:table-cell  text-xl font-bold border-black w-96'> Tutorial Des </th>
                    <th className='border-2 py-3 text-xl font-bold  border-black w-60'> Modification</th>
                    
                </tr>
            </thead>
            <tbody>
                { MyTutorials.map((tutorial ) => (
                     <tr key={tutorial._id} className=' h-40 '>
                     <td className='border-2 hidden md:table-cell border-black'>
                         <div className='rounded-xl'>   
                     <img src={tutorial.url} className='h-44 w-[295px] p-2 rounded-xl object-fit' alt="" />
                     </div>
                     </td>
                     <td className='border-2  border-black'>
                         <div className='p-2 flex flex-col gap-4 text-xl font-semibold text-gray-500 '>
                             <p> <span className='font-bold text-black'> Language</span> : {tutorial?.language?.toUpperCase()}</p>
                             <p>  <span className='font-bold text-black'> Review</span> : {tutorial?.review} </p>
                             <p>  <span className='font-bold text-black'> Price</span> : {tutorial?.price} $</p>
                             <p>  <span className='font-bold text-black'> Name</span> :{tutorial?.name} </p>
                         </div>
                     </td>
                     <td className='border-2 hidden md:table-cell border-black'>
                        <p className=' p-2 text-lg text-center overflow-hidden h-40'> {tutorial.description} </p>
                     </td>
                     <td className='border-2 border-black'>
                     <div className='p-0 sm:p-2 flex flex-col justify-center items-center gap-5'>
                             <button onClick={ ()=> handleUpdate(tutorial._id) } className='text-2xl font-bold bg-gradient-to-r from-[rgb(85,202,157)] to-[rgb(0,255,192)] py-3 px-16  rounded-xl '>Update</button>
                             <button onClick={()=> handleDelete(tutorial._id)} className='text-2xl font-bold bg-gradient-to-r from-[rgb(241,91,91)] to-[rgb(244,80,80)] py-3 px-[68px]  rounded-xl '>Delete</button>
                         </div>
                     </td>
                    
                 </tr>
                  ))}
            </tbody>
        </table>
      </div>
      </div>
      :<div className='text-6xl font-bold text-center py-[226px]'>
      <h1>You Do Not Have Any Tutorial</h1>
  </div> 
        }
   
   
    </div>
  )
}

export default MyTutorials
