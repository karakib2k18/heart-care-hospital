import React from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
// eslint-disable-next-line no-unused-vars
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const navigation = [

    { name: 'Home', to: '/home', current: false },
    { name: 'Services', to: '/services', current: false },
    { name: 'Doctors', to: '/doctors', current: false },
    { name: 'Blogs', to: '/blogs', current: false },
    { name: 'Appointment', to: '/appointment', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Navbar = () => {
    const { user, handleSignOut } = useAuth();
    return (
        // <Disclosure as="nav" className="bg-purple-600 bg-opacity-75 ">
        <Disclosure as="nav" className="py-2 font-semibold text-white bg-gradient-to-br from-indigo-600 to-indigo-700  lg:px-8 ">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink flex items-center md:text-start">
                                    {/* <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Heart Care"
                                    /> */}
                                    <img
                                        className="hidden lg:block h-8 w-auto mt-1.5"
                                        // src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                        alt="Heart Care"
                                    />
                                </div>
                                {/* <NavLink
                                    to="/home"
                                    className={classNames('block px-4 py-2 rounded-md text-lg font-medium text-white ')}
                                >
                                HeartCare
                                </NavLink> */}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.to}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                                    'px-3 pt-2 py-3 rounded-md text-lg font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <button
                                    type="button"
                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}
                                {
                                    (user?.displayName || user.email) ? <button
                                        onClick={handleSignOut}
                                        className={classNames('block px-4 py-2 rounded-md text-lg font-medium text-white  hover:bg-purple-900 hover:text-white')}
                                    >
                                        LogOut
                                    </button> : <NavLink
                                        to="/signup"
                                        className={classNames('block px-4 py-2 rounded-md text-lg font-medium text-white  hover:bg-purple-900 hover:text-white')}
                                    >
                                        SignUp
                                    </NavLink>
                                }
                                {
                                    (user?.displayName || user.email) ? <p
                                        className={classNames('block px-4 py-2 rounded-md text-lg font-medium text-white  hover:bg-purple-900 hover:text-white')}
                                    >
                                        {user.displayName || user.email}
                                    </p> : <NavLink
                                        to="/login"
                                        className={classNames('block px-4 py-2 rounded-md text-lg font-medium text-white  hover:bg-purple-900 hover:text-white')}
                                    >
                                        LogIn
                                    </NavLink>
                                }

                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            {
                                                (user.photoURL) && <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user.photoURL} alt=""
                                                />
                                            }

                                        </Menu.Button>
                                    </div>
                                    {/* <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink
                                                        to="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-gray-900')}
                                                    >
                                                        Your Profile
                                                    </NavLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink
                                                        to="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-gray-900')}
                                                    >
                                                        Settings
                                                    </NavLink>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <NavLink onClick={handleSignOut}
                                                        to="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-lg text-gray-900')}
                                                    >
                                                        Sign out
                                                    </NavLink>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition> */}
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.to}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;