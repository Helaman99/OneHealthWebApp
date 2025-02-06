import {Link } from 'react-router-dom';
import { useAppContext } from '../contexts/userContexts';
import axios from 'axios';
import { useState , useEffect} from 'react';

interface RewardsHistory {
    name: string;
    points: number;
    redeem_date: string;
}

export default function Profile() {
    const { sharedValue } = useAppContext();
    const [rewardsWon, setRewardsWon] = useState<RewardsHistory[]>([]);
    const [viewRewardsHistory, setViewRewardsHistory] = useState<boolean>(false);
    var totalPoints = 0;

    function ViewPastRewards(){
        axios.get(`http://localhost:3000/${sharedValue.id}/rewards`)
        .then((response) => {
          console.log(response.data);
          setRewardsWon(response.data.user);
          setViewRewardsHistory(true);
          for (var reward of rewardsWon) {
            totalPoints += reward.points;
          }
        })
        .catch((error) => {
          console.log(error);
          console.log('No Rewards Redeemed');
        });
    }

    return(
        <>
            <p>{ sharedValue.name }'s Profile</p>
            <ul>
                <li><p>Location: { sharedValue.location }</p></li>
                <li><p>Earned Points: { totalPoints }</p></li>
                <li><Link to='/dashboard'>Back</Link></li>
            </ul>
        </>
    );
}