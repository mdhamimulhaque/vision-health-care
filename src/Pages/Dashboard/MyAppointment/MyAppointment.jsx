import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `https://vision-health-server-mdhamimulhaque.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    console.log(bookings)

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-xl font-semibold mt-4'>My appointment</h2>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length > 1 &&
                            bookings?.map((booking, index) =>
                                <tr key={booking._id} className="hover">
                                    <th>{index + 1}</th>
                                    <td>{booking?.patient}</td>
                                    <td>{booking?.treatment}</td>
                                    <td>{booking?.appointmentDate}</td>
                                    <td>{booking?.slot}</td>
                                    <td>
                                        {
                                            booking?.price && !booking?.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button
                                                    className="rounded bg-emerald-400 hover:bg-emerald-500 text-white py-2 px-5 text-xs font-bold">
                                                    Paid
                                                </button>
                                            </Link>
                                        }

                                        {
                                            booking?.price && booking?.paid &&
                                            <p className='text-emerald-400 '>Paid</p>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;