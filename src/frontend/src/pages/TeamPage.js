import {React,useEffect,useState} from 'react'
import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'

export default function TeamPage() {


const[team,setTeam]=useState({matches: []})

useEffect(
()=>{
    const fetchMatches = async()=>{
        const response = await fetch('http://localhost:8080/team/Royal%20Challengers%20Bangalore');
        const data = await response.json();
        setTeam(data)
    }
    fetchMatches();
},[] //when rhe elements in this array chnaged that is when this component is loaded
);


  return (
    <div className='TeamPage'>
        <h1>{team.teamName}</h1>
        <MatchDetailCard match = {team.matches[0]}/>
        {team.matches.slice(1).map(match => <MatchSmallCard match={match}/>)}
    </div>
  )
}
