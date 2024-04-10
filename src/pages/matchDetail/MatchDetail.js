import React, { useEffect, useState } from 'react'
import Match from "../../components/match/Match";
import BoxScore from '../../components/boxScore/BoxScore';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import RollbackOutlined from '@ant-design/icons/RollbackOutlined';
import "./matchDetail.css";


export default function MatchDetail() {
    const navigate = useNavigate();
    const apiKey = "cda42657-3f79-4c68-b698-755f3ed5e718";
    const [match, setMatch] = useState(null);
    const [home,setHome] = useState([]);
    const [homeName,setHomeName] = useState([]);
    const [isHome,setIsHome] = useState(true);
    const [visitor,setVisitor] = useState([]);
    const [visitorName,setVisitorName] = useState([]); 
    const [isVisitor,setIsVisitor] = useState(false);
    const {id,isHide} = useParams();
    console.log("matchDetail",id,isHide);
    useEffect(() => {
        window.scrollTo(0, 0);
        var url = "https://api.balldontlie.io/v1/games/"
        axios.get(url + id, {
            headers: {
                Authorization: apiKey
            }
        }).then(response => {
            setMatch(response.data.data);
        }).catch(error => {
            console.log(error)
        });

        url = "https://api.balldontlie.io/v1/stats"
        axios.get(url, {
            headers: {
                Authorization: apiKey
            },
            params:{
                // player_ids: [115]
                game_ids: [id],
                per_page: 36
            }
        }).then(response => {
            const list = response.data.data;
            const homeData = [];
            const visitorData = [];
            
            list.forEach(e => {
                if (e.min === "00") {
                    return; // Skip if the minute is "00"
                }
            
                if (e.player.team_id === e.game.home_team_id) {
                    homeData.push(e);
                } else {
                    visitorData.push(e);
                }
            });
            setHome(homeData);
            setHomeName(homeData[0].team.name);
            setVisitor(visitorData);
            setVisitorName(visitorData[0].team.name);
        }).catch(error => {
            console.log(error)
        });
    }, [id]);
    const showHome = () => {
        setIsHome(true);
        setIsVisitor(false);
    };
    const showVistor = () => {
        setIsHome(false);
        setIsVisitor(true);
    };
    const goBack = () => {
        navigate(-1);
    };
  return (
    <div id="matchDetailContainer">
        {!match ?   <div className="loading">
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
        <div>
        <div style={{ display: 'flex', justifyContent: 'center',width:'100%'}}>
            <Match match={match} isHide={isHide} />
        </div>
        <div id="switchButton">
            <Button onClick={showVistor} style={{backgroundColor:isVisitor?"white":"grey", color:isVisitor?"black":"white"}} variant="secondary">{visitorName}</Button>{' '}
            <Button onClick={showHome} style={{backgroundColor:isHome?"white":"grey", color:isHome?"black":"white"}} variant="secondary">{homeName}</Button>{' '}
            <Button onClick={goBack} style={{float:'right', marginRight:'35px',width:'45px'}} variant="secondary"><RollbackOutlined /></Button>{' '}
        </div>
        <div className="boxScore">
            {isHome&&<BoxScore data={home} />}
            {isVisitor&&<BoxScore data={visitor} />}
        </div>
        </div>
        }
    </div>
  )
}

