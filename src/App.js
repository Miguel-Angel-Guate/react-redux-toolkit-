
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Films from './components/Films';
import UsersOtherWayList from './components/UsersOtherWayList';
import FilmsOtherWay from './components/FilmsOtherWay';


function App() {
  
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path="/" exact component={UserList} />
      <Route path="/userother" exact component={UsersOtherWayList} />
      <Route path="/films" exact component={Films}/>
      <Route path="/filmsOther" exact component={FilmsOtherWay}  />
      <Route path="*">not found</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
