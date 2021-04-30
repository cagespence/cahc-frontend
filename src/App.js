import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './assets/css/main.scss';
import { RegisterForm } from './features/register/RegisterForm';
import { LoginForm } from './features/login/LoginForm';
import { HostForm } from './features/host/HostForm';
import { JoinForm } from './features/join/JoinForm';
import { selectUser } from './app/slices/userSlice'
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={{
                pathname: "/login",
              }}>login</Link>
            </li>
            <li>
              <Link to={{
                pathname: "/register",
              }}>register</Link>
            </li>
            <li>
              <Link to={{
                pathname: "/host",
              }}>host</Link>
            </li>
          </ul>
        </nav>
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
          <PrivateRoute exact path="/host">
            <HostForm />
            <JoinForm />
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
                pathname: "/host",
              }}
            />
          )
      }
    />
  );
}

export default App;
