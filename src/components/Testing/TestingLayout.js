'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class TestingLayout extends React.Component {
   render() {
      return (
        <section>

        <div className="app-content creator-bg">{this.props.children} </div>

        </section>
      );
   }
}


