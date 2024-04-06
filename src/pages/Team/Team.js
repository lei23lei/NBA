import React, { useState } from 'react';
import "./team.css"

export default function Team(props) {
  const { team, index } = props;
  const [mouseIn, setMouseIn] = useState(false);

  const mouseEnter = () => {
    setMouseIn(true);
    console.log("mouseIn", mouseIn);
  };

  const mouseLeave = () => {
    setMouseIn(false);
    console.log("mouseIn", mouseIn);
  };

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      key={index}
      className="team2"
      style={{ backgroundColor: mouseIn ? "rgb(201, 201, 201)" : "", color:mouseIn?'black':"white"
      ,border:mouseIn?'5px solid white':""}}
    >
      <img style={{    textAlign:"center"}} src={team.image} alt={team.name} />
      <p style={{textAlign:"center"}}>{team.name}</p>
    </div>
  );
}
