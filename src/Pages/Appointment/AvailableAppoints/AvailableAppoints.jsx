import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const AvailableAppoints = () => {
    const appointmentData = [
        {
            id: 1,
            serviceTitle: 'Cataract Surgery',
            time: "8:00-9:00",
            space: 10,
            doctorName: "Alex Jhon Martin",
            doctorTitle: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'

        },
        {
            id: 2,
            serviceTitle: 'Cataract Surgery',
            time: "8:00-9:00",
            space: 10,
            doctorName: "Alex Jhon Martin",
            doctorTitle: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'

        },
        {
            id: 3,
            serviceTitle: 'Cataract Surgery',
            time: "8:00-9:00",
            space: 10,
            doctorName: "Alex Jhon Martin",
            doctorTitle: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'

        },
        {
            id: 4,
            serviceTitle: 'Cataract Surgery',
            time: "8:00-9:00",
            space: 10,
            doctorName: "Alex Jhon Martin",
            doctorTitle: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'

        },
        {
            id: 4,
            serviceTitle: 'Cataract Surgery',
            time: "8:00-9:00",
            space: 10,
            doctorName: "Alex Jhon Martin",
            doctorTitle: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'

        },
        {
            id: 5,
            serviceTitle: 'Cataract Surgery',
            time: "8:00-9:00",
            space: 10,
            doctorName: "Alex Jhon Martin",
            doctorTitle: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'

        },
        {
            id: 6,
            serviceTitle: 'Cataract Surgery',
            time: "8:00-9:00",
            space: 10,
            doctorName: "Alex Jhon Martin",
            doctorTitle: 'Cataract & Lasik Consultant',
            img: 'https://img.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg?w=1380&t=st=1668369543~exp=1668370143~hmac=a8ba62640770e592e4739d42aab7850873e63ebec2dc84a2893cb3ac9b4e80d2'

        }
    ]
    return (
        <section class="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
            <div class="container mx-auto">
                <div className='text-center'>
                    <div className="title_box mt-4 lg:mt-0">
                        <span className='p-1 mb-2 bg-emerald-200 text-emerald-700'>Appointments</span>
                    </div>
                    <h1 className="text-3xl text-center font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl mb-2">
                        Available Appointments on<span className='underline decoration-emerald-400'> April 30, 2022</span>
                    </h1>
                </div>
                <div class="flex flex-wrap my-10">
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                </div>
            </div>
        </section>
    );
};

export default AvailableAppoints;