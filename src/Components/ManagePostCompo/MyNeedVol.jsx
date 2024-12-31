import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyNeedVol = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const [needVol, setNeedVol] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/my-need-vol?email=${user?.email}`)
            .then(res => {
                setNeedVol(res.data);
            })

    }, [axiosSecure, user.email])

    const handleDeleteVolPost =  (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/need-volunteer/${id}?email=${user.email}`)
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
            <SectionTitle title={'My Need Volunteer Post'}></SectionTitle>

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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            needVol.map((vol, idx) =>
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
                                    <th className="space-x-1">
                                        <Link to={`update-volunteer/${vol._id}`} className="btn btn-sm md:btn btn btn-sm md:btn-warning btn btn-sm md:btn-xs"><FaRegEdit /></Link>
                                        <button onClick={()=>handleDeleteVolPost(vol._id)} className="btn btn-sm md:btn btn btn-sm md:btn-error btn btn-sm md:btn-xs"><MdOutlineDeleteOutline /></button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyNeedVol;