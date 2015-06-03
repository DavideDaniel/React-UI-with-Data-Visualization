var React = require('react');
var Chartist = require('chartist');
var ChartistGraph = require('react-chartist');

module.exports = React.createClass({
    render: function(){
      var simpleLineChartData = {
        labels: _.keys(this.props.data[0]),
        series: []
      };

      _.each(this.props.data, function(item){
        simpleLineChartData.series.push(_.values(item));
        });
        return <ChartistGraph data={simpleLineChartData} type={'Line'} />
    }
  });
