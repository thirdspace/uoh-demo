'use strict';

import React from 'react';

export default class Header extends React.Component {
   render() {
      return (
        <header className="navbar navbar-fixed-top bg-dark">
           <div className="navbar-logo-wrapper dark bg-dark">
               <a className="navbar-logo-image" href="index.html">
                   <img src="/img/logo.png" alt="" className="main-logo" />
               </a>
           </div>
            <h3 className="page-location">MyPool</h3>
           <ul className="nav navbar-nav navbar-right">
               <li className="settings-dropdown dropdown dropdown-fuse">
                       <button className="btn bg-color-1 fs10 dropdown-toggle mln" data-toggle="dropdown">
                           <span className="fa fa-gear fs16"></span>
                       </button>
                   <ul className="dropdown-menu list-group keep-dropdown w190" role="menu">
                       <li className="list-group-item">
                           <a href="#">
                               Profile
                               <span className="fa fa-user"></span>
                           </a>
                       </li>
                       <li className="list-group-item">
                           <a href="#">
                               Settings
                               <span className="fa fa-cog"></span>
                           </a>
                       </li>
                       <li className="divider"></li>
                       <li className="list-group-item">
                           <a href="#">
                               Help
                               <span className="fa fa-question-circle"></span>
                           </a>
                       </li>
                       <li className="list-group-item">
                           <a href="#">
                               Logout
                               <span className="fa fa-sign-out"></span>
                           </a>
                       </li>
                   </ul>
               </li>
           </ul>
           <ul className="nav navbar-nav navbar-right">
               <li className="dropdown dropdown-fuse ml20">
                   <div className="navbar-btn btn-group">
                       <button className="btn dropdown-toggle link">
                           <span className="fa fa-envelope-o fs16"></span>
                       </button>
                       <button className="btn dropdown-toggle bg-color-primary fs10">
                           3
                       </button>
                   </div>
               </li>
               <li className="dropdown dropdown-fuse">
                   <div className="navbar-btn btn-group">
                       <button className="btn dropdown-toggle link">
                           <span className="fa fa-bell-o fs16"></span>
                       </button>
                       <button className="btn dropdown-toggle fs10 bg-color-primary">
                           4
                       </button>
                   </div>
               </li>
           </ul>
        </header>

      );
   }
}

module.exports = Header;
