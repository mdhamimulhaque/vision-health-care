import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

import CheckoutForm from './CheckoutForm ';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;

    if (navigation.status === 'loading') {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-xl font-semibold mt-4'>Payment for {treatment}</h2>
            <p className='text-lg'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className="checkout_from my-8 w-96">
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;