import { Helmet } from "react-helmet";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Volunteer | About Us</title>
            </Helmet>
            <div className="hero bg-base-200 max-w-7xl mx-auto my-6 rounded-lg px-6 xl:px-0">
                <div className="py-10">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold text-center">About Us</h1>
                        <h3 className="text-2xl font-bold mt-6">Our Mission</h3>
                        <p className="py-6">
                            At Volunteer Avenue, our mission is to connect passionate individuals with meaningful volunteer opportunities that create positive change in our communities. We strive to empower people to make a difference and support various causes that align with their values and interests.
                        </p>
                    </div>

                    <div className="max-w-4xl">
                        
                        <h3 className="text-2xl font-bold mt-6">Our History</h3>
                        <p className="py-6">
                            Volunteer Avenue was founded in [2024] by a group of dedicated volunteers who recognized the need for a centralized platform to streamline the process of finding and joining volunteer opportunities. Over the years, we have grown into a vibrant community of volunteers and organizations working together to address pressing social issues and contribute to the well-being of society.
                        </p>
                    </div>

                    <div className="max-w-4xl">
                        
                        <h3 className="text-2xl font-bold mt-6">Our Core Values</h3>
                        <ul className="py-6 list-disc ml-5">
                            <li><span className="font-semibold">Community</span>: We believe in the power of community and the importance of coming together to support one another.</li>
                            <li><span className="font-semibold">Empowerment</span>: We aim to empower individuals by providing them with the tools and opportunities to make a meaningful impact.</li>
                            <li><span className="font-semibold">Inclusivity</span>: We are committed to creating an inclusive environment where everyone feels welcome and valued.</li>
                            <li><span className="font-semibold">Integrity</span>: We operate with the highest standards of integrity, transparency, and accountability in all our actions.</li>
                            <li><span className="font-semibold">Sustainability</span>: We are dedicated to promoting sustainable practices that ensure long-term positive outcomes for our communities and the environment.</li>
                        </ul>
                    </div>

                    <div className="max-w-4xl">

                        <h3 className="text-2xl font-bold mt-6">Meet Our Team</h3>
                        <p className="py-6">
                            Our team is composed of passionate and experienced individuals who are dedicated to making a difference. From our leadership to our volunteers, everyone at Volunteer Avenue shares a commitment to our mission and values.
                        </p>
                    </div>

                    <div className="max-w-4xl">

                        <h3 className="text-2xl font-bold mt-6">Join Us</h3>
                        <p className="py-6">
                            We invite you to join Volunteer Avenue and become part of a community that is making a real difference. Whether you’re looking to volunteer your time, donate resources, or partner with us, there are many ways to get involved. Together, we can create a better future for all.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;