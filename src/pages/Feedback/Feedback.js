import React,{useState,useEffect} from 'react'
import './feedback.css';

export default function Feedback(props) {
    const [satisfaction, setSatisfaction] = useState(100);
    const [myFeedback, setMyFeedback] = useState([{name:'Peter',email:'lei23lei@gmail.com',satisfaction:100,'feedback':'That is the NBA website I have been looking for!'}]);
    const {feedback} = props;
    useEffect(() => {
        if(!feedback) return;
    
        // push feedback to myFeedback
        const updatedFeedback = [...myFeedback, feedback];
        setMyFeedback(updatedFeedback);
    
        // calculate the average satisfaction
        let sum = 0;
        updatedFeedback.forEach(e => {
            sum += e.satisfaction;
        });
        setSatisfaction(sum/updatedFeedback.length);
    }, [feedback]);
    

  return (
    <div id="feedback">
        <div id="feedBack title">
        <h1>Feedback</h1>
        <h3>Average satisfaction: {satisfaction}</h3>
        <hr/>
        </div>
        {myFeedback.map((e,index) => ( 
            <ul key={index}>
                <li>name: {e.name}</li>
                <li>email: {e.email}</li>
                <li>satisfaction: {e.satisfaction}</li>
                <li>feedback: {e.feedback}</li>
                <hr/>
            </ul>
        ))}
    </div>
  )
}
