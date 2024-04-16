import React from 'react';
import Satisfaction from '../../components/FeedbackContent/Satisfaction';
import Content from '../../components/FeedbackContent/Content';
import FeedbackHeader from '../../components/FeedbackContent/FeedbackHeader';
import './feedback.css';

export default function Feedback(props) {
  return (
    <div id="feedback">
      {props.children}
    </div>
  );
}