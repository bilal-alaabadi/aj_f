import React from 'react';
import { Link } from 'react-router-dom';
import timings from "../../assets/بنر-متجر-01.png";

const Banner = () => {

    return (
        <div className="py-3 px-4">
            <div className="text-right" dir='rtl'>
                {/* يمكن إضافة محتوى هنا إذا لزم الأمر */}
            </div>
            
            <div className="mt-8">
                <Link to="/shop">
                
<img 
  src={timings}
  alt="صورة البانر"
  className="w-full h-[150px] object-cover max-w-[100%] mx-auto"
/>

                </Link>
            </div>
        </div>
    );
};

export default Banner;