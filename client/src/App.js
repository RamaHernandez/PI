import './App.css';
import { Route,BrowserRouter,Switch} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route exact path="/" component={ LandingPage }/>
          <Route path="/home" component={ Home }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
