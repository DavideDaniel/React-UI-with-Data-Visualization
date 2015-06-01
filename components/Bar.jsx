// var React = require('React');
// var d3 = require('d3');
// var Rect = require('./Rect.jsx');
//
// function bumpLayer(n, o) {
//
//   function bump(a) {
//     var x = 1 / (.1 + Math.random()),
//         y = 2 * Math.random() - .5,
//         z = 10 / (.1 + Math.random());
//     for (var i = 0; i < n; i++) {
//       var w = (i / n - y) * z;
//       a[i] += x * Math.exp(-w * w);
//     }
//   }
//
//   var a = [], i;
//   for (i = 0; i < n; ++i) a[i] = o + o * Math.random();
//   for (i = 0; i < 5; ++i) bump(a);
//   return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
// }
//
// module.exports = React.createClass({
// getDefaultProps: function() {
// return {
//   data: []
// }
// },
//
// shouldComponentUpdate: function(nextProps) {
//   return this.props.data !== nextProps.data;
// },
//
// render: function() {
// var props = this.props;
// var data = props.data.map(function(d) {
//   return d.y;
// });
// var n = 4, // number of layers
//     m = 58, // number of samples per layer
//     stack = d3.layout.stack(),
//     layers = stack(d3.range(n).map(function() { return bumpLayer(m, .1); })),
//     yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
//     yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });
// // var yScale = d3.scale.linear()
// //   .domain([0, d3.max(data)])
// //   .range([0, this.props.height]);
// var margin = {top: 40, right: 10, bottom: 20, left: 10},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;
//
// var yScale = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .tickFormat(d3.format(".2s"));
//
// // var xScale = d3.scale.ordinal()
// //   .domain(d3.range(this.props.data.length))
// //   .rangeRoundBands([0, this.props.width], 0.05);
// var x = d3.scale.ordinal()
//     .domain(d3.range(m))
//     .rangeRoundBands([0, width], .08);
//
//     var y = d3.scale.linear()
//     .domain([0, yStackMax])
//     .range([height, 0]);
//
//     var color = d3.scale.linear()
//     .domain([0, n - 1])
//     .range(["#aad", "#556"]);
// var xScale = d3.svg.axis()
//     .scale(x)
//     .tickSize(0)
//     .tickPadding(6)
//     .orient("bottom");
//
// var bars = data.map(function(point, i) {
//   var y0 = 0;
//
//   var height = yScale(point),
//       y = props.height - height,
//       width = xScale.rangeBand(),
//       x = xScale(i);
//
//   return (
//     <Rect height={height}
//           width={width}
//           x={x}
//           y={y}
//           key={i} />
//   )
// });
//
// return (
//       <g>{bars}</g>
// );
// }
// });
//
//
