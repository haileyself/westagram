import * as React from 'react';
import Main from './Containers/Main';
import GlobalStyle from './global-styles';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/main" exact component={Main} />
        <Redirect from="*" to="/main" />
      </Switch>
    </Router>
  );
};

export default App;
