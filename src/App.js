import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Forum from './pages/Forum';

function App() {
	return (
		<div className="App">
            <Router>
                <Navbar />
                <Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/forum" component={Forum} />
                </Switch>
            </Router>
        </div>
	);
}

export default App;