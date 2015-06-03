var React = require('react');
var SetIntervalMixin = require('./SetIntervalMixin.jsx');
var moment = require('moment');

module.exports = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState: function () {
    return {
      elapsedTime: 0,
      hours: '',
      mins: '',
      secs: ''
    };
  },
  componentDidMount: function () {
    this.timer = this.setInterval(this.tick, 1000);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  tick: function () {
    var timeNow = moment();
    var diffTimeSec = moment(timeNow.diff(this.props.startTime)).format('mm:ss');
    var timeSec = timeNow.diff(this.props.startTime, 'seconds')
    var timeMin = timeNow.diff(this.props.startTime, 'minutes')
    var timeHrs = timeNow.diff(this.props.startTime, 'hours')
    this.setState({
      elapsedTime: diffTimeSec,
      mins: timeMin,
      secs: timeSec,
      hours: timeHrs
    });
  },
  render: function () {

    return (
      <span className="Timers">
        App uptime: {this.state.elapsedTime}.
      </span>
    );
  }
});
