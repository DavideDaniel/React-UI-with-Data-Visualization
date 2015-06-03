// dependencies
var React = require('react');
var Router = require('react-router');
var moment = require('moment');
var path = require('path');

// components
var Menu = require('./Menu.jsx');
var AppUptime = require('./AppUptime.jsx');
var CurrentTime = require('./CurrentTime.jsx');
var ServerUptime = require('./ServerUptime.jsx');
var StackedBarGraph = require('./StackedBarGraph.jsx');
var Chart = require('griddle-react');

// utils & data
var Transformer = require('../utils/Transformer');
var gdpData = require('../utils/data.json');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
// var { Route, RouteHandler, Link } = Router;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Menu items={[
          < Link to = "homePage" > Home < /Link>, <Link to="chartPage">Chart</Link >, < Link to = "graphPage" > Graph < /Link>
                                  ]}/>
        <RouteHandler/>
      </div>
    );
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Sendence</h3>
      </div>
    );
  }
});

var DataMenu = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
        <div className="selection">
          <ul>
            <li><Link to="chartPage">Chart</Link></li>
            <li><Link to="graphPage">Graph</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

var Chart_Page = React.createClass({
  render: function () {
    return (
      <div id="chart">
        <h3>Chart Page</h3>
        <Chart columns={[
          "Year", "GDP", "Federal outlays", "State outlays"
        ]} results={gdpData} showFilter={true} showSettings={true} tableClassName="table"/>
      </div>
    );
  }
});

var Graph_Page = React.createClass({
  render: function () {
    return (
      <div id="graph">
        <h3>Graph Page</h3>
        <StackedBarGraph dataKeys={[
          'date', 'GDP', 'Federal', 'State'
        ]} file={path.normalize("./results.csv")} title={"GDP, Federal & State outlays"}/>
      </div>
    );
  }
});

var routes = (
    <Route handler={App}>
      <Route handler={Home} name="homePage"></Route>
      <Route handler={DataMenu}>
        <Route handler={Chart_Page} name="chartPage"></Route>
        <Route handler={Graph_Page} name="graphPage"></Route>
      </Route>
    </Route>

);

var timeTransform = new Transformer(function (date) {
  return moment(date).format('MM/DD hh:mm:ss a');
});

var ticker = React.render(<CurrentTime dateTransform={timeTransform}/>, document.getElementById('current-time'));
window.setInterval(function () {
  ticker.setProps({
    date: new Date()
  });
}, 1000);
React.render(<AppUptime startTime={new Date()}/>, document.getElementById('app-time'));
React.render(<ServerUptime />, document.getElementById('server-time'));
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('Routed'));
});
