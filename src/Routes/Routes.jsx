import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root/Root";
import PageNotFound from "../Pages/PageNotFound";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/HomePage";
import AddVolunteer from "../Pages/AddVolunteer";
import PrivateRoutes from "./PrivateRoutes";
import NeedVolunteer from "../Pages/NeedVolunteer";
import VolunteerDetails from "../Pages/VolunteerDetails";
import BeVolunteer from "../Pages/BeVolunteer";
import ManageMyPost from "../Pages/ManageMyPost";
import MyNeedVol from "../Components/ManagePostCompo/MyNeedVol";
import UpdateVol from "../Components/ManagePostCompo/UpdateVol";
import MyVolReqPost from "../Components/ManagePostCompo/MyVolReqPost";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <PageNotFound></PageNotFound>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
            },
            {
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: 'contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'add-volunteer',
                element: <PrivateRoutes><AddVolunteer></AddVolunteer></PrivateRoutes>
            },
            {
                path: 'need-volunteer',
                element: <NeedVolunteer></NeedVolunteer>
            },
            {
                path: 'volunteer-details/:id',
                element: <PrivateRoutes><VolunteerDetails></VolunteerDetails></PrivateRoutes>
            },
            {
                path: 'be-a-volunteer/:id',
                element: <PrivateRoutes><BeVolunteer></BeVolunteer></PrivateRoutes>
            },
            {
                path: 'manage-my-post',
                element: <PrivateRoutes><ManageMyPost></ManageMyPost></PrivateRoutes>,
                children: [
                    {
                        path: 'my-need-volunteer-post',
                        element: <MyNeedVol></MyNeedVol>
                    },
                    {
                        path: 'my-volunteer-request-post',
                        element: <PrivateRoutes><MyVolReqPost></MyVolReqPost></PrivateRoutes>
                    },
                    {
                        path: 'my-need-volunteer-post/update-volunteer/:id',
                        element: <UpdateVol></UpdateVol>
                    }
                ]
            }
        ]

    }
]);