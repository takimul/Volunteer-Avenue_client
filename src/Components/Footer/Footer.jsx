import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <div className="bg-base-200 ">
            <footer className="text-base-content p-10 max-w-7xl mx-auto sm:flex justify-around grid grid-cols-2 gap-6">
                <aside className='flex items-center flex-col col-span-2'>
                    <img className='w-28' src={logo}alt="" />
                    <p className='text-3xl text-center font-bold'>
                        Volunteer Avenue
                    </p>
                </aside>
                
                <nav className='flex flex-col gap-1'>
                    <h6 className="footer-title">Company</h6>
                    <Link to={'/about-us'} className="link link-hover">About us</Link>
                    <Link to={'/contact-us'} className="link link-hover">Contact</Link>
                    
                </nav>
                <nav className='flex flex-col gap-1'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;