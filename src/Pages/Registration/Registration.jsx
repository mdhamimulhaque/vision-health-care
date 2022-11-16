import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';




const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [regiError, setRegiError] = useState('');
    const navigate = useNavigate()


    // ---> handle registration
    const registrationSubmit = (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        // ---> create user || registration
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setRegiError('')

                const userInfo = {
                    displayName: name
                }
                // ---> update user
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => console.error(err))
                console.log("create user successfully")
            })
            .catch(err => {
                console.log(err);
                setRegiError(err.message)
            })
    }





    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-4xl font-medium">Registration</h1>


            <form onSubmit={handleSubmit(registrationSubmit)} className="my-10" >
                <div className="flex flex-col space-y-5">
                    <label htmlFor="name">
                        <p className="font-medium text-slate-700 pb-2">Full Name</p>
                        <input
                            {...register("name")}
                            type="text"
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-emerald-500 hover:shadow" placeholder="Enter Your Full Name" />
                    </label>
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input
                            {...register("email", { required: "Email Address is required" })}
                            type="email"
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-emerald-500 hover:shadow" placeholder="Enter email address" />
                        {errors.email && <p className='text-red-400' role="alert">{errors.email?.message}</p>}
                    </label>
                    <label htmlFor="password">
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                        <input
                            {...register("password",
                                {
                                    required: true,
                                    minLength: { value: 6, message: 'Password must be 6 character' },
                                    // pattern: {
                                    //     value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/,
                                    //     message: "Password must be Uppercase,Number & Special character"
                                    // }


                                })}
                            type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-emerald-500 hover:shadow" placeholder="Enter your password" />
                        {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                        {regiError && <p className='text-red-400'>{regiError}</p>}
                    </label>
                    <button className="w-full py-3 font-medium text-white bg-emerald-400 hover:bg-emerald-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Registration</span>
                    </button>
                    <p className="text-center">Already have an account? <Link to="/login" className="text-emerald-400 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg></span></Link></p>
                </div>
            </form>
        </div>
    );
};


export default Registration;