import Banner from "../Components/HomeComponents/Banner";
import NeedVolunteerSection from "../Components/HomeComponents/NeedVolunteerSection";
import { Helmet } from "react-helmet-async";
import OurImpact from "../Components/HomeComponents/OurImpact";
import SuccessStories from "../Components/HomeComponents/SuccessStories";


const HomePage = () => {

    return (
        <div>
            <Helmet>
                <title>Volunteer | Home</title>
            </Helmet>
            <Banner></Banner>
            <NeedVolunteerSection></NeedVolunteerSection>
            <OurImpact></OurImpact>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default HomePage;