import {Link } from 'react-router-dom';
import { useAppContext } from '../contexts/userContexts';

export default function Profile() {
    const { sharedValue } = useAppContext();
    return(
        <>
            <p>{ sharedValue }'s Profile!</p>
            <ul>
                <li><Link to='/dashboard'>Back</Link></li>
            </ul>
        </>
    );
}