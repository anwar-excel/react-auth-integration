
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/about-us">About Us</Link>
            <span>{user.displayName}</span>
            {user?.email && < button onClick={logOut} > Sign out</button>}
        </div >
    );
};

export default Header;