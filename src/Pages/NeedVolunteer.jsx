import { useEffect, useState } from "react";
import NeedVolunteerCard from "../Components/NeedVolunteerCard";
import SectionTitle from "../Components/Shared/SectionTitle";
import useVolunteerData from "../Hooks/useVolunteerData";
import { CiSearch } from "react-icons/ci";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const NeedVolunteer = () => {
    const [data] = useVolunteerData();
    const axiosPublic = useAxiosPublic();

    const [searchedData, setSearchedData] = useState(data);

    useEffect(() => {
        setSearchedData(data);
    }, [data]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const searchName = e.target.search.value;
        const res = await axiosPublic.get(`/need-volunteer?search=${searchName}`)
        setSearchedData(res.data)
    }

    return (
        <div className="max-w-7xl mx-auto mb-10">
            <Helmet>
                <title>Volunteer | Need Volunteer</title>
            </Helmet>
            <SectionTitle title={'Need Volunteer'}></SectionTitle>
            <form onSubmit={handleSearch} className="input my-6 w-72 sm:w-96 mx-auto input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" name='search' />
                <button><CiSearch /></button>
            </form>
            <div className="grid px-3 xl:px-0 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    searchedData.map((volunteer, idx) => <NeedVolunteerCard key={idx} volunteer={volunteer}></NeedVolunteerCard>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;