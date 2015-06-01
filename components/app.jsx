var React = require('react');
var Menu = require('./Menu.jsx');
var CurrentTime = require('./CurrentTime.jsx');
var AppUptime = require('./AppUptime.jsx');
var ServerUptime = require('./ServerUptime.jsx');
var moment = require('moment');
var Transformer = require('../utils/Transformer');

var timeTransform = new Transformer(function (date) {
  return moment(date).format('MM/DD hh:mm:ss a');
});

var ticker = React.render(
<CurrentTime dateTransform={timeTransform}/>,
document.getElementById('current-time')
);

React.render(
  <AppUptime startTime={new Date()}/>,
  document.getElementById('app-time')
);

React.render(
  <ServerUptime />,
  document.getElementById('server-time')
);


React.render(
    <Menu items={ ['Home', 'Time', 'Chart', 'Graph'] } />,
    document.getElementById('menu')
);

window.setInterval(function () {
    ticker.setProps({
    date: new Date()
    });
  },100);
