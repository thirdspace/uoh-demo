'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AudioRecord extends React.Component {
   render() {
      return (

          <div id="audio-question">
  
            <div className="col-xs-12 col-md-10 col-md-offset-1">

              <span className="panel-header">Please record a 1 min audio clip</span>
              <p>Telling us about your personal interests.</p>
              
              <div className="row audio-record-placeholder">
                
                <div className="col-xs-2 col-sm-3 col-md-2">
                  <a href="#" className="text-link record-button"><span className="glyphicon glyphicon-record" /> Record</a>
                </div>

                <div className="col-xs-8 col-sm-5 col-md-6">
                  <div className="recording-bar">
                    <span className="progress"></span>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-3">
                    <span className="time">0:00</span>
                    <a href="#" className="text-link audio-button"><span className="fa fa-microphone" /></a>
                    <a href="#" className="text-link mute-button"><span className="fa fa-microphone-slash" /></a>
                </div>

              </div>


                    
            </div>

             
          </div>



      );
   }
}

