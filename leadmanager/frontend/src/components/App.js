import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import{ HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"

import Header from './layout/Header';

import About from '../pages/About'
import Contact from '../pages/Contact'
import Dashbord from './leads/Dashbord';
import Login from "./accounts/Login"
import Register from "./accounts/Register"
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
			<Router>
			 <Fragment>
			  <Header />
			  <div className="container">
			  <Switch>
			  <Route exact path ="/" component={Dashbord} />
			   <Route exact path ="/register" component={Register} />
			    <Route exact path ="/login" component={Login} />
			    <Route exact path ="/about" component={About}/>
				<Route exact path ="/contact" component={Contact}/>
				</Switch>
			  </div>
			 </Fragment>
			 </Router>
			</Provider>
			);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));