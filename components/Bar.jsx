var React = require('React');
var d3 = require('d3');
var Rect = require('./Rect.jsx');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      data: []
    };
  },

  shouldComponentUpdate: function(nextProps) {
      return this.props.data !== nextProps.data;
  },

  render: function() {
    var props = this.props;
    var data = props.data.map(function(d) {
      return d.y;
    });

    var yScale = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);
        var colors = ['#447FD3', '#CB3837'];
    var bars = data.map(function(point, i) {
      var height = yScale(point),
          y = props.height - height,
          width = xScale.rangeBand(),
          x = xScale(i);

      return (
        <Rect height={height}
              width={width}
              x={x}
              y={y}
              key={i} />
      )
    });

    return (
          <g>{bars}</g>
    );
  }
});
