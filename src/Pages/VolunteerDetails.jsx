import { Link, useParams } from "react-router-dom";
import SectionTitle from "../Components/Shared/SectionTitle";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const VolunteerDetails = () => {

    const params = useParams();
    const id = params.id;

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

    useEffect(() => {
        axiosPublic.get(`/volunteer-details/${id}`)
            .then(res => {
                setVolunteer(res.data)
            })
    }, [id, axiosPublic])

    return (
        <div className=" max-w-7xl mx-auto mb-20">
            <SectionTitle title={'Details'}></SectionTitle>

            <div className="rounded-xl bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="md:w-1/2 w-full mr-2">
                        <img
                            src={thumbnail}
                            className="w-full rounded-lg shadow-2xl" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="md:text-5xl text-2xl font-bold">{postTitle}</h1>
                        <div className="space-y-2 my-4 font-semibold">
                            <p>Post By : {name}</p>
                            <p>Email : {email}</p>
                            <p>Deadline : {date}</p>
                        </div>
                        <p className="py-6 font-bold">
                            {description}
                        </p>
                        <div className="font-semibold space-y-3 mb-6">
                            <p className="">
                                Categoty : {category}
                            </p>
                            <p className="">
                                Location : {location}
                            </p>
                            <p className="">
                                Need Volunteer : {volunteerNumber}
                            </p>
                        </div>
                        
                        <Link to={`/be-a-volunteer/${id}`}>
                            <button className="btn btn-sm md:btn btn btn-sm md:btn-primary">Be A Volunteer</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetails;