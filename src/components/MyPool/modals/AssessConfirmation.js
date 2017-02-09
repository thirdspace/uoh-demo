'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class AssessConfirmation extends React.Component {
   render() {
      return (
     
         <div id="assess-send-confirmation" className="row">
            <div className="col-xs-12 center">
              <p className="selection-heading">Nice work, you sent an Assessment to 5 recipients.</p>
              <p>Now just wait for them to respond, and details will appear in your MyPool.</p>
            </div>
          </div>
     
      );
   }
}

