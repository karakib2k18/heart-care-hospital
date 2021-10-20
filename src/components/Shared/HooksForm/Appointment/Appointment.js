import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import swal from 'sweetalert';



const SignUp = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    console.log(data)
                    swal("You have submitted the appointment!", "Good job!",  {
                        icon: "success",
                    });
                }
            });
    };

    return (
        <div>
            <h1 className="text-4xl text-black-900 mt-10 mb-10 font-bold text-center ">Book an Appointment Now</h1>
            <form className="w-full max-w-lg mx-auto  mb-3 " onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                            Full Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" defaultValue={user.displayName} type="text" {...register("name", { required: true })} placeholder="Full Name" />
                        {errors.name && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                            Email Address
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="email" defaultValue={user.email} {...register("email", { required: true })} placeholder="Email Address" />
                        {errors.email && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-gender">
                            Gender
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-gender" type="text" {...register("gender", { required: true })} placeholder="Gender" />
                        {errors.gender && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-age">
                            Age
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-age" type="age" {...register("number", { required: true })} placeholder="Age" />
                        {errors.age && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-date">
                            Date
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-age" type="date" {...register("date", { required: true })} placeholder="Date" />
                        {errors.date && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-time">
                            Time
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-time" type="text" {...register("time", { required: true })} placeholder="Time" />
                        {errors.time && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-problem">
                            Problem Details
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-time" type="text" {...register("problem", { required: true })} placeholder="Problem Details" />
                        {errors.problem && <span className="text-red-500 text-sm italic">This field is required </span>}
                    </div>
                </div>

                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="px-5 py-3 mb-8 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8" type="submit">
                            Submit Appointment
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default SignUp;