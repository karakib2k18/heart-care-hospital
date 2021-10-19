import React from 'react';
import { Link } from 'react-router-dom';
const ServicesCard = ({ service }) => {
    const { id, img, title, description } = service;
    const url = `/services/${id}`
    return (
        <div className="bg-white  px-10 pt-5 pb-8 border-4 border-light-blue-500 border-opacity-50 rounded-2xl hover:shadow-xl ">
            <div className="overflow-hidden rounded-2xl flex flex-grow ">
                <img className="transform transition duration-700 hover:scale-125 bg-no-repeat bg-center w-24 h-24 mt-5" src={img} alt="wait wait Img is loading" style={{ height: '18rem', width: '19rem' }} />
            </div>
            {/* other info  */}
            <div className="flex mt-6 space-x-3 ">

                <div className="flex flex-col space-y-3">
                    <h1 className="text-2xl font-semibold text-gray-900 poppins">{title}</h1>
                    <p className="text-xl font-medium text-gray-900 poppins">{description.slice(0,100)}</p>
                </div>
 
            </div>
            <Link to={url}><button className="inline-block mt-8 px-1 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8" type="submit">
                Detials+
            </button></Link>
        </div>
    );
};

export default ServicesCard;