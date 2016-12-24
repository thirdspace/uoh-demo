'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';


import MyPoolContent from './MyPoolContent.jsx';


export default class Layout extends React.Component {
  render() {
    return (
      <div id="main" className="app-container my-pool overflow-hidden">

        <Header />

        <Sidebar />
        
        <div className="app-content">

        	<MyPoolContent />

        </div>

        <Footer />

      </div>
    );
  }
}
