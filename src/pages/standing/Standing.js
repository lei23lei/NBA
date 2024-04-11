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
import Table from 'react-bootstrap/Table';
import "./standing.css";
import Spinner from 'react-bootstrap/Spinner';
import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import {useSelector,useDispatch} from 'react-redux';
import RollbackOutlined from '@ant-design/icons/RollbackOutlined';


export default function Standing() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.standings)
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);
    const [data, setData] = useState( state );
    const [east, setEast] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [west, setWest] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    //use moment to get the current date
    const current_date = moment().format('YYYY-MM-DD');
    var start_date = "2024-04-04";
    //end date = start_date + 10days
    var end_date = moment(start_date).add(10, 'days').format('YYYY-MM-DD');
    const APIkey= "cda42657-3f79-4c68-b698-755f3ed5e718";
    const url = "https://api.balldontlie.io/v1/games";

    useEffect(() => {
        while(true){
            axios.get(url, {
                headers: {
                    Authorization: APIkey
                },
                params:{
                    // dates: ["2024-01-05"],
                    start_date: start_date,
                    end_date: end_date,
                    per_page: 100,
                    posteason: false
                }
            }).then(response => {
                response.data.data.forEach(game => {
                    if (game.home_team_score > game.visitor_team_score) {
                        setData((prev) => {
                            return prev.map((team) => {
                                if (team.id === game.home_team.id) {
                                    return { ...team, w: team.w + 1 };
                                } else if (team.id === game.visitor_team.id) {
                                    return { ...team, l: team.l + 1 };
                                } else {
                                    return team;
                                }
                            });
                        });
                    }else if(game.home_team_score < game.visitor_team_score){
                        setData((prev) => {
                            return prev.map((team) => {
                                if (team.id === game.visitor_team.id) {
                                    return { ...team, w: team.w + 1 };
                                } else if (team.id === game.home_team.id) {
                                    return { ...team, l: team.l + 1 };
                                } else {
                                    return team;
                                }
                            });
                        });
                    }
                });
                setIsUpdate(true);
                }).then(
                    dispatch({type: 'updateStanding', payload: data})
                ).catch(error => {
                    console.log(error)
                });
                if (end_date > current_date){
                    break;
                }
                start_date = moment(start_date).add(11, 'days').format('YYYY-MM-DD');
                end_date = moment(start_date).add(10, 'days').format('YYYY-MM-DD');
        };
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 800);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    if(isUpdate){
        const teams = data.map((team) => {
            const { w, l, ...rest } = team;
            const PCT = (w / (w + l)).toFixed(3);
            return { ...rest, w, l, PCT };
        });
        teams.sort((a, b) => b.PCT - a.PCT);
        const imageMap = {
            1: imageHawks,
            2: imageCeltics,
            3: imageNets,
            4: imageHornets,
            5: imageBulls,
            6: imageCavaliers,
            7: imageMavericks,
            8: imageNuggets,
            9: imagePistons,
            10: imageWarriors,
            11: imageRockets,
            12: imagePacers,
            13: imageClippers,
            14: imageLakers,
            15: imageGrizzlies,
            16: imageHeat,
            17: imageBucks,
            18: imageTimberwolves,
            19: imagePelicans,
            20: imageKnicks,
            21: imageThunder,
            22: imageMagic,
            23: image76ers,
            24: imageSuns,
            25: imageTrailBlazers,
            26: imageKings,
            27: imageSpurs,
            28: imageRaptors,
            29: imageJazz,
            30: imageWizards,
        };
        teams.forEach((team) => {
            team.image = imageMap[team.id];
        });
        const eastTeams = teams.filter(team => team.conference === 'East');
        const westTeams = teams.filter(team => team.conference === 'West');
        setEast(eastTeams);
        setWest(westTeams);
        setIsLoading(false);
        setIsUpdate(false);
    };

    const navigate = useNavigate();
 
    //teams sorted by pct

    //add images


    const [isEast, setIsEast] = useState(true);
    const [isWest, setIsWest] = useState(false);

    const showEast = () => {
        setIsEast(true);
        setIsWest(false);
    };
    const showWest = () => {
        setIsEast(false);
        setIsWest(true);
    };
    const goBack = () => {
        navigate("/games");
    };

  return (
    <div>
    {isLoading ?   <div id="standingLoading">
    <div>
        <h1 style={{color:'white', marginTop:'70px'}}>Loading</h1>

            <div style={{display:"flex"}}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
            </div>
        </div>
    </div>:
    <div id="standingPage">
    <div id="buttonContainer">
            <div id="switchButton2">
            <Button onClick={showWest} style={{backgroundColor:isWest?"#FFB2D0":"#3F000F", color:isWest?"black":"white"}} variant="secondary">West</Button>{' '}
            <Button onClick={showEast} style={{backgroundColor:isEast?"#CCFFFF":"#2E1A47", color:isEast?"black":"white"}} variant="secondary">East</Button>{' '}
            <Button onClick={goBack} style={{float:'right',marginRight:'10px',width:'45px'}} variant="secondary"><RollbackOutlined /></Button>{' '}
        </div>
    </div>
        <div className="standing">
            {isEast&&<Table className="standingTable" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>PCT</th>
                </tr>
            </thead>
            <tbody>
                {east.map((team, index) => (
                    <tr key={team.id}>
                        <td className="ranking">{index + 1}</td>
                        <td>
                            <img src={team.image} alt={team.name} width="30" height="30" /> 
                             <span className="teamName">{isSmallScreen ? team.name.split(' ')[1] : team.name}</span>
                        </td>
                        <td>{team.w}</td>
                        <td>{team.l}</td>
                        <td>{team.PCT}</td>
                    </tr>
                ))}
            </tbody>
            </Table>}
        </div>
        <div className="standing">
            {isWest&&<Table className="standingTable" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>PCT</th>
                </tr>
            </thead>
            <tbody>
                {west.map((team, index) => (
                    <tr key={team.id}>
                        <td className="ranking">{index + 1}</td>
                        <td>
                            <img src={team.image} alt={team.name} width="30" height="30" /> 
                             <span className="teamName">{isSmallScreen ? team.name.split(' ')[1] : team.name}</span>
                        </td>
                        <td>{team.w}</td>
                        <td>{team.l}</td>
                        <td>{team.PCT}</td>
                    </tr>
                ))}
            </tbody>
            </Table>}
        </div>
        </div>}
    </div>

  )
}
