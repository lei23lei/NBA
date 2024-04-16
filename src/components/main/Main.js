import React,{useState,useEffect} from 'react'
import {Link,Routes, Route} from 'react-router-dom';
import "./main.css"
import MatchDetail from '../../pages/matchDetail/MatchDetail';
import Teams from "../../pages/teams /Teams"
import Feedback from '../../pages/Feedback/Feedback';
import Stats from '../../pages/Stats/Stats';
import TeamDetail from '../../pages/TeamDetail/TeamDetail'
import Game from "../../pages/games/Games"
import Standing from '../../pages/standing/Standing';
import Content from '../FeedbackContent/Content';
import FeedbackHeader from '../FeedbackContent/FeedbackHeader';
import Satisfaction from '../FeedbackContent/Satisfaction';

export default function Main(props) {
  const [satisfaction, setSatisfaction] = useState(100);
  const [myFeedback, setMyFeedback] = useState([{name:'Peter',email:'lei23lei@gmail.com',satisfaction:100,'feedback':'That is the NBA website I have been looking for!'}]);
  const {feedback} = props;
  useEffect(() => {
      if(!feedback) return;
  
      // push feedback to myFeedback
      const updatedFeedback = [...myFeedback, feedback];
      setMyFeedback(updatedFeedback);
  
      // calculate the average satisfaction and round it into two decimal places
      // let sum = 0;
      // updatedFeedback.forEach(e => {
      //     sum += e.satisfaction;
      // });
      // setSatisfaction(sum/updatedFeedback.length);
      let sum = updatedFeedback.reduce((acc, curr) => acc + curr.satisfaction, 0);
      setSatisfaction((sum/updatedFeedback.length).toFixed(2));
      
  }, [feedback]);



  const {game} = props;
  const {setGame} = props;
  const {isHide} = props;
  const [isGame, setIsGame] = useState(false);
  const [isStanding, setIsStanding] = useState(false);
  const [isStats, setIsStats] = useState(false);
  const [isTeams, setIsTeams] = useState(false);

  const clickGame = () => {
    setIsGame(true);
    setIsStanding(false);
    setIsStats(false);
    setIsTeams(false);
  };
  const clickStandings = () => {
    setIsGame(false);
    setIsStanding(true);
    setIsStats(false);
    setIsTeams(false);
  };
  const clickStats = () => {
    setIsGame(false);
    setIsStanding(false);
    setIsStats(true);
    setIsTeams(false);
  };
  const clickTeams = () => {
    setIsGame(false);
    setIsStanding(false);
    setIsStats(false);
    setIsTeams(true);
  };

  useEffect(() => {
    if(game){
      clickGame();
      setGame(false);
    }
  },[game]);

  return (
    <div>
        <nav>
            <ul id="nav">
            <Link to="/games" className="category" variant="dark"><div className='categoryName' onClick={clickGame} style={{color:isGame?'white':''}}>Game</div></Link>{' '}
            <Link to="/standing" className="category" variant="dark"><div className='categoryName' onClick={clickStandings} style={{color:isStanding?'white':''}}>Standings </div></Link>{' '}
            <Link to="/stats" className="category" variant="dark"><div className='categoryName' onClick={clickStats} style={{color:isStats?'white':''}}>Stats</div></Link>{' '}
            <Link to="/teams" className="category" variant="dark"><div className='categoryName' onClick={clickTeams}style={{color:isTeams?'white':''}}>Teams</div></Link>{' '}
            </ul>
        </nav>
        <div id="main">
            <Routes>
                <Route path="/standing" element={<Standing />} />
                <Route path="/games/:id/" element={<MatchDetail isHide={isHide}/>} />
                <Route path="/stats" element={<Stats/>} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams/:id" element={<TeamDetail />} />
                <Route path="/feedback" element={
                  <Feedback>
                      <FeedbackHeader />
                      <Satisfaction satisfaction={satisfaction}/>
                      <Content myFeedback={myFeedback}/>
                  </Feedback>
                }/>
                
                <Route path="/*" element={<Game isHide={isHide} />} />
            </Routes>
        </div>
    </div>
  )
}
