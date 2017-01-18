'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';

import Login from './components/Login.jsx';

import IndexPage from './components/IndexPage';
import MyPoolContent from './components/MyPoolContent';
import ProgressFooter from './components/ProgressFooter.jsx';
import NotFoundPage from './components/NotFoundPage';
import Createjd from './components/Createjd/Createjd';

import CreatejdStep1 from './components/Createjd/CreatejdStep1';
import CreatejdStep2 from './components/Createjd/CreatejdStep2';
import CreatejdStep3 from './components/Createjd/CreatejdStep3';
import CreatejdStep4List from './components/Createjd/CreatejdStep4List';
import CreatejdStep4Preview from './components/Createjd/CreatejdStep4Preview';
import CreatejdStep5 from './components/Createjd/CreatejdStep5';

const routes = (
  <Route path="/" component={Layout}>

    <IndexRoute path="/login" component={Login} />

    <Route path="/mypool" component={MyPoolContent} />

    <Route path="/createjd" component={Createjd}>
        <IndexRoute path="/createjd-step1" component={CreatejdStep1} />
        <Route path="/createjd-step2" component={CreatejdStep2} back="/createjd-step1" next="/createjd-step3" />
        <Route path="/createjd-step3" component={CreatejdStep3} back="/createjd-step2" next="/createjd-step4-list" />
        <Route path="/createjd-step4-list" component={CreatejdStep4List} back="/createjd-step3" next="/createjd-step5" />
        <Route path="/createjd-step4-preview" component={CreatejdStep4Preview} />
        <Route path="/createjd-step5" component={CreatejdStep5} />
        <Route path="*" component={NotFoundPage}/>
    </Route>
   
    <Route path="*" component={NotFoundPage}/>


  </Route>
);

export default routes;
