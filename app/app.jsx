import React      from 'react';
import ReactDOM   from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import Main       from 'Main';
import Countdown  from 'Countdown';
import Timer      from 'Timer';

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

/* app.css */
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer} />
        </Route>
    </Router>),
  document.getElementById('app')
);
