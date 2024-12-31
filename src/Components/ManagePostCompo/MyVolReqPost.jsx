import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SectionTitle from "../Shared/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const MyVolReqPost = () => {

    const { user } = useContext(AuthContext);
    const [myReq, setMyReq] = useState([]);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get(`/my-volunteer-request?email=${user.email}`)
            .then(res => {
                setMyReq(res.data);

            })
    }, [axiosSecure, user.email])

    const handleCancelReq = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/my-volunteer-request/${id}?email=${user.email}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });



    }

    return (
        <div>
            <Helmet>
                <title>Volunteer | My Request</title>
            </Helmet>
            <div>
                <SectionTitle title={'My Volunteer Request Post'}></SectionTitle>
            </div>

            {
                myReq.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    myReq.map((vol, idx) =>
                                        <tr key={idx}>
                                            <th>
                                                {idx + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={vol.thumbnail}
                                                                alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{vol.postTitle}</div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {vol.category}
                                            </td>
                                            <td>
                                                {vol.location}
                                            </td>
                                            <th className="space-x-1 flex items-center">
                                                <button className="btn-sm md:btn btn-sm md:btn-sm">{vol.status}</button>
                                                <button onClick={() => handleCancelReq(vol._id)} className="btn-sm md:btn btn-sm md:btn-circle btn-sm md:btn-sm bg-red-600 text-white">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </th>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="hero bg-base-200 py-32 rounded-xl">
                        <div className="hero-content text-center">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Hi! <br />{user.displayName}</h1>
                                <p className="py-6 text-xl">
                                    You have no request to be a volunteer. To be a volunteer please visit volunteer need page. <br /> Thank you....
                                </p>
                                <Link to={'/need-volunteer'} className="btn-sm md:btn btn-sm md:btn-primary">Need Volunteer</Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyVolReqPost;