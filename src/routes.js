'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';

import Login from './components/Login.jsx';

import MyPoolLayout from './components/MyPoolLayout';
import ProgressFooter from './components/ProgressFooter.jsx';
import NotFoundPage from './components/NotFoundPage';

import PopulateQuestions from './components/CreateAssess/PopulateQuestions';
import PopulateQuestions2 from './components/CreateAssess/PopulateQuestions2';
import ComponentSelect from './components/CreateAssess/ComponentSelect';
import CreateAssess from './components/CreateAssess/CreateAssess';
import AddQuestion from './components/CreateAssess/AddQuestion';
import Review from './components/CreateAssess/Review';

import AdminSignup from './components/AdminSignup';
import EmptyPool from './components/MyPool/EmptyPool';
import EmptyJobDesc from './components/MyPool/EmptyJobDesc';
import FreshApplicants from './components/MyPool/FreshApplicants';
import FreshApplicants2 from './components/MyPool/FreshApplicants2';
import FreshApplicants3 from './components/MyPool/FreshApplicants3';

import ImportDialogue from './components/MyPool/ImportDialogue';
import SendQualify from './components/MyPool/SendQualify';


import TestingLayout from './components/Testing/TestingLayout';
import AssessStep1 from './components/Testing/AssessStep1';
import AssessStep2 from './components/Testing/AssessStep2';
import AssessStep3 from './components/Testing/AssessStep3';

const routes = (
  <Route path="/" component={Layout}>

    <IndexRoute path="/login" component={Login} />
    
    <Route path="/new-admin" component={AdminSignup} />

    <Route path="/mypool" component={MyPoolLayout}>
        <IndexRoute path="/empty" component={EmptyPool} />
        <Route path="/newjd" component={EmptyJobDesc} />
        <Route path="/import" component={ImportDialogue} />
        <Route path="/home" component={FreshApplicants} />
        <Route path="/mypool2" component={FreshApplicants2} />
        <Route path="/mypool3" component={FreshApplicants3} />
        <Route path="*" component={NotFoundPage}/>
    </Route>

    <Route path="/create-assessment" component={CreateAssess}>
        <IndexRoute path="/component-select" component={ComponentSelect} />
        <Route path="/populate-questions-empty" component={PopulateQuestions} />
        <Route path="/populate-questions" component={PopulateQuestions2} />
        <Route path="/add-question" component={AddQuestion} />
        <Route path="/review" component={Review} />
        <Route path="*" component={NotFoundPage}/>
    </Route>

    <Route path="/applicant-assess" component={TestingLayout}>
        <IndexRoute path="/assess-step1" component={AssessStep1} />
        <Route path="/assess-step2" component={AssessStep2} />
        <Route path="/assess-step3" component={AssessStep3} />

        <Route path="*" component={NotFoundPage}/>
    </Route>

   
    <Route path="*" component={NotFoundPage}/>


  </Route>
);

export default routes;
