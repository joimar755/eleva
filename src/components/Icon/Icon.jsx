import React from "react";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const Icon = () => {
  return (
   
    <div className="absolute top-full right-4 md:right-[100px] shadow-white  transform -translate-y-1/2 bg-slate-600 p-5 rounded-3xl opacity-95 py-8  -mt-[120px] flex flex-col items-center gap-6">
        <h1 class="text-xl font-bold">
            <SlSocialFacebook className="bg-white text-black text-4xl sm:text-6xl rounded-full  p-1" />
        </h1>
        <h1 class="text-xl font-bold">
            <SlSocialInstagram className="bg-white text-black text-4xl sm:text-6xl rounded-2xl  p-1"/>
        </h1>
        <h1 className="text-xl font-bold">
            <SlSocialLinkedin className="bg-white text-black text-4xl sm:text-6xl rounded-2xl  p-2" />
        </h1>
      </div>
    
  );
};

export default Icon;
