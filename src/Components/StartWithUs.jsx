import React from "react";
import { Link } from "react-router-dom";

const StartWithUs = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="px-4 sm:px-20 md:px-32 w-full md:w-[740px]  space-y-10 h-[400px] bg-gradient-to-r from-[rgb(54,58,103)] to-[rgb(125,138,247)]">
        <div className="pt-16">
          <h1 className="text-5xl text-white font-bold">Start your learning </h1>
          <h1 className="text-4xl text-white font-bold pt-2">journey today with Us.</h1>
        </div>
        <div>

        <p className="text-white text-lg font-semibold ">
        Get set go. Lets start learning today,</p>
        <p className="text-white text-lg pt-1 font-semibold ">
        start your online journey with us.
        </p>
        </div>
        <button className="bg-orange-500 px-5 py-2 rounded-xl text-white font-semibold text-lg"> <Link to="/find-tutorials">Try a Free lesson today</Link> </button>
      </div>
      <div className="w-1/2 bg-[url(https://eqms.com.bd/public/departments/features/13-20220919073959-463031824-2133900660.png)] bg-no-repeat bg-cover">
        {/* <img src="../../src/assets/step-2.svg" alt="" /> */}
      </div>
    </div>
  );
};

export default StartWithUs;
