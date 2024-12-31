import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const BeVolunteer = () => {

    const params = useParams();
    const id = params.id;
    const {user} = useContext(AuthContext);

    const [singleVolunteer, setVolunteer] = useState([]);

    const {
        name,
        email,
        date,
        thumbnail,
        postTitle,
        description,
        category,
        location,
        volunteerNumber,
    } = singleVolunteer;

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosPublic.get(`/volunteer-details/${id}`)
            .then(res => {
                setVolunteer(res.data)
            })
    }, [id, axiosPublic])

    const handleRequest = async (e) => {
        e.preventDefault();
        const suggestion = e.target.suggestion.value; 
        const data = {
            name,
            email,
            date,
            thumbnail,
            postTitle,
            description,
            category,
            location,
            volunteerNumber,
            suggestion,
            status: 'Requested',
            volunteerName : user.displayName,
            volunteerEmail : user.email
        }

        if( user) {
            const res = await axiosSecure.post(`/be-volunteer?email=${user.email}`, data);
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div className="my-8">
            <div className="flex justify-center my-2">
                <img className="w-80 rounded-xl shadow-xl" src={thumbnail} alt="" />
            </div>
            <form onSubmit={handleRequest} className="shadow-lg sm:max-w-3xl sm:mx-auto text-gray-400 rounded-lg p-6 space-y-3">
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Organizer Name</p>
                        <input type="text" name="organizerName" placeholder={name} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Organizer Email</p>
                        <input type="organizerEmail" name="volunteerNumber" placeholder={email} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Post Title</p>
                        <input type="text" name="postTitle" placeholder={postTitle} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Dead Line</p>
                        <input type="text" name="date" placeholder={date} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Description</p>
                        <input type="text" name="description" placeholder={description} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Category</p>
                        <input type="text" name="category" placeholder={category} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Location</p>
                        <input type="text" name="location" placeholder={location} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">No. of Volunteers Needed</p>
                        <input type="text" name="volunteerNumber" placeholder={volunteerNumber} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Your Name</p>
                        <input type="text" name="volunteerName" placeholder={user.displayName} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Your Email</p>
                        <input type="volunteerEmail" name="volunteerEmail" placeholder={user.email} disabled className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text text-base font-semibold">Suggestion</span>
                        
                    </div>
                    <textarea name="suggestion" className="textarea textarea-bordered h-24" placeholder="Your Suggestion"></textarea>
                    
                </label>

                <input type="submit" value="Request" id="" className="w-full  text-white bg-green-500 py-2 px-4 rounded-lg" />
            </form>
        </div>
    );
};

export default BeVolunteer;