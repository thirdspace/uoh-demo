'use strict';

import React from 'react';
import { Link } from 'react-router';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

import MyPoolContent from './MyPoolContent.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="main" className="app-container my-pool overflow-hidden">

        <Sidebar />
        
        <div className="app-content">{this.props.children} </div>
      </div>
    );
  }
}
