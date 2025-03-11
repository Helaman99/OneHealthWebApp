import { useAppContext } from '../contexts/userContexts';
import ProfileInfo from '../components/profileInfo';
import LoggedOut from '../components/loggedOut';

export default function Profile() {
    const {sharedValue} = useAppContext();
    
    if(sharedValue.name === ""){
        return(
            <div>
                <h1>Welcome to OneHealth</h1>
                <LoggedOut />
            </div>
        )} 
    return(
        <div >
            <Greetings />
            <div className='profile'>   
                <ProfileInfo />
            </div>   
        </div>
    )
}