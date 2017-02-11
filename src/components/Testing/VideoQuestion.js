'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class VideoQuestion extends React.Component {
   render() {
      return (

       <div className="applicant-assessment assessment-container drop-down">

        <Header />

            <div className="row response-row video-response">
              <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">

                <div className="panel">
                
                  <div className="panel-body">

                  <div id="video-question">
  
                      <div className="col-xs-12 col-md-8 col-md-offset-2">
                        <span className="panel-header">Please record a 1 min video</span>
                        <p>Telling us why you are interested in this position</p>
                        <div className="row">
                          <div className="video-record-placeholder"><a href="#" className="text-link"><span className="fa fa-gears" /> Settings</a>
                          </div>
                        </div>
                        <div className="row" style={{paddingBottom: 20}}>
                          <a href="#" className="text-link record-button"><span className="glyphicon glyphicon-record" /> Record</a>
                          <span className="time">0:00</span>
                          <a href="#" className="text-link audio-button"><span className="fa fa-microphone" /></a>
                        </div>
                      </div>

                </div>

                  </div>
                </div>
              </div>

          </div>

          <ProgressFooter back="/multiplechoice-question" next="/assess-step4" />

        </div>


     
      );
   }
}

