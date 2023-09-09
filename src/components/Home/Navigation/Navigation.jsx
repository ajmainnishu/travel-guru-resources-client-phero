import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo/logo.png'

const Navigation = () => {
    return (
        <div className='w-5/6 mx-auto py-9'>
            <div className='navbar'>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">
                        <img style={{ height: '56px' }} src={logo} alt="logo" />
                    </a>
                </div>
                <div className='gap-12'>
                    <div className="form-control">
                        <input type="text" placeholder="Search your Destination" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <Link className='inline-block'>Home</Link>
                    <Link>Destination</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                    <Link className='btn'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;