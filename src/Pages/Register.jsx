import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";


const Register = () => {

    const { createUserWithEmail, updateUserProfile } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const passwordValidation = regex.test(password);

        if (passwordValidation == true) {
            createUserWithEmail(email, password)
                .then(() => {
                    updateUserProfile(name, photo)
                    form.reset();

                    const userInfo = {
                        name: name,
                        email: email,
                        photo: photo,

                    }

                    fetch('https://travel-asia-server.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(userInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.insertedId) {
                                toast('Successfully Registered')
                            }
                        })

                })
                .catch(() => {
                    toast.warn('Email already registered')
                })
        }
        else {
            toast.warn('Password must be an uppercase and a lowercase letter and at least 6 characters')
        }




    }

    return (
        <div>
            <Helmet>
                <title>Volunteer | Sign Up</title>
            </Helmet>
            
                <h1 className="text-center font-bold text-3xl my-6">Create Account</h1>
                <form onSubmit={handleRegister} action="" className=" bg-[#d1d5db66] sm:max-w-3xl sm:mx-auto rounded-lg p-6 space-y-2">
                    <div className="w-full">
                        <p className="font-semibold">Your Name</p>
                        <input type="text" name="name" placeholder="Your Name" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Your Image URL</p>
                        <input type="text" name="image" placeholder="Your Image URL" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Email</p>
                        <input type="email" name="email" placeholder="Your Email" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold">Password</p>
                        <input type="password" name="password" placeholder="Password" className="w-full border text-black outline-none py-2 px-4 rounded-lg" />
                    </div>

                    <button className="w-full  bg-green-500 py-2 px-4 rounded-lg font-semibold text-white">
                        Register
                    </button>

                    <button className="w-full  bg-green-500 py-2 px-4 rounded-lg font-semibold text-white">Login With Google</button>
                    <p>Already have an account? <span className="text-green-400"><Link to={'/login'}>Login</Link></span></p>
                </form>
            
            <ToastContainer />
        </div>
    );
};

export default Register;