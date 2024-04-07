import image76ers from "../../nba-images/76ers.svg";
import imageBucks from "../../nba-images/Bucks.svg";
import imageBulls from "../../nba-images/Bulls.svg";
import imageCavaliers from "../../nba-images/Cavaliers.svg";
import imageCeltics from "../../nba-images/Celtics.svg";
import imageClippers from "../../nba-images/Clippers.svg";
import imageGrizzlies from "../../nba-images/Grizzlies.svg";
import imageHawks from "../../nba-images/Hawks.svg";
import imageHeat from "../../nba-images/Heat.svg";
import imageHornets from "../../nba-images/Hornets.svg";
import imageJazz from "../../nba-images/Jazz.svg";
import imageKings from "../../nba-images/Kings.svg";
import imageKnicks from "../../nba-images/Knicks.svg";
import imageLakers from "../../nba-images/Lakers.svg";
import imageMagic from "../../nba-images/Magic.svg";
import imageMavericks from "../../nba-images/Mavericks.svg";
import imageNets from "../../nba-images/Nets.svg";
import imageNuggets from "../../nba-images/Nuggets.svg";
import imagePacers from "../../nba-images/Pacers.svg";
import imagePelicans from "../../nba-images/Pelicans.svg";
import imagePistons from "../../nba-images/Pistons.svg";
import imageRaptors from "../../nba-images/Raptors.svg";
import imageRockets from "../../nba-images/Rockets.svg";
import imageSpurs from "../../nba-images/Spurs.svg";
import imageSuns from "../../nba-images/Suns.svg";
import imageThunder from "../../nba-images/Thunder.svg";
import imageTimberwolves from "../../nba-images/Timberwolves.svg";
import imageTrailBlazers from "../../nba-images/Trail.svg";
import imageWarriors from "../../nba-images/Warriors.svg";
import imageWizards from "../../nba-images/Wizards.svg";
import "./teams.css";
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Team from "../Team/Team"

export default function Teams() {

  const [teams, setTeams] = useState([
    {name: "76ers", image: image76ers},
    {name: "Bucks", image: imageBucks},
    {name: "Bulls", image: imageBulls},
    {name: "Cavaliers", image: imageCavaliers},
    {name: "Celtics", image: imageCeltics},
    {name: "Clippers", image: imageClippers},
    {name: "Grizzlies", image: imageGrizzlies},
    {name: "Hawks", image: imageHawks},
    {name: "Heat", image: imageHeat},
    {name: "Hornets", image: imageHornets},
    {name: "Jazz", image: imageJazz},
    {name: "Kings", image: imageKings},
    {name: "Knicks", image: imageKnicks},
    {name: "Lakers", image: imageLakers},
    {name: "Magic", image: imageMagic},
    {name: "Mavericks", image: imageMavericks},
    {name: "Nets", image: imageNets},
    {name: "Nuggets", image: imageNuggets},
    {name: "Pacers", image: imagePacers},
    {name: "Pelicans", image: imagePelicans},
    {name: "Pistons", image: imagePistons},
    {name: "Raptors", image: imageRaptors},
    {name: "Rockets", image: imageRockets},
    {name: "Spurs", image: imageSpurs},
    {name: "Suns", image: imageSuns},
    {name: "Thunder", image: imageThunder},
    {name: "Timberwolves", image: imageTimberwolves},
    {name: "Trail Blazers", image: imageTrailBlazers},
    {name: "Warriors", image: imageWarriors},
    {name: "Wizards", image: imageWizards},
  ]);

  return (
    <div id='teamsPage'>
      <div id="teamContainer">
        <div id="insideContainer">
        {teams.map((team, index) => {
          return (
         <Team key={index} team={team} />
          )
        })}
        </div>
      </div>
    </div>
  )
}
