'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';


export default class CreateAssess extends React.Component {
   render() {
      return (
        <section>

    	<Header title="New Assessment" />	

        <div className="app-content creator-bg">{this.props.children} </div>

        </section>
      );
   }
}


