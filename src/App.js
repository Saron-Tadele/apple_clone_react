// import logo from './logo.svg';
import './App.css';
import './components/bootstrap.css';
import Covid from './components/Main/Covid/Covid';
import Info from './components/Main/Info/Info';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Main/Home'
import YoutubeHooks from './components/Youtube/YoutubeHooks';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Iphone from './Pages/Iphone/iphone'
import Mac from './Pages/Mac/Mac'
// import Productpage from './Pages/Productpage/Productpage'
import Four04 from './Pages/Four04/Four04'

function App() {
  return (
    <Router>
    <div>
     <Navbar/>
     <Covid/>
     <Info/>
     <Switch>
     <Route path='/Home' exact component={Home}/>
     <Route path='/Iphone' exact component={Iphone}/>
     <Route path='/Mac' exact component={ Mac}/>
     <Route path='/'  component={Four04}/>
     </Switch>
     {/* <Route path='/Iphone' exact component={Iphone}/> */}
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
