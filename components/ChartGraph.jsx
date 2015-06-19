var React = require('react');
var Chartist = require('chartist');
var ChartistGraph = require('react-chartist');
var _ = require('underscore');

module.exports = React.createClass({
    convertData: function(){

    },
    componentWillMount: function(){
      console.log("inside comp");
      console.log(this.props.data);
    },

    render: function(){
      var lineChart = {
        labels: _.keys(this.props.data[0]),
        series: []
      };
      console.log(lineChart.labels)

      // var options = {
      // high: 10,
      // low: -10,
      // axisX: {
      //   labelInterpolationFnc: function (value, index) {
      //     return index % 2 === 0 ? value : null;
      //   }
      // }
      // }

      var type = 'Bar'
      _.each(this.props.data, function(item){
        lineChart.series.push(_.values(item));
        // console.log(item)
        });

        return <ChartistGraph data={lineChart} type={this.props.type} />
    }
  });
