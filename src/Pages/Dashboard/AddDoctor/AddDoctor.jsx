import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../components/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch(`https://vision-health-server-mdhamimulhaque.vercel.app/appointmentSpecialty`)
            const data = await res.json();
            return data;
        }
    })

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddDoctor = (data) => {
        const photo = data.photo[0];
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        // ---> get imgbb img url
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctorInfo = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: imgData.data.url
                    }

                    // ---> store info to database
                    fetch(`https://vision-health-server-mdhamimulhaque.vercel.app/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${data.name} entry successfully`);
                                navigate('/dashboard/manage-doctors')
                            }
                        })
                }
            })
            .catch(err => console.log(err))
    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <form onSubmit={handleSubmit(handleAddDoctor)} className="my-10" >
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

                        <label htmlFor="specialty">

                            <label htmlFor="specialty" className="block mb-2 font-medium  text-slate-700 dark:text-gray-400">specialty</label>
                            <select id="specialty" {...register("specialty")} className="bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5 ">

                                {
                                    specialties && specialties.map(specialty =>
                                        <option key={specialty._id}>{specialty?.serviceTitle}</option>
                                    )
                                }

                            </select>
                        </label>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold ">
                                Upload File
                            </label>

                            <div className="mb-8">
                                <input type="file" {...register("photo")} id="file" className="sr-only" />
                                <label
                                    htmlFor="file"
                                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >

                                    <span
                                        className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium "
                                    >
                                        Upload File
                                    </span>
                                </label>
                            </div>

                        </div>
                        <button className="w-full py-3 font-medium text-white bg-emerald-400 hover:bg-emerald-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Add Doctor</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;

