import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import CategoryDetailsPage from '../pages/CategoryDetailsPage/CategoryDetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import routes from '../routes';
import styled from 'styled-components';


const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Switch>
        <Route exact path={routes.CATEGORY_PAGE} component={CategoryPage} />
        <Route path={routes.CATEGORY_DETAILS_PAGE} component={CategoryDetailsPage} />
        <Route path={routes.HOME_PAGE} component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </AppContainer>
  </BrowserRouter>
);

export default App;


const AppContainer = styled.div`
background-image: ''
max-width: 1200px;
padding-left: 16px;
padding-right: 16px;
margin-left: auto;
margin-right: auto
`
