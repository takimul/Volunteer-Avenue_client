import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NeedVolunteerCard = ({ volunteer }) => {
    // eslint-disable-next-line react/prop-types
    const { thumbnail, postTitle, category, date, _id } = volunteer;
    
    return (
        <div>
            <div className="card h-[450px] bg-base-100 shadow-xl">
                <figure><img src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{postTitle}</h2>
                    <p>Category : {category}</p>
                    <p className="">Deadline : {date}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/volunteer-details/${_id}`} className="btn-sm md:btn btn-sm md:btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteerCard;