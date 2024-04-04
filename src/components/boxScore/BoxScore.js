import React from 'react'
import "./boxScore.css";
import { Space, Table, Tag } from 'antd';

export default function BoxScore(props) {
  const {data} = props;
  const columns = [
    {title: 'Name',dataIndex: 'name',key: 'name',render: (text) => <a>{text}</a>},
    {title: 'MIN',dataIndex: 'min',key: 'min',},
    {title: 'PTS',dataIndex: 'pts',key: 'pts',},
    {title: 'REB',dataIndex: 'reb',key: 'reb',},
    {title: 'AST',dataIndex: 'ast',key: 'ast',},
    {title: 'STL',dataIndex: 'stl',key: 'stl',},
    {title: 'BLK',dataIndex: 'blk',key: 'blk',},
    {title:"FGM", dataIndex:"fgm", key:"fgm"},
    {title:"FGA", dataIndex:"fga", key:"fga"},
    {title:"FG%", dataIndex:"fg_pct", key:"fg_pct"},
    {title:"3PM", dataIndex:"fg3m", key:"fg3m"},
    {title:"3PA", dataIndex:"fg3a", key:"fg3a"},
    {title:"3P%", dataIndex:"fg3_pct", key:"fg3_pct"},
    {title:"FTM", dataIndex:"ftm", key:"ftm"},
    {title:"FTA", dataIndex:"fta", key:"fta"},
    {title:"FT%", dataIndex:"ft_pct", key:"ft_pct"},
    {title:"OREB", dataIndex:"oreb", key:"oreb"},
    {title:"DREB", dataIndex:"dreb", key:"dreb"},
    {title:"TOV", dataIndex:"turnover", key:"turnover"},
  ];
  const value = [
    //sort the data by minutes played
    data.sort((a, b) => b.min - a.min).map((e, index) => {
      return {
        key: index,
        name: e.player.first_name.substring(0,1) + ". " + e.player.last_name,
        min: e.min,
        pts: e.pts,
        reb: e.reb,
        ast: e.ast,
        stl: e.stl,
        blk: e.blk,
        fgm: e.fgm,
        fga: e.fga,
        //round to 2 decimal places
        fg_pct: Math.round(e.fg_pct * 100) / 100,
        fg3m: e.fg3m,
        fg3a: e.fg3a,
        fg3_pct: Math.round(e.fg3_pct * 100) / 100,
        ftm: e.ftm,
        fta: e.fta,
        ft_pct: Math.round(e.ft_pct * 100) / 100 ,
        oreb: e.oreb,
        dreb: e.dreb,
        turnover: e.turnover
      };
    })

  ];

  return (
    <div>
      <div id="scoreBox">
        <Table size="small" columns={columns} dataSource={value[0]} />
      </div>
    </div>

  )
}
