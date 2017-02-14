'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessmentComplete extends React.Component {
   render() {
      return (

      <div className="applicant-assessment assessment-container drop-down">

      <Header />

          <div className="row assessment-complete">
            <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
              <div className="panel">
                <div className="panel-header">
                  <span className="large-text">Thank you for completing the assessment</span>
                 </div>{/* /panel-header */}
                <hr />
                <div className="panel-body">
                    <span className="option-subheader">We will follow up soon!</span>

                 <p>Please watch your email for updates.</p>
                </div>{/* /panel-body */}
              </div>
            </div>

          <footer className="bottom-nav">
            <div className="row">
              <div className="bottom-nav-left col-xs-1 col-md-3">
              </div>
              <div className="bottom-nav-center col-xs-12 col-md-6 center">
                <Link to="/">
                  <button className="progress-btn btn primary">Close</button>
                </Link>
              </div>
              <div className="bottom-nav-right col-xs-1 col-md-3">
              </div>
            </div>
          </footer>
        </div>

      </div>

      );
   }
}

