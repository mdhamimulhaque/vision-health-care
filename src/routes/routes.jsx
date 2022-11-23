import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Appointment from "../Pages/Appointment/Appointment";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ContactUs from "../Pages/ContactUs/ContactUs";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/contactUs',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <Error />,
        element:
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/allUsers',
                element:
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element:
                    <AdminRoute>
                        <AddDoctor />
                    </AdminRoute>
            },
            {
                path: '/dashboard/manage-doctors',
                element:
                    <AdminRoute>
                        <ManageDoctors />
                    </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element:
                    <AdminRoute>
                        <Payment />
                    </AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]

    }
])

export default routes;
