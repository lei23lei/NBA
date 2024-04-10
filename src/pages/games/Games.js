import React,{useEffect, useState} from 'react'
import { Pagination,DatePicker, Space } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Switch } from 'antd';  
import moment from 'moment';
import "./games.css"
import Spinner from 'react-bootstrap/Spinner';
import Match from '../../components/match/Match';

const apiKey = "cda42657-3f79-4c68-b698-755f3ed5e718";
const url = "https://api.balldontlie.io/v1/games"


export default function Games(props) {
    const {isHide} = props;
    console.log("Game", isHide);
    const [size, setSize] = useState(window.innerWidth < 550 ? "small" : "default");
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(moment(date,"YYYY-MM-DD").daysInMonth());
    const [matches, setMatches] = useState([]);

    const changeDay = (page) => {
        setDate(moment(date,'YYYY-MM').set('date',page).format('YYYY-MM-DD'));
    }
    const onChange = (date, dateString) => {
        if(dateString === ""){
            return;
        }
        setDate(dateString);
        setDays(moment(dateString,"YYYY-MM-DD").daysInMonth())
      };

    useEffect(() => {
        axios.get(url, {
            headers: {  
                Authorization: apiKey
            },
            params:{
                // dates: ["2024-01-05"],
                dates:[date],
            }
        }).then(response => {
            window.scrollTo(0, 0);
            setMatches(response.data.data);
            setIsLoading(false);
        }).catch(error => {
            console.log(error)
        });
        const handleResize = () => {
            setSize(window.innerWidth < 550 ? "small" : "default");
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[date]);
  return (
    <div>   
        <div id='showDate'>
            <h2>{date}</h2>
        </div>
        <div id="datePanel"> 
        {/* if screen width is less than 550px, add size = "small" into Pagination */}
        <Pagination size={size}  id="pagination"  onChange={changeDay} defaultCurrent={Number(moment(date,'YYYY-MM-DD').format('DD'))} total={days*10} />
            <Space direction="vertical">
                <DatePicker onChange={onChange} />
            </Space>
        </div>
        {matches.length === 0 ? (isLoading ? 
        <div className="loading">
        <div>
        <h1 style={{color:'white', marginTop:'70px'}}>Loading</h1>

            <div style={{display:"flex"}}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
            </div>
        </div>
            </div> :
            <div id="noGame">No Scheduled Games or Events</div>) :
        <div id="games">
            {matches.map((match) => (
                match.status.substring(0,2) === "20" ? <Match match={match} isHide={isHide} key={match.id}/>:
                <Link style={{textDecoration:'none'}} to={`/games/${match.id}/${isHide}`} key={match.id}>
                    <Match match={match} isHide={isHide}/>
                </Link>
            ))}
        </div>
        }   
    </div>
  )
}