import React from 'react';

const NewsLater = () => {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-16">
            <div className="w-full relative flex items-center justify-center">
                <img src="https://img.freepik.com/free-photo/child-eye-test-eye-exam-little-girl-having-eye-check-up-with-phoropter-doctor-performs-eye-test-child_1157-41951.jpg?w=1380&t=st=1668370956~exp=1668371556~hmac=3908cefe00b2450f27f9184e92ca8991ec781036db875d598bf8f2d1405a725b" alt="dining" className="w-full h-full absolute z-0 object-cover " />
                <div className="bg-emerald-400 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">Get In Touch With Us</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                        Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />
                        a week on every friday so subscribe to get latest news and updates.
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLater;