'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class VideoRecord extends React.Component {
   render() {
      return (

          <div id="video-question">
  
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                  <span className="panel-header">Please record a 1 min video</span>
                  <p>Telling us why you are interested in this position</p>
                  <div className="row">
                    <div className="video-record-placeholder">
                    </div>
                  </div>
                  <div className="row" style={{paddingBottom: 20}}>
                    <a href="#" className="text-link record-button"><span className="glyphicon glyphicon-record" /> Record</a>
                    <span className="time">0:00</span>
                    <a href="#" className="text-link audio-button"><span className="fa fa-microphone" /></a>
                    <a href="#" className="text-link mute-button"><span className="fa fa-microphone-slash" /></a>
                  </div>
                </div>

          </div>


      );
   }
}

