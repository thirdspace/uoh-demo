'use strict';

import React from 'react';
import { Link } from 'react-router';

import ApplicantPreview from '../ApplicantPreview';
import applicants from '../../data/applicants';

export default class FreshApplicants2 extends React.Component {
   render() {
      return (

        <section>

          <div className="jd360-listing">
            <table className="table table-header activity-table empty">
              <tbody><tr className="listing-header">
                  <td colSpan={4}>
                    <span className="jd-position">Product Manager</span>
                    <span id="assessment-count" className="jd-maininfo large">1 Assessments</span>
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

                {applicants.map(applicantData => <ApplicantPreview key={applicantData.id} {...applicantData} />)}

              </tbody></table>
          </div>

        </section>

      );
   }
}
