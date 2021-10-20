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
    const {name, specialist, addres, time, img, fees } = singleDoctor;
    return (
        <>
            <div class="mx-auto py-8 px-6 my-20 bg-white rounded-xl shadow-xl overflow-hidden w-4/6 ">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:h-80 md:w-80 transform transition duration-300 hover:scale-105 hover:overflow-hidden" src={img} alt="img is loading" />
                    </div>
                    <div class="p-8 space-y-3.5">
                        <div class=" tracking-wide  text-gray-900 font-semibold text-2xl">Name: {name}</div>
                        <div class=" tracking-wide  text-gray-900 font-semibold text-xl">Address: {addres}</div>
                        <div class=" tracking-wide  text-gray-900 font-semibold text-xl">Schedule: {time}</div>
                        <div class=" tracking-wide  text-gray-900 font-semibold text-xl">Specialist: {specialist}</div>
                        <div class=" tracking-wide  text-gray-900 font-semibold text-xl">Fees: ${fees}</div>
                        <Link to='/appointment'><button className="inline-block px-1 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  lg:px-8 mt-6" type="submit">
                            Book an Appointment!
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleDoctor;