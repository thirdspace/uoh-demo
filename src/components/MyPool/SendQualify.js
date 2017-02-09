'use strict';

import React from 'react';
import { Link } from 'react-router';

import Recipients from './modals/Recipients';
import QualifyContents from './modals/QualifyContents';

export default class SendQualify extends React.Component {
   render() {
      return (
     
      <div id="send-qualify" className="row creator-modal">
        <div className="selection-module col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">

          <span id="send-qualify-close" className="close-icon fa fa-times"></span>
          <span className="selection-lead main-text">
            <span id="text1">Send a Qualify</span>
            <span id="text2">Qualify questions</span>
          </span>
          <div className="input-group">
            <div className="input-col">
              <select className="soflow select">
                <option value="default">Default Qualify</option>
                <option value="new">[None existing]</option>
              </select>
            </div>
          </div>
          <hr />

          <Recipients />

          <QualifyContents />

          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="dialogue-content">
                <div id="qualify-btn-group1" className="btn-group">
                  <button id="close-send-qualify" className="progress-btn btn secondary">Cancel</button>
                  <button id="send-qualify-button" className="progress-btn btn primary">Send</button>
                </div>
                <div id="qualify-btn-group2" className="btn-group">
                  <button id="back-from-questions" className="progress-btn btn secondary">Back</button>
                  <button id="accept-qualify-questions" className="progress-btn btn primary">Okay</button>
                </div>
                <div id="qualify-btn-group3" className="btn-group">
                  <button id="done-qualify" className="progress-btn btn primary">Done</button>
                </div>
                </div>
              </div>
            </div>
          </div>

        </div>
     
      );
   }
}

