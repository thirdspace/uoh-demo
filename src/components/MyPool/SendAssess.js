'use strict';

import React from 'react';
import { Link } from 'react-router';

import Recipients from './modals/Recipients';
import AssessContents from './modals/AssessContents';

export default class SendAssess extends React.Component {
   render() {
      return (
     
      
      <div id="send-assess" className="row creator-modal">
        <div id="send-assessment-window" className="selection-module col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">
          <span id="send-assess-close" className="close-icon fa fa-times" />
          <span className="selection-lead main-text">
            <span id="text1">Send an Assessment</span>
            <span id="text2">Assessment questions</span>
          </span>
          <a id="modify-button" className="modify-button">Modify</a>
          <button id="create-new-assessment" className="create-new-button">+ New</button>
          <div className="input-group">
            <div className="input-col">
              <select className="soflow select">
                <option value="default">Default Assessment</option>
                <option value="new">[None existing]</option>
              </select>
            </div>
          </div>
          <hr />

          <Recipients />

          <AssessContents />

          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="dialogue-content">
                 <div id="assess-btn-group1" className="btn-group">
                  <button id="close-send-assess" className="progress-btn btn secondary">Cancel</button>
                  <button id="send-assess-button" className="progress-btn btn primary">Send</button>
                </div>

                <div id="assess-btn-group2" className="btn-group">
                  <button id="back-from-questions2" className="progress-btn btn secondary">Back</button>
                  <button id="accept-assess-questions" className="progress-btn btn primary">Okay</button>
                </div>
               
                <div id="assess-btn-group3" className="btn-group">
                  <button id="done-assess" className="progress-btn btn primary">Done</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      );
   }
}

