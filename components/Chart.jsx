var React = require('react');
var Chart = require('griddle-react');
// var Chartist = require('chartist');
// var ChartistGraph = require('react-chartist');
// var _ = require('underscore');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Chart columns={[
          "Year", "GDP", "Federal outlays", "State outlays"
        ]} results={this.props.data} showFilter={true} showSettings={true} tableClassName="table"/>
      </div>
    );
  }
});
