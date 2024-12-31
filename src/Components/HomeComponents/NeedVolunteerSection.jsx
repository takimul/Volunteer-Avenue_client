import { Link } from "react-router-dom";
import useVolunteerData from "../../Hooks/useVolunteerData";
import NeedVolunteerCard from "../NeedVolunteerCard";
import SectionTitle from "../Shared/SectionTitle";

const NeedVolunteerSection = () => {

    const [data] = useVolunteerData();
    const volunteerData = data.slice(0, 6);

    return (
        <div className="max-w-7xl mx-auto">
            <SectionTitle title={'Need Volunteer'}></SectionTitle>
            <div className="grid px-3 xl:px-0 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    volunteerData.map((volunteer,idx) => <NeedVolunteerCard key={idx} volunteer={volunteer}></NeedVolunteerCard>)
                }
            </div>
            <div className="text-center my-6">
                <Link to={'/need-volunteer'} className=" md:btn btn btn-sm">View All</Link>
            </div>
        </div>
    );
};

export default NeedVolunteerSection;