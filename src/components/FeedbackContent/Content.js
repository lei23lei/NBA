import React from 'react'

export default function Content(props) {
    const {myFeedback} = props;
  return (
    <>
            {myFeedback.map((e,index) => ( 
            <ul key={index}>
                <li>name: {e.name}</li>
                <li>email: {e.email}</li>
                <li>satisfaction: {e.satisfaction}</li>
                <li>feedback: {e.feedback}</li>
                <hr/>
            </ul>
        ))}
    </>
  )
}
