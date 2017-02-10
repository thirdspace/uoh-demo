'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessStep3 extends React.Component {
   render() {
      return (

      <section>

      <Header />

      <div className="quiz-window"><h1>steps</h1>

       <ProgressFooter back="/assess-step3" next="/assess-step4" />

      </div>

      </section>

      );
   }
}

