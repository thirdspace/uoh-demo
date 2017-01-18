'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';


export default class Createjd extends React.Component {
   render() {
      return (
        <section>

        <div className="app-content">{this.props.children} </div>

        </section>
      );
   }
}


