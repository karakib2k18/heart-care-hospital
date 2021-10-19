import React from 'react';
import { Link } from 'react-router-dom';
import "./HeartCareCard.css";
const HeartCareCard = ({ doctor }) => {
    const { id, name, specialist, addres, time, img, fees } = doctor;
    const url = `/doctors/${id}`
    return (
        <div className="bg-white transform transition duration-700 hover:scale-105 px-10 pt-5 pb-8 border-4 border-light-blue-500 border-opacity-50 rounded-2xl hover:shadow-xl ">
            <p className="text-xl font-medium text-gray-900 poppins custom-color">{specialist}</p>
            {/* image  */}
            <div className="overflow-hidden rounded-2xl flex flex-grow ">
                <img className="transform transition duration-700 hover:scale-125 bg-no-repeat bg-center w-24 h-24 mt-5" src={img} alt={name} style={{ height: '18rem', width: '19rem' }} />
            </div>
            {/* other info  */}
            <div className="flex mt-6 space-x-3 ">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-2xl font-semibold text-gray-900 poppins">Name: {name}</h1>
                    <p className="text-xl font-medium text-gray-900 poppins">Address: {addres}</p>
                    <p className="text-xl font-medium text-gray-900 poppins">Schedule: {time}</p>
                    <p className="text-xl font-medium text-gray-900 poppins">Fees: ${fees}/H</p>

                    <Link to={url}><button className="inline-block px-1 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8" type="submit">
                        See More+
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default HeartCareCard;