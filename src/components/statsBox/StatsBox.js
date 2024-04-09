import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import './statsBox.css';
export default function StatsBox(props) {
const {data} = props;



    return (
        <div id="statsbox">
          <Table  striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>MIN</th>
                <th>PTS</th>
                <th>REB</th>
                <th>AST</th>
                <th>STL</th>
                <th>BLK</th>
                <th>FGM</th>
                <th>FGA</th>
                <th>FG%</th>
                <th>3PM</th>
                <th>3PA</th>
                <th>3P%</th>
                <th>FTM</th>
                <th>FTA</th>
                <th>FT%</th>
                <th>OREB</th>
                <th>DREB</th>
                <th>TOV</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 30).map((e, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.min}</td>
                  <td>{Math.round(e.pts * 10) / 10}</td>
                  <td>{Math.round(e.reb * 10) / 10}</td>
                  <td>{Math.round(e.ast * 10) / 10}</td>
                  <td>{Math.round(e.stl * 10) / 10}</td>
                  <td>{Math.round(e.blk * 10) / 10}</td>
                  <td>{Math.round(e.fgm * 10) / 10}</td>
                  <td>{Math.round(e.fga * 10) / 10}</td>
                  <td>{Math.round(e.fg_pct * 10) / 10}</td>
                  <td>{Math.round(e.fg3m * 10) / 10}</td>
                  <td>{Math.round(e.fg3a * 10) / 10}</td>
                  <td>{Math.round(e.fg3_pct * 10) / 10}</td>
                  <td>{Math.round(e.ftm * 10) / 10}</td>
                  <td>{Math.round(e.fta * 10) / 10}</td>
                  <td>{Math.round(e.ft_pct * 10) / 10}</td>
                  <td>{Math.round(e.oreb * 10) / 10}</td>
                  <td>{Math.round(e.dreb * 10) / 10}</td>
                  <td>{Math.round(e.turnover * 10) / 10}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }      