var React = require('react');
var Router = require('react-router');
var App = require('./App.jsx');
var AppUptime = require('./AppUptime.jsx');
var CurrentTime = require('./CurrentTime.jsx');
var Menu = require('./Menu.jsx');
var ServerUptime = require('./ServerUptime.jsx');

var { Route, RouteHandler, Link } = Router;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <ol>
          <li><Link to="timerNow">Timers</Link></li>
          <li><Link to="chartPage">Chart</Link></li>
        </ol>
        <RouteHandler/>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <h3>Welcome home!</h3>
    );
  }
});


var ChartMenu = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Chart Menu</h2>
        <RouteHandler/>
      </div>
    );
  }
});

var Chart_Page = React.createClass({
  render: function () {
    return (
      <div id="chart">
      <h3>Chart Page</h3>
      </div>
    );
  }
});

var TimerMenu = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Signed Out</h2>
        <RouteHandler/>
      </div>
    );
  }
});

var Timer_Now = React.createClass({
  render: function () {
    return (
      <div>
      <h3>Current Time</h3>
      <div id="current-time"></div>
      </div>
    );
  }
});

var Timer_Uptime = React.createClass({
  render: function () {
    return (
      <h3>Uptimes</h3>
    );
  }
});

var routes = (
  <Route handler={App}>
    <Route handler={TimerMenu}>
      <Route name="timerNow" handler={Timer_Now}></Route>
      <Route name="uptimePage" handler={Timer_Uptime}></Route>
    </Route>
    <Route handler={ChartMenu}>
      <Route name="chartPage" handler={Chart_Page}></Route>
    </Route>
  </Route>

);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
