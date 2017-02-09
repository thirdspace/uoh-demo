'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AssessDetails extends React.Component {
   render() {
      return (
     
      <div id="send-assess-details" className="row" style={{minHeight: 250}}>
        <div className="col-xs-12">  
          <div className="items-row">
            <div className="row">
              <div className="col-sm-4 col ">
                <div className="selection-panel first">
                  <span className="panel-close close-icon octicon octicon-x" />
                  <img className="img-responsive padding-10" src="img/icons/multiple-choice.png" />
                  <span className="option-header">12 Questions</span>
                  <span className="option-subheader">Product Manager Skill Assessment</span>
                  <a id="preview-questions" className="preview-btn text-link" href="#">Preview</a>
                </div>
              </div>

              <div className="col-sm-4 col">
                <div className="selection-panel">
                  <span className="panel-close close-icon octicon octicon-x" />
                  <img className="img-responsive long-answer-icon" src="img/icons/text-input.png" />
                  <span className="option-header">Long Answer</span>
                  <span className="option-subheader">Explain a challenge in a recent project</span>
                  <a id="preview-self-assess" className="preview-btn text-link" href="#">Preview</a>
                </div>
              </div>
              
              <div className="col-sm-4 col">
                <div className="selection-panel last">
                  <span className="panel-close close-icon octicon octicon-x" />
                  <img className="img-responsive" src="img/icons/video-file.png" />
                  <span className="option-header">Video Response</span>
                  <span className="option-subheader">Why are you interested in this job?</span>
                  <a id="preview-resume" className="preview-btn text-link" href="#">Preview</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      );
   }
}

