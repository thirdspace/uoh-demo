'use strict';

import React from 'react';
import { Link } from 'react-router';
import Subheader from '../Subheader.jsx';

export default class QuestionTableEmpty extends React.Component {
   render() {
      return (
        <section className="jd360-listing-container">

         <div className="jd360-listing question-table drop-down">
            <table className="table table-header activity-table empty">
              <tbody><tr className="listing-header">
                  <td>
                    <span className="jd-position">0 Questions</span>
                    <div className="btn-group">
                    <Link to="add-question">
                      <button><img src="/img/icons/icon-more-info.png" width="20" height="20" /> Add question</button>
                    </Link>
                      <button><i className="glyphicon-trash larger glyphicon" /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="empty-cell"><span className="emtpy-text">Add questions</span></td>
                </tr>



              </tbody></table>
          </div>
        </section>
        );
   }
}


