'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class EmptyPool extends React.Component {
   render() {
      return (
      <section id="content-no-jobs" className="my-pool-empty table-layout overflow-hidden">
        <div className="allcp-panels">

          <div className="row">
            <div className="col-xs-12 content-column">
          
                <div className="notice-box">
                    <p className="empty-message">Create a group to get started</p>
                    <p>Create a grouping of applicants to send assessments to</p>

                    <div className="btn-group">
                      <Link id="newjd360" to="/newgroup" className="btn basic-btn ats-icon">
                      <img src="/img/icons/icon-more-info.png" width="20" height="20" />
                       Target Group</Link>
                    </div>

                </div>
            </div>
          </div>
        </div>
      </section>
      );
   }
}

