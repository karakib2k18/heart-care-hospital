import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <section className="header-banner h-96 w-full bg-yellow-50">

                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-bold text-bindigo-900">Search Doctor & Make An Appointment</h1>
                    <h1 className="text-center text-xl md:text-2xl lg:text-3xl mt-5 poppins font-bold text-bindigo-900">Discover The Best Doctors, Clinic, And Hospital The City Nearest You</h1>

                    <div className="rounded-full box-border mt-8 bg-white overflow-hidden focus:outline-none flex items-center">
                        <input type="text" className=" rounded-full px-4 focus:outline-none bg-transparent" placeholder="Search doctor here ......." />
                        <button className="text-sm bg-primary py-3 px-6  text-white rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-5">Search</button>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;