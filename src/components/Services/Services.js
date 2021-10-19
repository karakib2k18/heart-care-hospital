import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [serviceslist, setServiceslist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('./services.json')
            .then(response => response.json())
            .then(json => {
                setServiceslist(json);
                setIsLoading(false);
            })
    }, []);
    return (
        <div>
            <h1 className="mt-3 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">All Services</h1>
            <div className="max-w-screen-xl mx-auto ">
                {isLoading && (
                    <div>  <div className=" flex justify-center items-center"> <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                    </div></div>
                )}
                <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ">
                    {serviceslist.map(service => (
                        <ServicesCard service={service} key={service.id}></ServicesCard>
                    ))}

                </div>

            </div>
        </div>
    );
};
export default Services;