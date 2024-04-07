import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./team.css"

export default function Team(props) {
  const { team, index } = props;
  const [mouseIn, setMouseIn] = useState(false);
  const [teamid, setTeamid] = useState(0);
  const teams = [
    {id: 1, name: 'Hawks'},
    {id: 2, name: 'Celtics'},
    {id: 3, name: 'Nets'},
    {id: 4, name: 'Hornets'},
    {id: 5, name: 'Bulls'},
    {id: 6, name: 'Cavaliers'},
    {id: 7, name: 'Mavericks'},
    {id: 8, name: 'Nuggets'},
    {id: 9, name: 'Pistons'},
    {id: 10, name: 'Warriors'},
    {id: 11, name: 'Rockets'},
    {id: 12, name: 'Pacers'},
    {id: 13, name: 'Clippers'},
    {id: 14, name: 'Lakers'},
    {id: 15, name: 'Grizzlies'},
    {id: 16, name: 'Heat'},
    {id: 17, name: 'Bucks'},
    {id: 18, name: 'Timberwolves'},
    {id: 19, name: 'Pelicans'},
    {id: 20, name: 'Knicks'},
    {id: 21, name: 'Thunder'},
    {id: 22, name: 'Magic'},
    {id: 23, name: '76ers'},
    {id: 24, name: 'Suns'},
    {id: 25, name: 'Trail Blazers'},
    {id: 26, name: 'Kings'},
    {id: 27, name: 'Spurs'},
    {id: 28, name: 'Raptors'},
    {id: 29, name: 'Jazz'},
    {id: 30, name: 'Wizards'}
  ];
  useEffect(() => {
    const teamId = teams.find((t) => t.name === team.name);
    setTeamid(teamId);
  }, [team]);
  const mouseEnter = () => {
    setMouseIn(true);
  };

  const mouseLeave = () => {
    setMouseIn(false);
  };

  return (
    <Link to={`/teams/${teamid.id}`}>
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      key={index}
      className="team2"
      style={{ backgroundColor: mouseIn ? "rgb(201, 201, 201)" : "", color:mouseIn?'black':"white"
      ,border:mouseIn?'5px solid white':""}}
    >
      <img style={{textAlign:"center"}} src={team.image} alt={team.name} />
      <p style={{textAlign:"center"}}>{team.name}</p>
    </div>
  </Link>
  );
}
