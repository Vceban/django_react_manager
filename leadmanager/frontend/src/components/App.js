import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import{ HashRouter as Router, Route, Switch, Redirect} from "react-router-dom"

import Header from './layout/Header';

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
			   <Route exact path ="/" component={Register} />
			    <Route exact path ="/" component={Login} />
				
				</Switch>
			  </div>
			 </Fragment>
			 </Router>
			</Provider>
			);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));