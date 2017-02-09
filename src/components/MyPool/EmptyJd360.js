'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class EmptyJd360 extends React.Component {
   render() {
      return (
      <section>
        <div className="jd360-listing">
          <table className="table table-header activity-table empty">
            <tbody><tr className="listing-header">
                <td colSpan={4}>
                  <span className="jd-position">Product Manager</span>
                  <span className="jd-maininfo large">Alexa Voice Services</span>
                  <span className="jd-maininfo small">Seattle, WA</span>
                  <span className="jd-maininfo light margin-top-10">Listing #AZ2085</span>
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
              <tr id="mypool-content-row" className="mypool-candidate fresh hidden">
                <td>
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredOne" name="check" />
                    <label htmlFor="squaredOne" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-male-blank.png" />
                  <span className="mypool-candidate-name">
                    Jacob Edison
                  </span>
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
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-word" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr className="mypool-candidate fresh stage0">
                <td>
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredTwo" name="check" />
                    <label htmlFor="squaredTwo" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-female-blank.png" />
                  <span className="mypool-candidate-name">
                    Lin Park
                  </span>
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
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-pdf" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr className="mypool-candidate fresh stage0">
                <td className="applicant-name">
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredTwentyTwo" name="check" />
                    <label htmlFor="squaredTwentyTwo" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-male-blank.png" />
                  <span className="mypool-candidate-name">
                    Virgilio Menendez
                  </span>
                </td>
                <td className="mypool-candidate-relevancy">
                  <div className="relevancy-container rating-4">
                    <span className="bar1 bar" />
                    <span className="bar2 bar" />
                    <span className="bar3 bar" />
                    <span className="bar4 bar" />
                    <span className="bar5 bar" />
                  </div>
                </td>
                <td className="mypool-candidate-applicationdate">
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-word" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr className="mypool-candidate fresh stage0">
                <td className="applicant-name">
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredTwentyThree" name="check" />
                    <label htmlFor="squaredTwentyThree" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-male-blank.png" />
                  <span className="mypool-candidate-name">
                    James Westergard
                  </span>
                </td>
                <td className="mypool-candidate-relevancy">
                  <div className="relevancy-container rating-4">
                    <span className="bar1 bar" />
                    <span className="bar2 bar" />
                    <span className="bar3 bar" />
                    <span className="bar4 bar" />
                    <span className="bar5 bar" />
                  </div>
                </td>
                <td className="mypool-candidate-applicationdate">
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-word" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr className="mypool-candidate fresh stage0">
                <td className="applicant-name">
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredTwenty" name="check" />
                    <label htmlFor="squaredTwenty" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-female-blank.png" />
                  <span className="mypool-candidate-name">
                    Fletcher Elsworth
                  </span>
                </td>
                <td className="mypool-candidate-relevancy">
                  <div className="relevancy-container rating-4">
                    <span className="bar1 bar" />
                    <span className="bar2 bar" />
                    <span className="bar3 bar" />
                    <span className="bar4 bar" />
                    <span className="bar5 bar" />
                  </div>
                </td>
                <td className="mypool-candidate-applicationdate">
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-word" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr className="mypool-candidate fresh stage0">
                <td className="applicant-name">
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredTwentyOne" name="check" />
                    <label htmlFor="squaredTwentyOne" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-female-blank.png" />
                  <span className="mypool-candidate-name">
                    Carin Plump
                  </span>
                </td>
                <td className="mypool-candidate-relevancy">
                  <div className="relevancy-container rating-4">
                    <span className="bar1 bar" />
                    <span className="bar2 bar" />
                    <span className="bar3 bar" />
                    <span className="bar4 bar" />
                    <span className="bar5 bar" />
                  </div>
                </td>
                <td className="mypool-candidate-applicationdate">
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-word" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr className="mypool-candidate fresh stage0">
                <td className="applicant-name">
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredFour" name="check" />
                    <label htmlFor="squaredFour" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-male-blank.png" />
                  <span className="mypool-candidate-name">
                    Andy Scoggins
                  </span>
                </td>
                <td className="mypool-candidate-relevancy">
                  <div className="relevancy-container rating-2">
                    <span className="bar1 bar" />
                    <span className="bar2 bar" />
                    <span className="bar3 bar" />
                    <span className="bar4 bar" />
                    <span className="bar5 bar" />
                  </div>
                </td>
                <td className="mypool-candidate-applicationdate">
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-openoffice" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr className="mypool-candidate fresh stage0">
                <td className="applicant-name">
                  <div className="checkbox-container">
                    <input className="candidate-checkbox" type="checkbox" defaultValue="None" id="squaredFive" name="check" />
                    <label htmlFor="squaredFive" />
                  </div>
                  <img className="person-xsmall online" src="assets/img/icons/user-male-blank.png" />
                  <span className="mypool-candidate-name">
                    Bruce Polasek
                  </span>
                </td>
                <td className="mypool-candidate-relevancy">
                  <div className="relevancy-container rating-1">
                    <span className="bar1 bar" />
                    <span className="bar2 bar" />
                    <span className="bar3 bar" />
                    <span className="bar4 bar" />
                    <span className="bar5 bar" />
                  </div>
                </td>
                <td className="mypool-candidate-applicationdate">
                  4/23/16
                </td>
                <td className="mypool-candidate-lasttouch">
                  4/23/16
                </td>
                <td className="mypool-candidate-originaldoc">
                  <a href="#">
                    <i className="imoon imoon-file-pdf" />
                  </a>
                </td>
                <td className="mypool-candidate-completion">
                  <div className="candidate-completion-bar">
                    <span className="completion-bar-progress">
                      <span className="progress0">
                        <span className="progress-label">NEW</span>
                      </span>
                      <span className="progress33 qualify">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">QUALIFY</span>
                        </span>
                        <a id="candidate1-qualifyInfo-button" className="link" href="#">Qualify</a>
                      </span>
                      <span className="progress33 assess">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">ASSESS</span>
                        </span>
                        <a id="candidate1-assessInfo-button" className="link" href="#">ASSESS</a>
                      </span>
                      <span className="progress33 interview">
                        <span className="qualify-waiting-button">
                          <span className="glyphicon glyphicon-time" />
                          <span className="progress-label">INTERVIEW</span>
                        </span>
                        <a id="candidate1-interviewInfo-button" className="link" href="#">INTERVIEW</a>
                      </span>
                    </span>
                  </div>
                </td>
              </tr> {/* /candidate */}
              <tr id="no-content-row">
                <td colSpan={6} style={{textAlign: 'center'}}>
                  <p className="empty-message">No applicants yet</p>
                  <p>Please upload applicant info from an Excel sheet or upload a resume in Word or .Pdf format.</p>
                  <div className="btn-group">
                    <Link id="import-btn" to="/import" className="btn basic-btn">
                      <span className="fa fa-users" /> 
                      Import
                    </Link>                                
                  </div>
                </td>
              </tr>
            </tbody></table>
        </div>

        </section>
      );
   }
}

