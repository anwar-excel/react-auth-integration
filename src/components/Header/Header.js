
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user } = useFirebase();
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/about-us">About Us</Link>
            {user?.email && < button > Sign out</button>}
        </div >
    );
};

export default Header;