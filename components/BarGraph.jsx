// var React = require('React');
// var d3 = require('d3');
// var Bar = require('./Bar.jsx');
// var BarChart = require('./BarChart.jsx');
//
// var remapObj = function(arr){
//   arr.map(function(obj){var nObj = {x:obj.key, y:obj.value}; return nObj;});
// };
//
// var gdp = [
//   {
//     x: '1962',
//     y: 605.1
//   }, {
//     x: '1982',
//     y: 3345
//   }, {
//     x: '2002',
//     y: 10977.5
//   }, {
//     x: '2012',
//     y: 15601.5
//   }
// ];
//
// var federal = [
// {
//   x: '1962',
//   y: 106.8
// }, {
//   x: '1982',
//   y: 745.7
// }, {
//   x: '2002',
//   y: 2047.2
// }, {
//   x: '2012',
//   y: 3537
// }
// ];
//
// var state = [
// {
// x: '1962',
// y: 0
// }, {
// x: '1982',
// y: 0
// }, {
// x: '2002',
// y: 2047.2
// }, {
// x: '2012',
// y: 3147
// }
// ];
//
// var all = [
// {
// x: '1962',
// y: 605.1
// }, {
// x: '1972',
// y: 1282.4
// }, {
// x: '1982',
// y: 3345
// }, {
// x: '1992',
// y: 6539.3
// }, {
// x: '2002',
// y: 10977.5
// }, {
// x: '2012',
// y: 15601.5
// }, {
// x: '2015',
// y: 17936.1
// }, {
// x: '2020',
// y: 22476.4
// }
// ];
//
// var filtered = [
// {
// x: '1962',
// y: 106.8
// }, {
// x: '1972',
// y: 230.7
// }, {
// x: '1982',
// y: 745.7
// }, {
// x: '1992',
// y: 1381.5
// }, {
// x: '2002',
// y: 2010.9
// }, {
// x: '2012',
// y: 3537.0
// }, {
// x: '2015',
// y: 3758.6
// }, {
// x: '2020',
// y: 4886.4
// }
// ];
//
// module.exports = React.createClass({
//
// getDefaultProps: function () {
// return {
//   width: 800,
//   height: 450
// };
// },
//
// getInitialState: function () {
// return {
//   data: all
// };
// },
//
// showAll: function () {
// this.setState({
//   data: all
// });
// },
//
// filter: function () {
// this.setState({
//   data: gdp
// });
// },
//
// byFed: function () {
// this.setState({
//   data: federal
// });
// },
// byState: function () {
// this.setState({
//   data: state
// });
// },
//
// render: function () {
// return (
//   <div>
//     <div className="selection">
//       <ul>
//         <li onClick={this.filter}>GDP in $ billions</li>
//         <li onClick={this.byFed}>Total Federal spending in $ billions</li>
//         <li onClick={this.byState}>Total State spending in $ billions</li>
//       </ul>
//     </div>
//     <hr/>
//     <BarChart height={this.props.height} width={this.props.width}>
//       <Bar data={this.state.data} height={this.props.height} width={this.props.width}/>
//     </BarChart>
//   </div>
// );
// }
// });
