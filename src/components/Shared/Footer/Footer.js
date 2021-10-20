import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="px-6=8 mt-8 py-6 text-gray-600 bg-gray-50 lg:text-left text-center lg:px-8 md:py-12">
                <div className="max-w-screen-xl py-4 mx-auto mb-6 space-y-6 border-b-2 border-gray-200 lg:mb-4 md:py-4 lg:pb-6 md:flex md:justify-between md:items-center md:flex-row md:space-x-12 ">
                    <div className="flex-1 max-w-3xl ">
                        <h4 className="text-2xl font-medium text-gray-900 sm:text-3xl md:text-4xl">You Think You Know What Happiness  Is?</h4>
                        <p className="mt-4 text-lg font-medium leading-relaxed text-gray-500 md:text-xl">Promise your reader something valuable. Will we help you to know how to lead a healthy life? Will you persuade her to do something she’s never done before? Let's come to our HealthCare for your beautiful life</p>
                    </div>
                    <Link to="/" className="inline-block px-5 py-4 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8">Start 1-day free trail</Link>
                </div>
                <div className="grid max-w-screen-xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-5 lg:gap-x-8">
                    <div>
                        <h5 className="text-xl font-semibold text-gray-900">About us</h5>
                        <nav className="mt-4">
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-lg  float-left font-normal hover:text-purple-900">It's a heartcare hospital. We provide best service last fiv years. We have a lof of best and responsibe doctors. They always work hard to make you feel better. So stand with us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold text-gray-900">Departments</h5>
                        <nav className="mt-4">
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Dental Services</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Ophthalmology</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Orthopedic Surgery</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Neurosurgery</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Radiation Oncology</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold text-gray-900">Opening Hours</h5>
                        <nav className="mt-4">
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900"> Mon-Tues: 6:00-10:00</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900"> Wed-Thurs: 6:00-10:00</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Sat-Sun: 6:00-10:00</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Friday: Closed</Link>
                                </li>
                                <li>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold text-gray-900">Terms and conditions</h5>
                        <nav className="mt-4">
                            <ul className="space-y-2">

                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Privacy and Cookie</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Security & Statement</Link>
                                </li>
                                <li>
                                    <Link to="/" className="text-lg font-normal hover:text-purple-900">Processor Agreement</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold text-gray-900"> Emergency Contact</h5>
                        <div className="mt-4 space-y-4 md:space-y-6">
                            <div className="lg:flex lg:items-start space-x-4">
                                <div className='flex justify-center mb-'>
                                    <svg className="w-6 h-6 mt-1  text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div className="flex-1">
                                    <address className="not-italic">
                                        Panthpoth 159,
                                        Dhaka, 1200
                                        Bangledesh
                                    </address>
                                </div>
                            </div>
                            <div className="lg:flex lg:items-start space-x-4">
                                <div className='flex justify-center mb-'>
                                    <svg className="w-6 h-6 mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div className="flex-1">
                                    <Link to="/" className="hover:text-gray-500">heartcare@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between max-w-screen-xl mx-auto mt-5 space-y-4 md:flex-row">
                    {/* <img className="h-8" src="/images/pathway-logo.svg" alt="UptimeMate logo" /> */}
                    <h4 className='mt-2'>RAKIB Heart Care</h4>
                    <div className="text-sm">
                        ©2021 KAZI ABDUR RAKIB .All rights reserved.
                    </div>
                </div>
            </footer>


        </>
    );
};

export default Footer;