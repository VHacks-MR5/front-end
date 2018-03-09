import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CaptureImage from './CaptureImage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


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

