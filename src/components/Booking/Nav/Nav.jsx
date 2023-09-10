import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png'

const Nav = () => {
    return (
        <div className='w-5/6 mx-auto py-9'>
            <div className='navbar'>
                <div className="flex-1">
                    <img style={{ height: '56px' }} src={logo} alt="logo" />
                </div>
                <div className='gap-12 font-medium'>
                    <Link to='/'>Home</Link>
                    <Link to='/destination'>Destination</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link style={{ backgroundColor: '#F9A51A' }} className='btn text-base px-7 py-3 border-0 rounded-md font-medium'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;