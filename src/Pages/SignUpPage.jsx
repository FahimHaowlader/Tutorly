import React from "react";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate()
    const {createEmailUser,createGoogleUser,setuser,user,error,seterror,setloading,updateUserInfo}=useAuth();
    if (user){
        return navigate('/')
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target 
        const name =  form.name.value
        const url = form.url.value
        const email = form.email.value
        const password = form.password.value
        const info = {
            displayNmae :name,
            photoURL :url
        }
            createEmailUser(email,password)
            .then(res =>{
                updateUserInfo(info)
                .then(res =>{
                    setloading(false)
                    navigate('/')
                })
                .catch(error =>{
                    seterror(error.message)
                    setloading(false)
                })
            })
            .catch(error =>{
                seterror(error.message)
                setloading(false)
            })
    }
    const handleGoogleSignup =()=> {
        createGoogleUser()
        .then(res =>{
            setloading(false)
            navigate('/')
        })
        .catch(error =>{
            seterror(error.message)
            setloading(false)
            })
    }

  return (
    <div>
      <div className="">
        <h1 className="text-7xl font-bold text-center py-8 md:pl-11">Register</h1>
        <div className="px-4 sm:px-20 md:px-32 flex flex-col md:flex-row  pb-10 ">
          <div className="bg-white w-[380px] md:w-[600px] space-y-5 md:pr-16 md:border-r border-black">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
              <div className="w-[400px] sm:w-[600px] md:w-full">
                  <div className="  text-3xl flex gap-5 pb-2 px-5 pl-7  items-center">
                    <RiAccountPinCircleLine />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      required
                      className="w-full md:w-[400px] text-2xl focus:border-none px-3 hover:border-none active:border-none"
                    />
                  </div>
                  <hr />
                </div>
                <div className="w-[400px] sm:w-[600px] md:w-full">
                  <div className="text-3xl flex gap-5 pb-2 px-5 pl-7 items-center">
                    <RiAccountPinCircleLine />
                    <input
                      type="url"
                      name="url"
                      placeholder="Enter Your Image URL"
                      required
                      className="w-full md:w-[400px] text-2xl focus:border-none px-3 hover:border-none active:border-none"
                    />
                  </div>
                  <hr />
                </div >
                <div className="w-[400px] sm:w-[600px] md:w-full">
                  <div className="text-3xl flex gap-5 pb-2 px-5 pl-7  items-center">
                    <RiAccountPinCircleLine />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      className="w-full md:w-[400px] text-2xl focus:border-none px-3 hover:border-none active:border-none"
                    />
                    <div className="pl-16"></div>
                  </div>
                  <hr />
                </div>
                <div className="w-[400px] sm:w-[600px] md:w-full">
                  <div className="text-3xl flex gap-5 pb-2 px-5 pl-7  items-center">
                    <RiAccountPinCircleLine />
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password "
                      required
                      className="w-[600px] sm:w-[400px] text-2xl focus:border-none px-3 hover:border-none active:border-none"
                    />
                    <div className="pl-16"></div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="w-[400px] sm:w-[600px] flex justify-center items-center pt-10">
                <input
                  type="submit"
                  value="Register"
                  className="text-3xl hover:cursor-pointer bg-amber-100 font-bold py-4 px-36 md:px-40 rounded-2xl shadow-2xl"
                />
              </div>
            </form>
          </div>
         <div className="flex flex-col justify-center items-center mt-5 md:pl-16">
            <div className=" flex justify-center items-center gap-10 ">
              <button onClick={handleGoogleSignup} className="bg-white rounded-xl text-3xl font-semibold  border border-amber-50 shadow-2xl p-4 px-36 md:px-44">
                Google
              </button>
            </div>
            <div className="flex pt-7 justify-center items-center text-xl gap-3">
              <p className="text-xl md:pt-10 text-center">If you have any accout ? <Link to={'/login'} className="text-blue-500 font-bold">Login </Link></p>
              
            
            <div className="h-5">
            {
                error ? <p className="text-red-500 pt-10">{error}</p>:""
              }
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
