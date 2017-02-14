'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';
import VideoRecord from './components/VideoRecord';

export default class CodeQuestion extends React.Component {
   render() {
      return (

       <div className="applicant-assessment assessment-container video-question-container drop-down">

        <Header />

           

          <ProgressFooter back="/audio-question" next="/assessment-complete" />

        </div>


     
      );
   }
}

