import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png'

const Navigation = () => {
    return (
        <div className='w-5/6 mx-auto py-9'>
            <div className='navbar'>
                <div className="flex-1">
                    <img style={{ height: '56px', filter: 'brightness(1000%)'}} src={logo} alt="logo" />
                </div>
                <div className='gap-12 text-white font-medium'>
                    <div className="form-control">
                        <input type="text" placeholder="Search your Destination" className="input bg-transparent border-white w-24 md:w-auto" />
                    </div>
                    <Link to='/'>Home</Link>
                    <Link to='/destination'>Destination</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/booking/login' style={{backgroundColor: '#F9A51A'}} className='btn text-base px-7 py-3 border-0 rounded-md font-medium'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;