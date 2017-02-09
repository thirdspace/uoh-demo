'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class QualifyConfirmation extends React.Component {
   render() {
      return (
     
         <div id="qualify-send-confirmation" className="row">
            <div className="col-xs-12 center">
              <p className="selection-heading">Nice work, you sent a qualification to 5 recipients.</p>
              <p>Now just wait for them to respond, and details will appear in your MyPool.</p>
            </div>
          </div>
     
      );
   }
}

