import {Link } from 'react-router-dom';
import { useAppContext } from '../contexts/userContexts';

export default function Dashboard() {
    const { sharedValue } = useAppContext();
    return(
        <>
            <p>Welcome to your dashboard, { sharedValue.name }!</p>
            <ul>
                <li><Link to='/medication'>Your Medication</Link></li>
                <li><Link to='/rewards'>Your Rewards</Link></li>
                <li><Link to='/patent-page'>Patent Information</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><button>Notifications</button></li>
                <li><Link to='/'>Logout</Link></li>
            </ul>
        </>
    );
}