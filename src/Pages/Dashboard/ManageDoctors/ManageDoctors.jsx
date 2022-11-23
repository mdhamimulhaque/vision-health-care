import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import Loading from '../../../components/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;

            } catch (err) {
                console.log(err)
            }
        }
    })

    // handle remove doctor
    const handleRemoveDoctor = (id) => {

        //   ---> alert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // ---> delete user data
                fetch(`http://localhost:5000/doctors/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                        }
                    })
                // --->sweet alert (delete success msg)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }


    // ---> loader
    if (isLoading) {
        return <Loading />
    }

    return (
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4 ">
            <div className="flex flex-col h-full pt-5">

                <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="text-xl font-semibold mt-4">Doctors : {doctors?.length}</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">ID</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Email</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Specialty</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {

                                        doctors.map((doctor, index) => <tr key={doctor._id}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{index + 1}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                        <img className="rounded-full w-10 h-10 object-cover"
                                                            src={doctor?.img}
                                                            alt="img" />
                                                    </div>
                                                    <div className="font-medium text-gray-800">{doctor?.name}</div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{doctor?.email}</div>
                                            </td>

                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{doctor?.specialty}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap text-center">
                                                <button onClick={() => handleRemoveDoctor(doctor?._id)}
                                                    className="rounded bg-red-400 hover:bg-red-500 text-white py-1 px-3 text-xs font-bold">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ManageDoctors;