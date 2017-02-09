'use strict';

import React from 'react';
import { Link } from 'react-router';
import Footer from './Footer.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div id="main" className="app-container my-pool overflow-hidden">
        
        <div className="app-content">{this.props.children} </div>

      </div>


    );
  }
}
