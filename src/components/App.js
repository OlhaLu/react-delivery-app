import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import CategoryDetailsPage from '../pages/CategoryDetailsPage/CategoryDetailsPage';
import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path={routes.CATEGORY_PAGE} component={CategoryPage} />
        <Route path={routes.CATEGORY_DETAILS_PAGE} component={CategoryDetailsPage} />
        <Redirect to={routes.CATEGORY_PAGE} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
