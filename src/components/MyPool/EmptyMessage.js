'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class EmptyMessage extends React.Component {
   render() {
      return (
      <section id="content-no-jobs" className="my-pool-empty table-layout overflow-hidden">
        <div className="allcp-panels">

          <div className="row">
            <div className="col-xs-12 content-column">
          
                <div className="notice-box">
                    <p className="empty-message">No Existing Job Descriptions</p>
                    <p>Please create a new job description to get started</p>

                    <div className="btn-group">
                      <Link to="/createjd" className="btn basic-btn ats-icon">
                      <img src="/img/icons/icon-more-info.png" width="20" height="20" />
                      New JD360</Link>
                    </div>

                </div>
            </div>
          </div>
        </div>
      </section>
      );
   }
}

