'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import CreatejdModule from './components/CreatejdModule';
import MyPoolContent from './components/MyPoolContent';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={MyPoolContent}/>
    <Route path="/createjd" component={CreatejdModule}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
