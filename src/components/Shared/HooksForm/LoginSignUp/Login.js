import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const Login = () => {
    const { handleSignInWithGoogle, handleSignInWithEmailPassword } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location?.state?.from || "/home";
    // console.log(redirect_url)
    const onSubmit = data => {
        handleSignInWithEmailPassword(data.email, data.password)
            .then((result) => {
                history.push(redirect_url)
                // console.log('login succesfull')
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const loginFinalWithGmail = () => {
        handleSignInWithGoogle()
            .then((result) => {
                console.log(result.user)
                history.push(redirect_url)
                // console.log('login succesfull')
                
            })
            .catch((error) => {
                console.log(error.message);
            })
    };

    return (
        <div>
            <h1 className="text-4xl text-black-900 mt-16 mb-10 font-bold text-center ">Login Now</h1>
            <form className="w-full  max-w-lg mx-auto  mb-3 lg:px-0 px-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                            Email Address
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" {...register("email", { required: true })} placeholder="Email Address" />
                        {errors.email && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-password">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-password" type="password" {...register("password", { required: true })} placeholder="Full Name" />
                        {errors.password && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <Link to="/signup" className="md:w-2/3 block lg:text-left  text-center text-gray-900 font-bold">
                        {/* <input className="mr-2 leading-tight" type="checkbox" /> */}
                        <span className="text-sm ">
                            Create a New Account?
                        </span>
                    </Link>
                </div>
                <div className="md:flex text-center  lg:text-left md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="inline-block px-5 py-3 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <button onClick={loginFinalWithGmail} className="googlebuttonmiddle lg:mb-44 flex bg-opacity-25  mx-auto py-3 px-3 font-semibold mb-10 text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-5">
                Login With Google
            </button>

        </div>
    );
};

export default Login;