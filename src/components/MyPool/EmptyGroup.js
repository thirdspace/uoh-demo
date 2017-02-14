'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class EmptyGroup extends React.Component {
   render() {
      return (
      <section className="jd360-listing-container my-pool-nojobs table-layout overflow-hidden">
        <div className="jd360-listing">
        <table className="table table-header activity-table empty">
          <tbody><tr className="listing-header">
             <td colSpan={4}>
                    <span className="jd-position">Product Manager</span>
                    <span id="assessment-count" className="jd-maininfo large">0 Assessments</span>
                    <button id="flow-view-button" className="primary-grey"><i className="imoon-free icon-page-break imoon-button" /></button>
                  </td>
              <td className="action-col" colSpan={2}>
                <ul>
                  <li>
                    <i className="fa fa-ellipsis-v" />
                  </li>
                  <li>
                    <i className="minimize-button glyphicon glyphicon-minus" />
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="mypool-header-filters">
              <td className="filter mypool-candidate-name">
                <span className="filter mypool-applicant-filter">
                  Applicant
                </span>
              </td>
              <td className="filter mypool-candidate-original">
                <span className="fa fa-crosshairs" />
              </td>
              <td className="filter mypool-received-filter">
                <span className="fa fa-caret-down" />
                Received
              </td>
              <td className="filter mypool-lasttouch-filter">
                <span className="fa fa-caret-down" />
                Last touch
              </td>
              <td className="filter mypool-original-filter">
                Original
              </td>
              <td className="filter mypool-status-filter">
                Status
              </td>
            </tr>
            <tr id="no-content-row">
              <td colSpan={6} style={{textAlign: 'center'}}>
                <p className="empty-message">No applicants yet</p>
                <p>Please upload applicant info from an Excel sheet or upload a resume in Word or .Pdf format.</p>
                <div className="btn-group">
                  <Link id="import-btn" to="/import" className="btn basic-btn">
                    <span className="fa fa-users" /> 
                    Import</Link>                                
                </div>
              </td>
            </tr>
          </tbody></table>
      </div>
      </section>
      );
   }
}

