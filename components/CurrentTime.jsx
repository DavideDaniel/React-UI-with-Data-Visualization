var React = require('react');
var moment = require('moment');
var Transformer = require('../utils/Transformer');
var SetIntervalMixin = require('./SetIntervalMixin.jsx');

module.exports = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date(),
      dateTransform: new Transformer()
    }
  },
  getTime: function () {
    return this.props.dateTransform.getTransformedValue(this.props.date);
  },
  render: function () {
    return (
      <span className="Timers">{this.getTime()}</span>
    );
  }
});
