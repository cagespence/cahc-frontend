import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/css/main.scss';
import { RegisterForm } from './components/register/RegisterForm';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route path="/">
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
