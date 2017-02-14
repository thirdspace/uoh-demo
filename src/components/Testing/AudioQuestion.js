'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';
import AudioRecord from './components/AudioRecord';

export default class AudioQuestion extends React.Component {
   render() {
      return (

       <div className="applicant-assessment assessment-container drop-down">

        <Header />

            <div className="row response-row audio-response">
              <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">


                <button className="hint-button">
                 <span className="fa fa-gears" /> 
                  Settings
                </button>

                <div className="panel">
                
                  <div className="panel-body">

                  <AudioRecord />

                  </div>
                </div>
              </div>

          </div>

          <ProgressFooter back="/text-question" next="/code-question" />

        </div>


     
      );
   }
}

