'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';

import Login from './components/Login.jsx';

import IndexPage from './components/IndexPage';
import MyPoolLayout from './components/MyPoolLayout';
import ProgressFooter from './components/ProgressFooter.jsx';
import NotFoundPage from './components/NotFoundPage';
import Createjd from './components/Createjd/Createjd';

import CreatejdStep1 from './components/Createjd/CreatejdStep1';
import CreatejdStep2 from './components/Createjd/CreatejdStep2';
import CreatejdStep3 from './components/Createjd/CreatejdStep3';
import CreatejdStep4 from './components/Createjd/CreatejdStep4';
import CreatejdStep4List from './components/Createjd/CreatejdStep4List';
import CreatejdStep4Preview from './components/Createjd/CreatejdStep4Preview';
import CreatejdStep5 from './components/Createjd/CreatejdStep5';
import Publishjd from './components/Createjd/Publishjd';

import EmptyMessage from './components/MyPool/EmptyMessage';



const routes = (
  <Route path="/" component={Layout}>

    <IndexRoute path="/login" component={Login} />

    <Route path="/mypool" component={MyPoolLayout}>
        <IndexRoute path="/empty" component={EmptyMessage} />

        <Route path="*" component={NotFoundPage}/>
    </Route>

    <Route path="/createjd" component={Createjd}>
        <IndexRoute path="/createjd-step1" component={CreatejdStep1} />
        <Route path="/createjd-step2" component={CreatejdStep2} />
        <Route path="/createjd-step3" component={CreatejdStep3} />
        <Route path="/createjd-step4" component={CreatejdStep4}>
            <IndexRoute path="/list-view" component={CreatejdStep4List} />
            <Route path="/preview-view" component={CreatejdStep4Preview} />
           
            <Route path="*" component={NotFoundPage}/>
        </Route>
        <Route path="/createjd-step5" component={CreatejdStep5} next="/publish" back="/createjd-step4-preview" />
        <Route path="/publish-jd" component={Publishjd} />

        <Route path="*" component={NotFoundPage}/>
    </Route>
   
    <Route path="*" component={NotFoundPage}/>


  </Route>
);

export default routes;
