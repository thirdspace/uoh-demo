'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessmentPublish extends React.Component {
   render() {
      return (

      <div className="applicant-assessment assessment-container drop-down">

      <Header />

          <div className="row publish-assessment-notice">
            <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
              <div className="panel">
                <div className="panel-header">
                <span className="option-header">Save your assessment</span>
          
                 </div>{/* /panel-header */}
                <hr />
                <div className="panel-body">

                  <div className="row">
                    <div className="col-xs-6">
                        <p className="assessment-name large-text">Name your Assessment</p>
                    </div>
                    <div className="col-xs-6">
                      <p className="subtitle">Subtitle (optional)</p>
                    </div>
                  </div>
                  
                  <span className="label">Participants group</span>

                    <select className="soflow">
                      <option value="default">Select</option>
                      <option value="tech">Product Manager</option>
                    </select>
                </div>{/* /panel-body */}
              </div>
            </div>
        </div>
        
        <footer className="bottom-nav">
            <div className="row">
              <div className="bottom-nav-left col-xs-1 col-md-3">
              </div>
              <div id="button-div" className="bottom-nav-center col-xs-12 col-md-6 center">
               <Link to="/audio-question">
                <button id="back-to-login" className="progress-btn btn secondary">Back</button>
              </Link>
              <Link to="/home">
                <button id="begin-assessment" className="progress-btn btn primary">Publish</button>
              </Link>
              </div>
              <div className="bottom-nav-right col-xs-1 col-md-3">
              </div>
            </div>
          </footer>
      </div>

      );
   }
}

