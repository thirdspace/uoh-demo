import React from 'react';
import { Link } from 'react-router';


var MyPoolContent = React.createClass({
   render() {
      return (
        <section id="mypool-content">
            <header id="topbar" className="alt">
              <div className="topbar-left">
                  <div className="button-group">
                      <button className="primary-grey icon"><i className="glyphicon glyphicon-search" /></button>
                      <button className="primary-grey"><i className="imoon-free icon-page-break imoon-button" /></button>
                      <button className="primary-grey"><i className="imoon-free icon-user-plus imoon-button " /> Add</button>
                      <button className="primary-grey"><i className="glyphicon-trash larger glyphicon" /> Delete</button>
                      <button className="primary-grey"><i className="imoon-free icon-download imoon-button" /> Archive</button>
                     
                  </div>
              </div>
              <div className="topbar-right">
                  <div className="button-group">
                      <button className="transparent-yellow">Qualify</button>
                      <button className="transparent-blue">Assess</button>
                      <Link>
                          <button id="createJd" className="transparent-white">
                              <img src="img/icons/icon-more-info.png" width="20" height="20" />
                              New
                          </button>
                      </Link>
                  </div>
              </div>
          </header>

          <section id="content-no-jobs" className="my-pool-empty table-layout overflow-hidden">
            <div className="allcp-panels">

              <div className="row">
                <div className="col-xs-12 content-column">
              
                    <div className="notice-box">
                        <p className="empty-message">No Existing Job Descriptions</p>
                        <p>Please create a new job description to get started</p>

                        <div className="btn-group">
                          <Link to="/CreatejdModule" id="new-jd-alt" ref="#" className="btn basic-btn ats-icon">
                          <img src="/img/icons/icon-more-info.png" width="20" height="20" />
                          New JD360</Link>
                        </div>

                    </div>
                </div>
              </div>
            </div>
          </section>

        </section>
      );
   }
});

module.exports = MyPoolContent;
