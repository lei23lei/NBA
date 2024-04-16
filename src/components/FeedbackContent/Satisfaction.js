import React from 'react'

export default function Satisfaction(props) {
    const {satisfaction} = props;
  return (
    <div>
        <h3>Average satisfaction: {satisfaction}</h3>
        <hr/>
    </div>
  )
}
