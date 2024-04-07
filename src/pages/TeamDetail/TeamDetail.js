import React,{useState,useEffect} from 'react'
import "./teamDetail.css"
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import TeamMember from '../../components/teamMember/TeamMember';

export default function TeamDetail() {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  const standing = useSelector((state) => state.standings);
  const url = `https://api.balldontlie.io/v1/teams/${id}`;
  const APIkey= "cda42657-3f79-4c68-b698-755f3ed5e718"
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const images = useSelector((state) => state.homeImage);
  useEffect(() => {
    axios.get(url, {
      headers: {
        Authorization: APIkey
      }
    }).then(response => {
      setTeam(response.data.data);
    }).then(
      setImage(images[id-1])
    ).then(
    ).catch(error => {
      console.log(error);
    });
  }, []);
  return (
    <div>
        {loading ?   <div id="standingLoading">
        <h1 style={{color:'white', marginTop:'70px'}}>Loading <Spinner animation="border" variant="light" /></h1>
    </div>:
    <div id="teamContainer">
      <div className="teamHeader">
      <img className="teamDetailImage" src={image.image} alt={team.full_name} />
        <div className="teamDescription">
          <div className="teamTitle">{team.full_name}</div>
          <div>City: {team.city}</div>
          <div>Conference: {team.conference}</div>
          <div>Division: {team.division}</div>
        </div>
      </div>
      <div className="teamMember">
      <TeamMember setLoading={setLoading} id={id}/>
      </div>
    </div>}
    </div>

  )
}
