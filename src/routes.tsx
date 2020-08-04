import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/study" component={TeacherList} />
      <Route exat path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
