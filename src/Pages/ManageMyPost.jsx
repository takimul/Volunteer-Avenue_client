import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";


const ManageMyPost = () => {
    return (
        <div className="max-w-7xl mx-auto bg-slate-50">
            <Helmet>
                <title>Volunteer | Manage My Post</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-12">
                    <div><Outlet></Outlet></div>
                    <label htmlFor="my-drawer-2" className="btn-sm md:btn btn-sm md:btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><NavLink to={'my-need-volunteer-post'}>My Need Volunteer</NavLink></li>
                        <li><NavLink to={'my-volunteer-request-post'}>My Request Volunteer</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageMyPost;