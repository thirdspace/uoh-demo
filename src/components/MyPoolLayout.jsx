import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Subheader from './Subheader.jsx';


import SendQualify from './MyPool/SendQualify';
import SendAssess from './MyPool/SendAssess';

var MyPoolLayout= React.createClass({
   render() {
      return (

        <div>

        <section id="qualify_window" className="takeover row">
          <SendQualify />
        </section>

        <section id="assess_window" className="takeover row">
          <SendAssess />
        </section>

        <section id="mypool-content">

            <Header title="MyPool" />

            <Sidebar />

            <header id="topbar" className="alt">
              <div className="topbar-left">
                  <div className="button-group">
                      <Link to="/import">
                        <button id="add-button" className="aqua"><i className="imoon-free icon-user-plus imoon-button " /> Add</button>
                      </Link>
                      <button id="delete-button" className="primary disabled"><i className="glyphicon-trash larger glyphicon" /> Delete</button>
                      <Link>
                          <button id="createJd" className="transparent-white">
                              <img src="img/icons/icon-more-info.png" width="20" height="20" />
                              Target group
                          </button>
                      </Link>
                  </div>
              </div>
              <div className="topbar-right">
                  <div className="button-group">
                        <Link to="/create-assessment">
                          <button id="new-assess-button" className="transparent-yellow">+ Assess</button>
                        </Link>
                      <button id="assess-button" className="transparent-blue">Send Assess</button>
                  </div>
              </div>
          </header>

          <div className="app-content">{this.props.children} </div>

          <Footer />

        </section>

        </div>

      );
   }
});

module.exports = MyPoolLayout;
