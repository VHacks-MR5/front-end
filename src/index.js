import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
//import { BrowserRouter } from 'react-router-dom'
import './styles/index.css';
import Home from './Home';
import Form from './Form'; 
import About from './About';
import SearchUpload from './SearchUpload';
import Upload from './Upload';
import ContactApp from './ContactApp';
import ResultsList from './ResultsList';
import CaptureImage from './CaptureImage';
import WebChatBot from './WebChatBot';
import RoadMap from './RoadMap';
import UserJourney from './UserJourney';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/form" component={Form}/> 
		<Route path="/supload" component={SearchUpload}/>
		<Route path="/upload" component={Upload}/> 
		<Route path="/webbot" component={WebChatBot}/> 
		<Route path="/roadmap" component={RoadMap}/>
		<Route path="/journey" component={UserJourney}/> 

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
// <Route path="/results" component={ResultsList}/>
// <Route path="/contact_app" component={ContactApp}/>

registerServiceWorker();

