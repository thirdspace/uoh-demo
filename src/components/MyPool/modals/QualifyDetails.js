'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class QualifyDetails extends React.Component {
   render() {
      return (

        <section>
     
          <div id="send-qualify-details" className="row" style={{minHeight: 250}}>
            <div className="col-xs-12">
              <div className="items-row">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="selection-panel first">
                      <img className="img-responsive" src="img/icons/browser.png" />
                      <span className="option-header">User/pass creation</span>
                      <span className="option-subheader">User creates a Shrpas login</span>
                      <Link id="preview-user-pass" className="preview-btn text-link">Preview</Link>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="selection-panel">
                      <span className="panel-close close-icon octicon octicon-x" />
                      <img className="img-responsive" src="img/icons/resume.png" />
                      <span className="option-header">Resume Verification</span>
                      <span className="option-subheader">Confirm or update resume</span>
                      <Link id="preview-resume" className="preview-btn text-link">Preview</Link>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="selection-panel">
                      <span className="panel-close close-icon octicon octicon-x" />
                      <img className="img-responsive padding-10" src="img/icons/multiple-choice.png" />
                      <span className="option-header">4 Questions</span>
                      <span className="option-subheader">Basic HR Questions</span>
                      <Link id="preview-questions" className="preview-btn text-link">Preview</Link>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="selection-panel last">
                      <span className="panel-close close-icon octicon octicon-x" />
                      <img className="img-responsive" src="img/icons/spider-chart.png" />
                      <span className="option-header">Self Assessment</span>
                      <span className="option-subheader">Applicant defines skills</span>
                      <Link id="preview-self-assess" className="preview-btn text-link">Preview</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          </section>
     
      );
   }
}

