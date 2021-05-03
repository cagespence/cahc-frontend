import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './assets/css/main.scss';
import { RegisterForm } from './features/register/RegisterForm';
import { LoginForm } from './features/login/LoginForm';
import { Game } from './features/game/Game';
import { selectUser } from './app/slices/userSlice'
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <UnauthenticatedRoute exact path="/">
            <Redirect to={{
              pathname: "/login"
            }} />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/login">
            <LoginForm />
          </UnauthenticatedRoute>
          <UnauthenticatedRoute exact path="/register">
            <RegisterForm />
          </UnauthenticatedRoute>
          <PrivateRoute path="/game">
            <Game />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  let user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          )
      }
    />
  );
}

function UnauthenticatedRoute({ children, ...rest }) {
  let user = useSelector(selectUser);
  return (
    <Route
      {...rest}
      render={() =>
        !user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/game",
              }}
            />
          )
      }
    />
  );
}

export default App;
