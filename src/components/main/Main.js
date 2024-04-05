import React from 'react'
import {Link,Routes, Route} from 'react-router-dom';
import "./main.css"
import MatchDetail from '../../pages/matchDetail/MatchDetail';
import Button from 'react-bootstrap/Button';
import Game from "../../pages/games/Games"
import Standing from '../../pages/standing/Standing';

export default function Main() {
  return (
    <div>
        <nav>
            <ul id="nav">
            <Link to="/NBA/games" className="category" variant="dark">Games</Link>{' '}
            <Link to="/NBA/standing" className="category" variant="dark">Standings</Link>{' '}
            <Button className="category" variant="dark">Teams</Button>{' '}
            </ul>
        </nav>
        <div id="main">
            <Routes>
                <Route path="/NBA/standing" element={<Standing />} />
                <Route path="/NBA/games/:id" element={<MatchDetail />} />
                <Route path="/NBA/*" element={<Game />} />

            </Routes>
        </div>
    </div>
  )
}
