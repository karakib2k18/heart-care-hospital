import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleDoctor = () => {
    const { doctorId } = useParams();
    const [singleDoctor, setSingleDoctor] = useState({});
    useEffect(() => {
        fetch('/doctorslist.json')
            .then(res => res.json())
            .then(data => {
                setSingleDoctor(data)
                // eslint-disable-next-line eqeqeq
                const singleDoctorDetails = data.find(fd => fd.id == doctorId);
                setSingleDoctor(singleDoctorDetails);
            });

    }, [doctorId])
    const { id, name, specialist, addres, time, img, fees } = singleDoctor;
    return (
        <>
            <div className="container mx-auto bg-white border border-gray-100  hover:shadow-xl p-4 rounded-lg relative">
                <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{id}</span>
                <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={img} alt="" />
                <div className="flex flex-col items-center my-3 space-y-2">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-2xl font-semibold text-gray-900 poppins">Name: {name}</h1>
                        <p className="text-xl font-medium text-gray-900 poppins">Address: {addres}</p>
                        <p className="text-xl font-medium text-gray-900 poppins">Schedule: {time}</p>
                        <p className="text-xl font-medium text-gray-900 poppins custom-color">Specialist: {specialist}</p>
                        <p className="text-xl font-medium text-gray-900 poppins custom-color">Fees: ${fees}</p>

                        <Link to='/appointment'><button className="inline-block px-1 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8" type="submit">
                            Book an Appointment!
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleDoctor;