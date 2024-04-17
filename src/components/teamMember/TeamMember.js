import React,{useState,useEffect} from 'react';
import './teamMember.css';
import Button from 'react-bootstrap/Button';
import RollbackOutlined from '@ant-design/icons/RollbackOutlined';


import Table from 'react-bootstrap/Table';
import axios from 'axios';

export default function TeamMember(props) {
    const [player, setPlayer] = useState([]);
    // const {setLoading} = props;
    const id = props.id;
    const url = "https://api.balldontlie.io/v1/players";
    const APIkey= "cda42657-3f79-4c68-b698-755f3ed5e718";
    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: APIkey
            },
            //?team_ids[]=1&team_ids[]=2
            params:{
                team_ids: [id]
            }
        }).then(response => {
            setPlayer(response.data.data.filter(e => e.position !== ""));
            // setLoading(false);
        }).catch(error => {
            console.log(error)
        });
    },[]);
    const goBack = () => {
        window.history.back();
    };
  return (
    <div id="member">
        <div id="teamButtonContainer">
        <Button onClick={goBack} id="teamButton" variant="secondary"><RollbackOutlined /></Button>{' '}
        </div>
        <div style={{overflow:'auto'}}>
        <Table id="memberTable" size='sm' striped bordered hover variant="dark">
            <thead style={{color:'white'}}>
                <tr >
                <th>#</th>
                <th>F_Name</th>
                <th>L_Name</th>
                <th>position</th>
                <th>height</th>
                <th>weight</th>
                <th>country</th>
                <th>draft_year</th>
                <th>draft_round</th>
                <th>draft_number</th>
                </tr>
            </thead>
            <tbody style={{color:"white"}}>
                {player.map((e,i) => 
                    <tr key={i}>
                    <td>{e.jersey_number}</td>
                        <td>{e.first_name}</td>
                        <td>{e.last_name}</td>
                        <td>{e.position}</td>
                        <td>{e.height}</td>
                        <td>{e.weight}</td>
                        <td>{e.country}</td>
                        <td>{e.draft_year}</td>
                        <td>{e.draft_round}</td>
                        <td>{e.draft_number}</td>
                    </tr>
                )}
            </tbody>
        </Table>
        </div>
    </div>
  )
}
