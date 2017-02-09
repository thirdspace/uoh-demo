'use strict';

import React from 'react';
import { Link } from 'react-router';

import QualifyDetails from './QualifyDetails';
import QualifyConfirmation from './QualifyConfirmation';

export default class QualifyContents extends React.Component {
   render() {
      return (
        <section>
          <div id="QualifyDetails">
            <QualifyDetails />
          </div>
          <div id="QualifyConfirmation">
            <QualifyConfirmation />
          </div>
        </section>
   );
   }
}