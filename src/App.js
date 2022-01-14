import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import NotFound from './NotFound/NotFound';
import Home from './Home/Home';
import CreateAccount from './CreateAnAccount/CreateAnAccount';
import Login from './Login/Login';
import Hotel from './Hotel/Hotel';
import Booking from './Booking/Booking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/hotel">
            <Hotel></Hotel>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/createaccount">
            <CreateAccount></CreateAccount>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
