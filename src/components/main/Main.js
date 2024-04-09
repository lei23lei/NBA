import React from 'react'
import {Link,Routes, Route} from 'react-router-dom';
import "./main.css"
import MatchDetail from '../../pages/matchDetail/MatchDetail';
import Teams from "../../pages/teams /Teams"
import Feedback from '../../pages/Feedback/Feedback';
import Stats from '../../pages/Stats/Stats';
import TeamDetail from '../../pages/TeamDetail/TeamDetail'
import Game from "../../pages/games/Games"
import Standing from '../../pages/standing/Standing';

export default function Main(props) {

  return (
    <div>
        <nav>
            <ul id="nav">
            <Link to="/games" className="category" variant="dark">Games</Link>{' '}
            <Link to="/standing" className="category" variant="dark">Standings</Link>{' '}
            <Link to="/stats" className="category" variant="dark">Stats</Link>{' '}
            <Link to="/teams" className="category" variant="dark">Teams</Link>{' '}
            </ul>
        </nav>
        <div id="main">
            <Routes>
                <Route path="/standing" element={<Standing />} />
                <Route path="/games/:id" element={<MatchDetail />} />
                <Route path="/stats" element={<Stats/>} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams/:id" element={<TeamDetail />} />
                <Route path="/feedback" element={<Feedback feedback={props.feedback} />} />
                <Route path="/*" element={<Game />} />
            </Routes>
        </div>
    </div>
  )
}
