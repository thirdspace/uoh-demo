'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ImportDialogue extends React.Component {
   render() {
      return (
     
      <div className="takeover2">
        <div id="import-window" className="row creator-modal">
          <div className="row">
            <div className="col-sm-3 source-sidebar">
              <span className="source-selection active">
                <img className="img" src="img/icons/inbox-white.png" />
                <p>Shrpas archive</p>
              </span>
              <span className="source-selection">
                <img className="img" src="img/icons/person.png" />
                <p>Manual import</p></span>
              <span className="source-selection">
                <img className="img" src="img/logos/taleo-bug-bw.png" />
                <p>Taleo</p></span>
              <span className="source-selection pdf">
                <i className="fa fa-linkedin-square large" />
                <p>Linkedin</p></span>
              <span className="light add-link">+ Add source</span>
            </div>
            <div className="col-xs-9">
              <div className="row breadcrumb">
                <div className="col-sm-12">
                  <span className="bold">Archive</span> | <span className="soft">Categories</span> <span className="hidden soft hidden-link">| Product Managers</span>
                  <button id="deselect-all" className="btn secondary">Clear</button>
                  <button id="select-all" className="btn secondary">Select all</button>
                </div>
              </div>
              <div className="row body">
                <div className="col-sm-12">
                  <div className="body1">
                    <div className="folder">
                      <span className="folder-icon" />
                      <span>Product Managers</span>
                    </div>
                    <div className="folder">
                      <i className="folder-icon" />
                      <span>iOS Experts</span>
                    </div>
                    <div className="folder">
                      <i className="folder-icon" />
                      <span>10/15 Alexa Hiring</span>
                    </div>
                    <div className="folder">
                      <i className="folder-icon" />
                      <span>Leadership Ideas</span>
                    </div>
                    <div className="folder">
                      <i className="folder-icon" />
                      <span>Jim's picks</span>
                    </div>
                  </div>
                  <div className="body2 hidden">
                    <div className="person fresh">
                      <span className="person-icon female" />
                      <span>Lin Park</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon male" />
                      <span>Virgilio Menendez</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon male" />
                      <span>James Westergard</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon female" />
                      <span>Fletcher Elsworth</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon male" />
                      <span>Teddy Riner</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon male" />
                      <span>Andy Scoggins</span>
                    </div><div className="person fresh">
                      <span className="person-icon male" />
                      <span>Bruce Polasek</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon male" />
                      <span>Marion Erhardt</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon female" />
                      <span>Haley Snell</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon female" />
                      <span>Tawana Maser</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon female" />
                      <span>Selene Oatis</span>
                    </div>
                    <div className="person fresh">
                      <i className="person-icon female" />
                      <span>Leonor Coffer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row footer">
                <div className="col-sm-12">
                  <Link to="/newjd">
                    <button id="close-import" className="progress-btn btn secondary">Cancel</button>
                  </Link>
                   <Link to="/home">
                    <button id="confirm-import-btn" className="progress-btn btn primary disabled">Import</button>
                  </Link>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

      );
   }
}

