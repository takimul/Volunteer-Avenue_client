import { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import SectionTitle from '../Components/Shared/SectionTitle';
import { Helmet } from 'react-helmet';




const AddVolunteer = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());

    const handleAddVolunteer = async (e) => {
        e.preventDefault();
        const form = e.target;
        const thumbnail = form.thumbnail.value;
        const postTitle = form.postTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteerNumber = form.volunteerNumber.value;

        const addedSpot = {
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

        const res = await axiosSecure.post(`/add-volunteer?email=${user.email}`, addedSpot);
        if(res.data.insertedId){
            Swal.fire("Post Added Successfully");
            form.reset();
        }
    }


    return (

        <div className='mt-4'>
            <Helmet>
                <title>Volunteer | Add Volunteer Post</title>
            </Helmet>

            <div>
                <SectionTitle title={'Add Volunteer Post'}></SectionTitle>
            </div>

            <form onSubmit={handleAddVolunteer} action="" className="my-16 bg-[#d1d5db66] sm:max-w-3xl sm:mx-auto rounded-lg p-6 space-y-3">
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Thumbnail</p>
                        <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Post Title</p>
                        <input type="text" name="postTitle" placeholder="Post Title" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Description</p>
                        <input type="text" name="description" placeholder="Description" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Category</p>
                        <input type="text" name="category" placeholder="Category" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-full">
                        <p className="font-semibold">Location</p>
                        <input type="text" name="location" placeholder="Location" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">No. of Volunteers Needed</p>
                        <input type="text" name="volunteerNumber" placeholder="No. of Volunteers Needed" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                </div>
                <div>
                    <span className='mr-2'>Select Date :</span>
                    <DatePicker
                        className='rounded-md'
                        dateFormat={'dd/MM/yyyy'}
                        showIcon
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>



                <input type="submit" value="Post" id="" className="w-full  text-black bg-green-500 py-2 px-4 rounded-lg" />
            </form>

        </div>

    );
};

export default AddVolunteer;