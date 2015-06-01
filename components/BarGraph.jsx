// var React = require('React');
// var d3 = require('d3');
// var Bar = require('./Bar.jsx');
// var BarChart = require('./BarChart.jsx');
// var all = [
// {x: '1962', y: 605.1},
// {x: '1972', y: 1282.4},
// {x: '1982', y: 3345},
// {x: '1992', y: 6539.3},
// {x: '2002', y: 10977.5},
// {x: '2012', y: 15601.5},
// {x: '2015', y: 17936.1},
// {x: '2020', y: 22476.4}
// ];
//
// var filtered = [
// {x: '1962', y: 106.8},
// {x: '1972', y: 230.7},
// {x: '1982', y: 745.7},
// {x: '1992', y: 1381.5},
// {x: '2002', y: 2010.9},
// {x: '2012', y: 3537.0},
// {x: '2015', y: 3758.6},
// {x: '2020', y: 4886.4}
// ];
//
//
// module.exports  = React.createClass({
//
// getDefaultProps: function() {
//     return {
//       width: 500,
//       height: 500
//     }
// },
//
// getInitialState: function() {
//     return {
//       data: all
//     }
// },
//
// showAll: function() {
//   this.setState({data : all})
// },
//
// filter: function() {
//   this.setState({data: filtered});
// },
//
// byYear: function(year){
//   this.setState({data: year})
// },
//
// render: function() {
//     return (
//       <div>
//         <div className="selection">
//           <ul>
//             <li onClick={this.showAll}>GDP in $ billions</li>
//             <li onClick={this.filter}>Total Federal spending in $ billions</li>
//           </ul>
//         </div>
//         <hr/>
//         <BarChart width={this.props.width}
//                height={this.props.height}>
//           <Bar data={this.state.data}
//                       width={this.props.width}
//                       height={this.props.height} />
//                   </BarChart>
//       </div>
//     );
// }
// });
