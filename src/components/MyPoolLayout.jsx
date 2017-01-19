import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer.jsx';
import Header from './Header.jsx';

var MyPoolLayout= React.createClass({
   render() {
      return (
        <section id="mypool-content">

            <Header title="MyPool" />

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

          <div className="app-content">{this.props.children} </div>

            <Footer />

        </section>

      );
   }
});

module.exports = MyPoolLayout;