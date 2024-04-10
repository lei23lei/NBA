import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import StatsBox from '../../components/statsBox/StatsBox';
import RollbackOutlined from '@ant-design/icons/RollbackOutlined';
import Spinner from 'react-bootstrap/Spinner';
import "./stats.css";


export default function Stats(props) {
  const navigate = useNavigate();
    const APIkey= "cda42657-3f79-4c68-b698-755f3ed5e718"
    const url = "https://api.balldontlie.io/v1/season_averages";
    const list= [];    for (let i = 1; i <= 493; i++) {list.push(i);};
    const [nameId] = useState([
      { player_id: 8, name: 'Grayson Allen', number: '8' },
      { player_id: 9, name: 'Jarrett Allen', number: '31' },
      { player_id: 15, name: 'Giannis Antetokounmpo', number: '34' },
      { player_id: 18, name: 'OG Anunoby', number: '8' },
      { player_id: 19, name: 'Ryan Arcidiacono', number: '51' },
      { player_id: 24, name: 'Marvin Bagley III', number: '35' },
      { player_id: 28, name: 'Mo Bamba', number: '5' },
      { player_id: 32, name: 'Keita Bates-Diop', number: '13' },
      { player_id: 33, name: 'Nicolas Batum', number: '40' },
      { player_id: 37, name: 'Bradley Beal', number: '3' },
      { player_id: 44, name: 'Davis Bertans', number: '9' },
      { player_id: 54, name: 'Bojan Bogdanovic', number: '44' },
      { player_id: 57, name: 'Devin Booker', number: '1' },
      { player_id: 58, name: 'Chris Boucher', number: '25' },
      { player_id: 61, name: 'Mikal Bridges', number: '1' },
      { player_id: 62, name: 'Miles Bridges', number: '0' },
      { player_id: 65, name: 'Malcolm Brogdon', number: '11' },
      { player_id: 66, name: 'Dillon Brooks', number: '9' },
      { player_id: 70, name: 'Jaylen Brown', number: '7' },
      { player_id: 73, name: 'Jalen Brunson', number: '11' },
      { player_id: 75, name: 'Reggie Bullock', number: '25' },
      { player_id: 77, name: 'Alec Burks', number: '18' },
      { player_id: 87, name: 'Jevon Carter', number: '5' },
      { player_id: 89, name: 'Alex Caruso', number: '6' },
      { player_id: 100, name: 'Jordan Clarkson', number: '00' },
      { player_id: 101, name: 'John Collins', number: '20' },
      { player_id: 114, name: 'Seth Curry', number: '30' },
      { player_id: 125, name: 'DeMar DeRozan', number: '11' },
      { player_id: 130, name: 'Spencer Dinwiddie', number: '26' },
      { player_id: 131, name: 'Donte DiVincenzo', number: '0' },
      { player_id: 132, name: 'Luka Doncic', number: '77' },
      { player_id: 137, name: 'Andre Drummond', number: '3' },
      { player_id: 139, name: 'Kris Dunn', number: '11' },
      { player_id: 140, name: 'Kevin Durant', number: '35' },
      { player_id: 147, name: 'Drew Eubanks', number: '14' },
      { player_id: 158, name: 'Dorian Finney-Smith', number: '28' },
      { player_id: 178, name: 'Eric Gordon', number: '23' },
      { player_id: 188, name: 'Jeff Green', number: '32' },
      { player_id: 191, name: 'Tim Hardaway Jr.', number: '10' },
      { player_id: 200, name: 'Tobias Harris', number: '12' },
      { player_id: 201, name: 'Isaiah Hartenstein', number: '55' },
      { player_id: 202, name: 'Josh Hart', number: '3' },
      { player_id: 210, name: 'Buddy Hield', number: '17' },
      { player_id: 213, name: 'Aaron Holiday', number: '0' },
      { player_id: 214, name: 'Jrue Holiday', number: '4' },
      { player_id: 219, name: 'Al Horford', number: '42' },
      { player_id: 227, name: 'Brandon Ingram', number: '14' },
      { player_id: 228, name: 'Kyrie Irving', number: '11' },
      { player_id: 247, name: 'Derrick Jones Jr.', number: '55' },
      { player_id: 248, name: 'Damian Jones', number: '30' },
      { player_id: 249, name: 'Tyus Jones', number: '5' },
      { player_id: 251, name: 'Cory Joseph', number: '18' },
      { player_id: 259, name: 'Kevin Knox', number: '11' },
      { player_id: 261, name: 'Luke Kornet', number: '40' },
      { player_id: 265, name: 'Kyle Kuzma', number: '33' },
      { player_id: 277, name: 'Caris LeVert', number: '3' },
      { player_id: 283, name: 'Brook Lopez', number: '11' },
      { player_id: 284, name: 'Robin Lopez', number: '33' },
      { player_id: 286, name: 'Kyle Lowry', number: '7' },
      { player_id: 296, name: 'Boban Marjanovic', number: '51' },
      { player_id: 297, name: 'Lauri Markkanen', number: '23' },
      { player_id: 303, name: 'CJ McCollum', number: '3' },
      { player_id: 314, name: 'Chimezie Metu', number: '4' },
      { player_id: 315, name: 'Khris Middleton', number: '22' },
      { player_id: 322, name: 'Donovan Mitchell', number: '45' },
      { player_id: 329, name: 'Markieff Morris', number: '88' },
      { player_id: 337, name: 'Mike Muscala', number: '50' },
      { player_id: 338, name: 'Svi Mykhailiuk', number: '50' },
      { player_id: 340, name: 'Larry Nance Jr.', number: '22' },
      { player_id: 344, name: 'Georges Niang', number: '20' },
      { player_id: 349, name: 'Jusuf Nurkic', number: '20' },
      { player_id: 351, name: "Royce O'Neale", number: '00' },
      { player_id: 356, name: 'Josh Okogie', number: '2' },
      { player_id: 358, name: 'Kelly Olynyk', number: '41' },
      { player_id: 360, name: 'Kelly Oubre Jr.', number: '9' },
      { player_id: 368, name: 'Cameron Payne', number: '22' },
      { player_id: 371, name: 'Mason Plumlee', number: '44' },
      { player_id: 373, name: 'Jakob Poeltl', number: '19' },
      { player_id: 378, name: 'Kristaps Porzingis', number: '8' },
      { player_id: 379, name: 'Dwight Powell', number: '7' },
      { player_id: 380, name: 'Norman Powell', number: '24' },
      { player_id: 383, name: 'Taurean Prince', number: '12' },
      { player_id: 387, name: 'Julius Randle', number: '30' },
      { player_id: 409, name: 'Dennis Schroder', number: '17' },
      { player_id: 413, name: 'Collin Sexton', number: '2' },
      { player_id: 416, name: 'Pascal Siakam', number: '43' },
      { player_id: 419, name: 'Anfernee Simons', number: '1' },
      { player_id: 421, name: 'Dennis Smith Jr.', number: '4' },
      { player_id: 434, name: 'Jayson Tatum', number: '0' },
      { player_id: 439, name: 'Daniel Theis', number: '10' },
      { player_id: 444, name: 'Tristan Thompson', number: '13' },
      { player_id: 450, name: 'PJ Tucker', number: '17' },
      { player_id: 452, name: 'Myles Turner', number: '33' },
      { player_id: 455, name: 'Jonas Valanciunas', number: '17' },
      { player_id: 458, name: 'Fred VanVleet', number: '5' },
      { player_id: 464, name: 'Lonnie Walker IV', number: '8' },
      { player_id: 472, name: 'Russell Westbrook', number: '0' },
      { player_id: 473, name: 'Derrick White', number: '9' },
      { player_id: 487, name: 'Delon Wright', number: '4' },
      { player_id: 491, name: 'Cody Zeller', number: '40' },
      { player_id: 4, name: 'Bam Adebayo', number: '13' },
      { player_id: 12, name: 'Kyle Anderson', number: '1' },
      { player_id: 22, name: 'Deandre Ayton', number: '2' },
      { player_id: 30, name: 'Harrison Barnes', number: '40' },
      { player_id: 38, name: 'Malik Beasley', number: '5' },
      { player_id: 45, name: 'Patrick Beverley', number: '21' },
      { player_id: 48, name: 'Bismack Biyombo', number: '15' },
      { player_id: 53, name: 'Bogdan Bogdanovic', number: '13' },
      { player_id: 68, name: 'Troy Brown Jr.', number: '7' },
      { player_id: 69, name: 'Bruce Brown', number: '11' },
      { player_id: 74, name: 'Thomas Bryant', number: '31' },
      { player_id: 81, name: 'Kentavious Caldwell-Pope', number: '5' },
      { player_id: 83, name: 'Clint Capela', number: '15' },
      { player_id: 85, name: 'Wendell Carter Jr.', number: '34' },
      { player_id: 102, name: 'Zach Collins', number: '23' },
      { player_id: 104, name: 'Mike Conley', number: '10' },
      { player_id: 105, name: 'Pat Connaughton', number: '24' },
      { player_id: 110, name: 'Torrey Craig', number: '13' },
      { player_id: 112, name: 'Jae Crowder', number: '99' },
      { player_id: 115, name: 'Stephen Curry', number: '30' },
      { player_id: 117, name: 'Anthony Davis', number: '3' },
      { player_id: 145, name: 'Joel Embiid', number: '21' },
      { player_id: 151, name: 'Dante Exum', number: '0' },
      { player_id: 160, name: 'Evan Fournier', number: '31' },
      { player_id: 161, name: "De'Aaron Fox", number: '5' },
      { player_id: 165, name: 'Markelle Fultz', number: '20' },
      { player_id: 166, name: 'Wenyen Gabriel', number: '35' },
      { player_id: 172, name: 'Paul George', number: '13' },
      { player_id: 173, name: 'Taj Gibson', number: '67' },
      { player_id: 174, name: 'Harry Giles III', number: '20' },
      { player_id: 175, name: 'Shai Gilgeous-Alexander', number: '2' },
      { player_id: 176, name: 'Rudy Gobert', number: '27' },
      { player_id: 177, name: 'Aaron Gordon', number: '50' },
      { player_id: 180, name: "Devonte' Graham", number: '4' },
      { player_id: 182, name: 'Jerami Grant', number: '9' },
      { player_id: 185, name: 'Draymond Green', number: '23' },
      { player_id: 192, name: 'James Harden', number: '1' },
      { player_id: 196, name: 'Gary Harris', number: '14' },
      { player_id: 197, name: 'Joe Harris', number: '12' },
      { player_id: 204, name: 'Gordon Hayward', number: '33' },
      { player_id: 215, name: 'Justin Holiday', number: '9' },
      { player_id: 217, name: 'Richaun Holmes', number: '22' },
      { player_id: 221, name: 'Kevin Huerter', number: '9' },
      { player_id: 226, name: 'Joe Ingles', number: '7' },
      { player_id: 229, name: 'Jonathan Isaac', number: '1' },
      { player_id: 231, name: 'Jaren Jackson Jr.', number: '13' },
      { player_id: 236, name: 'Reggie Jackson', number: '7' },
      { player_id: 237, name: 'LeBron James', number: '23' },
      { player_id: 242, name: 'James Johnson', number: '16' },
      { player_id: 246, name: 'Nikola Jokic', number: '15' },
      { player_id: 250, name: 'DeAndre Jordan', number: '6' },
      { player_id: 254, name: 'Luke Kennard', number: '10' },
      { player_id: 257, name: 'Maxi Kleber', number: '42' },
      { player_id: 268, name: 'Zach LaVine', number: '8' },
      { player_id: 273, name: 'Alex Len', number: '25' },
      { player_id: 274, name: 'Kawhi Leonard', number: '2' },
      { player_id: 278, name: 'Damian Lillard', number: '0' },
      { player_id: 282, name: 'Kevon Looney', number: '5' },
      { player_id: 285, name: 'Kevin Love', number: '42' },
      { player_id: 290, name: 'Trey Lyles', number: '41' },
      { player_id: 301, name: 'Wesley Matthews', number: '32' },
      { player_id: 304, name: 'T.J. McConnell', number: '9' },
      { player_id: 305, name: 'Doug McDermott', number: '20' },
      { player_id: 306, name: 'JaVale McGee', number: '00' },
      { player_id: 313, name: "De'Anthony Melton", number: '8' },
      { player_id: 319, name: 'Patty Mills', number: '8' },
      { player_id: 320, name: 'Shake Milton', number: '13' },
      { player_id: 324, name: 'Malik Monk', number: '0' },
      { player_id: 328, name: 'Marcus Morris', number: '24' },
      { player_id: 330, name: 'Monte Morris', number: '23' },
      { player_id: 334, name: 'Dejounte Murray', number: '5' },
      { player_id: 335, name: 'Jamal Murray', number: '27' },
      { player_id: 359, name: 'Cedi Osman', number: '16' },
      { player_id: 367, name: 'Chris Paul', number: '3' },
      { player_id: 375, name: 'Michael Porter Jr.', number: '1' },
      { player_id: 377, name: 'Bobby Portis', number: '9' },
      { player_id: 391, name: 'Josh Richardson', number: '0' },
      { player_id: 397, name: 'Duncan Robinson', number: '55' },
      { player_id: 398, name: 'Jerome Robinson', number: '18' },
      { player_id: 403, name: 'Terry Rozier', number: '2' },
      { player_id: 405, name: "D'Angelo Russell", number: '1' },
      { player_id: 406, name: 'Domantas Sabonis', number: '10' },
      { player_id: 407, name: 'Dario Saric', number: '20' },
      { player_id: 414, name: 'Landry Shamet', number: '20' },
      { player_id: 420, name: 'Marcus Smart', number: '36' },
      { player_id: 422, name: 'Ish Smith', number: '14' },
      { player_id: 436, name: 'Garrett Temple', number: '17' },
      { player_id: 443, name: 'Klay Thompson', number: '11' },
      { player_id: 447, name: 'Karl-Anthony Towns', number: '32' },
      { player_id: 457, name: 'Jarred Vanderbilt', number: '2' },
      { player_id: 460, name: 'Nikola Vucevic', number: '9' },
      { player_id: 462, name: 'Moritz Wagner', number: '21' },
      { player_id: 469, name: 'T.J. Warren', number: '24' },
      { player_id: 470, name: 'Yuta Watanabe', number: '18' },
      { player_id: 475, name: 'Andrew Wiggins', number: '22' },
      { player_id: 480, name: 'Kenrich Williams', number: '34' },
      { player_id: 486, name: 'Christian Wood', number: '35' },
      { player_id: 489, name: 'Thaddeus Young', number: '30' },
      { player_id: 490, name: 'Trae Young', number: '11' },
      { player_id: 493, name: 'Ivica Zubac', number: '40' },
      { player_id: 79, name: 'Jimmy Butler', number: '22' },
      { player_id: 108, name: 'Robert Covington', number: '33' },
      { player_id: 128, name: 'Hamidou Diallo', number: '6' },
      { player_id: 167, name: 'Danilo Gallinari', number: '12' },
      { player_id: 184, name: 'Danny Green', number: '14' },
      { player_id: 199, name: 'Shaquille Harrison', number: '0' },
      { player_id: 235, name: 'Justin Jackson', number: '44' },
      { player_id: 260, name: 'Furkan Korkmaz', number: '30' },
      { player_id: 347, name: 'Frank Ntilikina', number: '21' },
      { player_id: 376, name: 'Otto Porter Jr.', number: '32' },
      { player_id: 399, name: 'Mitchell Robinson', number: '23' },
      { player_id: 401, name: 'Derrick Rose', number: '23' },
      { player_id: 417, name: 'Ben Simmons', number: '10' },
      { player_id: 440, name: 'Isaiah Thomas', number: '4' },
      { player_id: 476, name: 'Robert Williams III', number: '35' },
      { player_id: 484, name: 'D.J. Wilson', number: '00' }
  ]);
    const [data, setData] = useState([]);
    const [isChange, setIsChange] = useState(false);
    const [filter, setFilter] = useState('Filter');
  
    useEffect(() => {
      setData([]);
      axios.get(url, {
          headers: {
              Authorization: APIkey
          },
          params: {
              season: 2023,
              player_ids: [...list]
          }
      }).then(response => {
          const list = response.data.data;
          //combine nameId and list based on the player_id
          const result = nameId.map(item => {
              const found = list.find(element => element.player_id === item.player_id);
              return { ...item, ...found };
          });
          setData(result);
      }).catch(error => {
          console.log(error);
      });
  }, []);
    const pts = () => {
      var newData = data.sort((a, b) => b.pts - a.pts)
      setData(newData);
      setIsChange(true);
      console.log('dataChanged');
      setFilter('PTS');
    };
    const reb = ()=>{
      var newData = data.sort((a, b) => b.reb - a.reb)
      setData(newData);
      setIsChange(!isChange);
      console.log('dataChanged');
      setFilter('REB');
    }
    const ast = ()=>{
      var newData = data.sort((a, b) => b.ast - a.ast)
      setData(newData);
      setIsChange(!isChange);
      console.log('dataChanged');
      setFilter('AST');
    }
    const stl = ()=>{
      var newData = data.sort((a, b) => b.stl - a.stl)
      setData(newData);
      setIsChange(!isChange);
      console.log('dataChanged');
      setFilter('STL');
    }
    const blk = ()=>{
      var newData = data.sort((a, b) => b.blk - a.blk)
      setData(newData);
      setIsChange(!isChange);
      console.log('dataChanged');
      setFilter('BLK');
    }
    const goBack = () => {
      navigate("/games");
  };
  return (
    <div>
       {data.length===0 ?   <div id="standingLoading">
       <div>
        <h1 style={{color:'white', marginTop:'70px'}}>Loading</h1>

            <div style={{display:"flex"}}>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
            </div>
        </div>
        </div>
    :
    <div id='stats'>
      <div id="statsTitle">Stats  Leader Current Season</div>
      <div id="statsSelect">
      <Dropdown>
      <Dropdown.Toggle style={{color:'black',backgroundColor:'white'}} variant="Secondary" id="dropdown-basic">
        {filter}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={pts}>PTS</Dropdown.Item>
        <Dropdown.Item onClick={reb}>REB</Dropdown.Item>
        <Dropdown.Item onClick={ast} >AST</Dropdown.Item>
        <Dropdown.Item onClick={stl} >STL</Dropdown.Item>
        <Dropdown.Item onClick={blk} >BLK</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Button onClick={goBack} style={{float:'right',marginRight:'10px',width:'45px'}} variant="secondary"><RollbackOutlined /></Button>{' '}
      </div>
    <StatsBox data={data} isChange={isChange}/>
    </div>
    }
    </div>
  )
}
