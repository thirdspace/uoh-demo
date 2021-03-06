'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';
import VideoRecord from './components/VideoRecord';

export default class VideoQuestion extends React.Component {
   render() {
      return (

       <div className="applicant-assessment assessment-container video-question-container drop-down">

        <Header />

            <div className="row response-row video-response">
              <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">

              <button className="hint-button">
               <span className="fa fa-gears" /> 
               Settings
              </button>

                <div className="panel">
                
                  <div className="panel-body">

                  <VideoRecord />

                  </div>
                </div>
              </div>

          </div>

          <ProgressFooter back="/multiplechoice-question" next="/text-question" />

        </div>


     
      );
   }
}

