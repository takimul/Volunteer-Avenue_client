import { Helmet } from "react-helmet";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Volunteer | Contact Us</title>
            </Helmet>
            <div className="hero bg-base-200 max-w-7xl mx-auto my-6 rounded-lg px-6 xl:px-0">
                <div className="py-10">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold text-center">Contact Us</h1>
                        <p className="py-6 text-center font-semibold">
                            We would love to hear from you! Whether you have questions, feedback, or want to learn more about how you can get involved, feel free to reach out to us through any of the following channels:
                        </p>
                    </div>

                    <div className="max-w-4xl">

                        <h3 className="text-2xl font-bold mt-6">General Inquiries</h3>
                        <p className="py-6">
                            For general questions or information, please email us at:
                            Email: info@volunteeravenue.org
                        </p>
                    </div>


                    <div className="max-w-4xl">

                        <h3 className="text-2xl font-bold mt-6">Volunteer Opportunities</h3>
                        <p className="py-6">
                            If you are interested in volunteering or have questions about current opportunities, contact our volunteer coordinator:
                            Email: volunteer@volunteeravenue.org
                        </p>
                    </div>

                    <div className="max-w-4xl">

                        <h3 className="text-2xl font-bold mt-6">Partnerships</h3>
                        <p className="py-6">
                            For partnership inquiries or if you represent an organization looking to collaborate with us, please get in touch with our partnerships team:
                            Email: partnerships@volunteeravenue.org
                        </p>
                    </div>
                    <div className="max-w-4xl">

                        <h3 className="text-2xl font-bold mt-6">Phone</h3>
                        <p className="py-6">
                            You can also reach us by phone during our office hours, Monday to Friday, 9 AM to 5 PM:
                            Phone: (123) 456-7890
                        </p>
                    </div>
                    <div className="max-w-4xl">

                        <h3 className="text-2xl font-bold mt-6">Visit Us</h3>
                        <p className="py-6">
                            We welcome visitors to our office by appointment. Please call or email us to schedule a visit:
                            Address:
                            Volunteer Avenue
                            123 Community Lane
                            Hometown, State, ZIP Code
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;