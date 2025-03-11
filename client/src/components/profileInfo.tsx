import { useAppContext } from '../contexts/userContexts';

export default function ProfileInfo() {
    const {sharedValue} = useAppContext();

    return(
        <div>
            <h1>Your Profile</h1>
            <table>
                <tr><td>Name:</td><td>{ sharedValue.name }</td></tr>
                <tr><td>Location:</td><td>{ sharedValue.location }</td></tr>
                <tr><td>Points:</td><td>{ sharedValue.points }</td></tr>
            </table>
        </div>
    )
}