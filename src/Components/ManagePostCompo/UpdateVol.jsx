import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";


const UpdateVol = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext);
    const params = useParams();
    const axiosSecure = useAxiosSecure();
    const [volunteer, setVolunteer] = useState({});

    const id = params.id;

    useEffect(() => {
        axiosSecure.get(`/volunteer-details/${id}??email=${user.email}`)
            .then(res => {
                setVolunteer(res.data)
            })
    }, [axiosSecure, id, user])



    const handleUpdateVol = async (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const postTitle = form.postTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteerNumber = form.volunteerNumber.value;

        const updatedSpot = {
            name: user.displayName,
            email: user.email,
            date: startDate,
            thumbnail,
            postTitle,
            description,
            category,
            location,
            volunteerNumber
        }



        const res = await axiosSecure.patch(`/update-volunteer/${id}?email=${user.email}`, updatedSpot);
        if (res.data.modifiedCount > 0) {
            Swal.fire("Post Updated Successfully");
            form.reset();
        }

    }

    return (
        <div className='mt-4'>

            <form onSubmit={handleUpdateVol} action="" className=" bg-[#d1d5db66] sm:max-w-3xl sm:mx-auto rounded-lg p-6 space-y-3">
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Thumbnail</p>
                        <input type="text" defaultValue={volunteer.thumbnail} name="thumbnail"  className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Post Title</p>
                        <input type="text" name="postTitle"  defaultValue={volunteer.postTitle} className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Description</p>
                        <input type="text" name="description"  defaultValue={volunteer.description} className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Category</p>
                        <input type="text" name="category" defaultValue={volunteer.category} className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Location</p>
                        <input type="text" name="location"  defaultValue={volunteer.location} className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">No. of Volunteers Needed</p>
                        <input type="text" name="volunteerNumber"  defaultValue={volunteer.volunteerNumber} className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div>
                    <span className='mr-2'>Select Date :</span>
                    <DatePicker
                        className='rounded-md'
                        dateFormat={'dd/MM/yyyy'}
                        showIcon
                        defaultValue={volunteer.date}
                        selected={volunteer.date}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>



                <input type="submit" value="Update" id="" className="w-full  text-black bg-green-500 py-2 px-4 rounded-lg" />
            </form>

        </div>
    );
};

export default UpdateVol;