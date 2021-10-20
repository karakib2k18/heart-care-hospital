import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServicesDetails = () => {
    const { serviceId } = useParams();
    const [singleServices, setSingleServices] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setSingleServices(data)
                // eslint-disable-next-line eqeqeq
                const singleDoctorDetails = data.find(service => service.id == serviceId);
                setSingleServices(singleDoctorDetails);
            });

    }, [serviceId])
    const { id, img, title, description } = singleServices;
    return (
        <>

            <div class="mx-auto p-5 my-20 bg-white rounded-xl shadow-xl overflow-hidden w-4/6 ">
                <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{id}</span>
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover md:h-80 md:w-80" src={img} alt="img is loading"/>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide  text-indigo-600 font-semibold text-3xl">Title: {title}</div>
                        <p class="mt-2 text-xl text-gray-800">Description: {description}</p>
                        <Link to='/appointment'><button className="inline-block px-1 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  lg:px-8 mt-3" type="submit">
                            Book an Appointment!
                        </button></Link>
                    </div>
                </div>
            </div>
            

        </>
    );
};

export default ServicesDetails;