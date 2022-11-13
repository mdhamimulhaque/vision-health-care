import React from 'react';

const HomeDoctors = () => {
    const doctorsData = [
        {
            id: 1,
            name: ' Alex Jhon Martin',
            title: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'
        },
        {
            id: 2,
            name: 'Joya Rose',
            title: ' Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=1380&t=st=1668369540~exp=1668370140~hmac=835277305c2fc8f94b92ce6a4f4ecf093d8f2d412755a37835e72253e510f529'
        },
        {
            id: 3,
            name: 'Alex butler',
            title: 'Cataract Consultant',
            img: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=1380&t=st=1668369532~exp=1668370132~hmac=537b4babdc3682050220f3f2023af429aed125f3927abd009c80634340e1acf1'
        },
        {
            id: 4,
            name: 'Mari Tailor',
            title: ' Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/portrait-smiling-young-woman-doctor-healthcare-medical-worker-pointing-fingers-left-showing-clini_1258-88108.jpg?w=1380&t=st=1668370039~exp=1668370639~hmac=4befb8f71f70b179f2724d643c0a0e51ba05ed7ffe1e3070014aa543380df1d5'
        },
        {
            id: 5,
            name: 'Joss Roy',
            title: 'Cataract Consultant',
            img: 'https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?w=1380&t=st=1668370026~exp=1668370626~hmac=fd07e475a3ee0e3b365689cd7f54480dfe4cde0a2246cf82aa11bbd6b06d5b1e'
        },
        {
            id: 6,
            name: 'Aya Ana',
            title: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/portrait-doctor_144627-39390.jpg?w=1380&t=st=1668370175~exp=1668370775~hmac=257757e9d244a3f6997cb7efe6c590c266136b694807c9b94ec2c46f42523620'
        },
    ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className='text-center'>
                <div className="title_box mt-4 lg:mt-0">
                    <span className='p-1 mb-2 bg-emerald-200 text-emerald-700'>Doctors</span>
                </div>
                <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl mb-2">Our Doctors</h1>
                <p className="mb-4 leading-relaxed max-w-4xl mx-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.readable content of a page when looking at its .readable content of a page when looking at its </p>
            </div>
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                {
                    doctorsData.map(doctorInfo => {
                        return <div key={doctorInfo.id} className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src={doctorInfo.img}
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">{doctorInfo.name}</p>
                                <p className="text-sm text-gray-800">{doctorInfo.title}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default HomeDoctors;