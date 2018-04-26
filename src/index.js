import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
//import { BrowserRouter } from 'react-router-dom'
import './styles/index.css';
import Home from './Home';
import Form from './Form'; 
import About from './About';
import ResultsList from './ResultsList';
//import Results from './Results';
import CaptureImage from './CaptureImage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/form" component={Form}/>
		<Route path="/results" component={ResultsList}/>
	</Router>
  ), document.getElementById('root'))


// ReactDOM.render() {
//     return (
//       <Router history={createBrowserHistory()}>
//         <Route path='/' component={App}>
//           <IndexRoute component={Home} />
//           <Route path='looking_form' component={LookingForm}></Route>
//         </Route>
//       </Router>
//     );
// }

registerServiceWorker();

