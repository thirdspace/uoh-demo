'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ApplicantPreview extends React.Component {
  render() {
    return (

        <tr className="mypool-candidate fresh stage0">
          <td>
            <Link to={this.props.id}>
              <div className="checkbox-container">
                <input className="candidate-checkbox" type="checkbox" defaultValue="None" id={this.props.name} name="check" />
                <label htmlFor={this.props.name} />
              </div>
              <img className="person-xsmall online" src={this.props.image} />
              <span className="mypool-candidate-name">
                {this.props.name}
              </span>
            </Link>
          </td>
          <td className="mypool-candidate-relevancy">
            <div className="relevancy-container rating-5">
              <span className="bar1 bar" />
              <span className="bar2 bar" />
              <span className="bar3 bar" />
              <span className="bar4 bar" />
              <span className="bar5 bar" />
            </div>
          </td>
          <td className="mypool-candidate-applicationdate">
             {this.props.received}
          </td>
          <td className="mypool-candidate-lasttouch">
            {this.props.lasttouch}
          </td>
          <td className="mypool-candidate-originaldoc">
            <a href="#">
              <i className="imoon imoon-file-pdf" />
            </a>
          </td>
          <td className="mypool-candidate-completion">
            <div id="empty-bar" className="candidate-completion-bar">
              <span className="completion-bar-progress">
                <span className="progress0">
                  <span className="progress-label">NEW</span>
                </span>
              </span>
            </div>

            <div id="full-bar" className="candidate-completion-bar">
              <span className="completion-bar-progress">
                <span className="progress0">
                  <a href="#" className="results">Product Manager</a>
                </span>
              </span>
            </div>
          </td>
        </tr>

    );
  }
}
