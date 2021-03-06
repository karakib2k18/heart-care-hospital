import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const { blogsId } = useParams();
    const [singleBlogs, setSingleBlogs] = useState({});
    useEffect(() => {
        fetch('/healthblog.json')
            .then(res => res.json())
            .then(data => {
                setSingleBlogs(data)
                // eslint-disable-next-line eqeqeq
                const singleDoctorDetails = data.find(fd => fd.id == blogsId);
                setSingleBlogs(singleDoctorDetails);
            });

    }, [blogsId])
    const {  img, title, description } = singleBlogs;
    return (
        <>
            <div class="mx-auto lg:p-5 my-20 bg-white rounded-xl shadow-xl overflow-hidden w-4/6 ">
                <div class="md:flex">
                    <div class="md:flex-shrink-0">
                        <img class="transform transition duration-700 hover:scale-110  h-64 w-full object-cover md:h-80 md:w-80" src={img} alt="img is loading" />
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide  text-gray-900 font-semibold lg:text-2xl">Title: {title}</div>
                        <p class="mt-2 text-xl text-gray-800">Description: {description}</p>
                        <Link to='/services'><button className="inline-block px-2 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  lg:px-8 mt-3" type="submit">
                            See Our All services
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;