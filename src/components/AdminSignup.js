'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AdminSignup extends React.Component {
  render() {
    return (

     <div id="content" className="drop-down">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <div className="row panel white-panel">
            <div className="col-xs-12">
              <h2 className="panel-header">Welcome to Assess360</h2>
              <p>Please create an administrator login</p>
            </div>
          </div>
        </div>
        <div className="col-xs-10 col-xs-offset-1">
          <div className="row panel white-panel">
            <div className="col-xs-12">
              <span className="panel-header center">Please create a login</span>
              <div className="row">
                <div className="col-xs-5 center">
                  <img className="img-responsive empty-user-icon" src="img/empty-user.png" />
                  <img className="img-responsive lin-icon" src="img/lin-user.png" />
                  <button id="upload-button" className="text-link">
                    <span className="fa fa-upload" />
                    Upload</button>
                </div>
                <div className="col-xs-5 input-col col-xs-offset-1">
                  <span className="label">Choose username</span>
                  <input type="text" name="Username" id="password" className="gui-input name" placeholder="Username" />
                  <div className="row">
                    <div className="col-xs-6">
                      <span className="label">Create password</span>
                      <input type="password" name="password" id="password" className="gui-input" placeholder="Password" />
                    </div>
                    <div className="col-xs-6">
                      <span className="label">Confirm password</span>
                      <input type="password" name="Confirm password" id="password" className="gui-input" placeholder="ConfirmPassword" />
                    </div>
                  </div>
                  <Link to="/mypool">
                    <button id="create-account" className="progress-btn btn primary">Create Account</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    );
  }
}
