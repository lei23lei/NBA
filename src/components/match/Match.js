import React,{useState,useEffect} from 'react'
import "./match.css";
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


export default function Match(props) {
    const isHide = props.isHide;
    console.log("match",isHide);
    const {status,time,home_team_score,visitor_team_score} = props.match;
    var utcTime = new Date(status);
    var localTimeString = utcTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true});
    const [home_team_image, setHome_team_image] = useState();
    const [visitor_team_image, setVisitor_team_image] = useState();
    const home_team = props.match.home_team.name;
    const visitor_team = props.match.visitor_team.name;
    useEffect(()=>{
        switch(home_team){
            case "76ers":
                setHome_team_image(image76ers);
                break;
            case "Bucks":
                setHome_team_image(imageBucks);
                break;
            case "Bulls":
                setHome_team_image(imageBulls);
                break;
            case "Cavaliers":
                setHome_team_image(imageCavaliers);
                break;
            case "Celtics":
                setHome_team_image(imageCeltics);
                break;
            case "Clippers":
                setHome_team_image(imageClippers);
                break;
            case "Grizzlies":
                setHome_team_image(imageGrizzlies);
                break;
            case "Hawks":
                setHome_team_image(imageHawks);
                break;
            case "Heat":
                setHome_team_image(imageHeat);
                break;
            case "Hornets":
                setHome_team_image(imageHornets);
                break;
            case "Jazz":
                setHome_team_image(imageJazz);
                break;
            case "Kings":
                setHome_team_image(imageKings);
                break;
            case "Knicks":
                setHome_team_image(imageKnicks);
                break;
            case "Lakers":
                setHome_team_image(imageLakers);
                break;
            case "Magic":
                setHome_team_image(imageMagic);
                break;
            case "Mavericks":
                setHome_team_image(imageMavericks);
                break;
            case "Nets":
                setHome_team_image(imageNets);
                break;
            case "Nuggets":
                setHome_team_image(imageNuggets);
                break;
            case "Pacers":
                setHome_team_image(imagePacers);
                break;
            case "Pelicans":
                setHome_team_image(imagePelicans);
                break;
            case "Pistons":
                setHome_team_image(imagePistons);
                break;
            case "Raptors":
                setHome_team_image(imageRaptors);
                break;
            case "Rockets":
                setHome_team_image(imageRockets);
                break;
            case "Spurs":
                setHome_team_image(imageSpurs);
                break;
            case "Suns":
                setHome_team_image(imageSuns);
                break;
            case "Thunder":
                setHome_team_image(imageThunder);
                break;
            case "Timberwolves":
                setHome_team_image(imageTimberwolves);
                break
            case "Trail Blazers":
                setHome_team_image(imageTrailBlazers);
                break;
            case "Warriors":
                setHome_team_image(imageWarriors);
                break;
            case "Wizards":
                setHome_team_image(imageWizards);
                break;
        };
            switch(visitor_team){
                case "76ers":
                    setVisitor_team_image(image76ers);
                    break;
                case "Bucks":
                    setVisitor_team_image(imageBucks);
                    break;
                case "Bulls":
                    setVisitor_team_image(imageBulls);
                    break;
                case "Cavaliers":
                    setVisitor_team_image(imageCavaliers);
                    break;
                case "Celtics":
                    setVisitor_team_image(imageCeltics);
                    break;
                case "Clippers":
                    setVisitor_team_image(imageClippers);
                    break;
                case "Grizzlies":
                    setVisitor_team_image(imageGrizzlies);
                    break;
                case "Hawks":
                    setVisitor_team_image(imageHawks);
                    break;
                case "Heat":
                    setVisitor_team_image(imageHeat);
                    break;
                case "Hornets":
                    setVisitor_team_image(imageHornets);
                    break;
                case "Jazz":
                    setVisitor_team_image(imageJazz);
                    break;
                case "Kings":
                    setVisitor_team_image(imageKings);
                    break;
                case "Knicks":
                    setVisitor_team_image(imageKnicks);
                    break;
                case "Lakers":
                    setVisitor_team_image(imageLakers);
                    break;
                case "Magic":
                    setVisitor_team_image(imageMagic);
                    break;
                case "Mavericks":
                    setVisitor_team_image(imageMavericks);
                    break;
                case "Nets":
                    setVisitor_team_image(imageNets);
                    break;
                case "Nuggets":
                    setVisitor_team_image(imageNuggets);
                    break;
                case "Pacers":
                    setVisitor_team_image(imagePacers);
                    break;
                case "Pelicans":
                    setVisitor_team_image(imagePelicans);
                    break;
                case "Pistons":
                    setVisitor_team_image(imagePistons);
                    break;
                case "Raptors":
                    setVisitor_team_image(imageRaptors);
                    break;
                case "Rockets":
                    setVisitor_team_image(imageRockets);
                    break;
                case "Spurs":
                    setVisitor_team_image(imageSpurs);
                    break;
                case "Suns":
                    setVisitor_team_image(imageSuns);
                    break;
                case "Thunder":
                    setVisitor_team_image(imageThunder);
                    break;
                case "Timberwolves":
                    setVisitor_team_image(imageTimberwolves);
                    break
                case "Trail Blazers":
                    setVisitor_team_image(imageTrailBlazers);
                    break;
                case "Warriors":
                    setVisitor_team_image(imageWarriors);
                    break;
                case "Wizards":
                    setVisitor_team_image(imageWizards);
                    break;
            };

    },[home_team]);

  return (
    <div>
        <div className="match">
        <div className="team">
                <img className='visitorImage' src={visitor_team_image} />
                <div className="teamNameMatch">{visitor_team}</div>
            </div>
            <div className="detail">
            {isHide?<div className="score">-</div>:<div className="score">{visitor_team_score}</div>}

            {status.substring(0,2)==="20"?<div className="status">{localTimeString}</div>:
            <div className="time">{time}</div>}
            {isHide?<div className="score">-</div>:<div className="score">{home_team_score}</div>}
            
            </div>
            <div className="team">
                <img className='homeImage' src={home_team_image} />
                <div className="teamNameMatch">{home_team}</div>
            </div>
        </div>
    </div>
  )
}
