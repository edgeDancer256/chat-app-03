import { Login, Signup, Chat } from 'components';
import { Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <div className="app">
      <Switch>
        <Chat exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};
