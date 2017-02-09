'use strict';

import React from 'react';
import { Link } from 'react-router';

import AssessDetails from './AssessDetails';
import AssessConfirmation from './AssessConfirmation';

export default class AssessContents extends React.Component {
   render() {
      return (

        <section>
          <div id="AssessDetails">
            <AssessDetails />
          </div>
          
          <div id="AssessConfirmation">
            <AssessConfirmation />
          </div>
        </section>
   );
   }
}