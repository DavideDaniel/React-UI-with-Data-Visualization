var React = require('react');
var Menu = require('./Menu.jsx');
var CurrentTime = require('./CurrentTime.jsx');
var AppUptime = require('./AppUptime.jsx');
var ServerUptime = require('./ServerUptime.jsx');
var moment = require('moment');
var Transformer = require('../utils/Transformer');
var gdpData = require('../utils/data.json');
var Chart = require('griddle-react');
var Bar = require('./Bar.jsx');
var Rect = require('./Rect.jsx');
var Axis = require('./Axis.jsx');
var BarChart = require('./BarChart.jsx');
var BarGraph = require('./BarGraph.jsx');
var StackedBarGraph = require('./StackedBarGraph.jsx');
var path = require('path');
var timeTransform = new Transformer(function (date) {
  return moment(date).format('MM/DD hh:mm:ss a');
});

var ticker = React.render(<CurrentTime dateTransform={timeTransform}/>, document.getElementById('current-time'));

React.render(<AppUptime startTime={new Date()}/>, document.getElementById('app-time'));

React.render(<ServerUptime />, document.getElementById('server-time'));

React.render(<Menu items={[
    'Home', 'Time', 'Chart', 'Graph'
  ]}/>, document.getElementById('menu'));

React.render(<Chart columns={[
    "Year", "GDP", "Federal outlays", "State outlays"
  ]} results={gdpData} showFilter={true} showSettings={true} tableClassName="table"/>, document.getElementById("chart"));

  React.render(
      <StackedBarGraph file={path.normalize("./results.csv")} dataKeys={['date','GDP','Federal','State']}/> ,
      document.getElementById('bar-graph')
  );

  window.setInterval(function () {
    ticker.setProps({
      date: new Date()
    });
  }, 1000);

// fData = [
//   {
//     label: 'GDP',
//     values: [
//       {
//         x: '1962',
//         y: 605.1
//       }, {
//         x: '1982',
//         y: 3345
//       }, {
//         x: '2002',
//         y: 10977.5
//       }, {
//         x: '2012',
//         y: 15601.5
//       }
//     ]
//   }, {
//     label: 'Federal',
//     values: [
//       {
//         x: '1962',
//         y: 106.8
//       }, {
//         x: '1982',
//         y: 745.7
//       }, {
//         x: '2002',
//         y: 2047.2
//       }
//       , {
//         x: '2012',
//         y: 3537
//       }
//     ]
//   }, {
//     label: 'State/Local',
//     values: [
//       {
//         x: '1962',
//         y: 0
//       }, {
//         x: '1982',
//         y: 0
//       }, {
//         x: '2002',
//         y: 2047.2
//       },
//       {
//         x:'2012',
//         y: '3147'
//       }
//     ]
//   }
// ];

// React.render(
//     <BarGraph /> ,
//     document.getElementById('bar-graph')
// );


// React.render(<GraphStack data={fData} height={400} margin={{top: 10, bottom: 50, left: 50, right: 10}} width={400}/>, document.getElementById('graphStack'));
// React.render(<Graph />, document.getElementById('graph'));

// var frdata = [
//     {name: "1962", count: 10},
//     {name: "1963", count: 20},
//     {name: "1964", count: 5},
//     {name: "1965", count: 42},
//     {name: "1966", count: 29}
// ];
// var frdata = [
//   {
//     name: "605.1",
//     count: "106.8"
//   }
// ];

// var gdpArray = [];
// var fedsArray = [];
// var statesArray = [];
// var logProp = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }
// function gmapper(obj, array) {
//   for (prop in obj) {
//     if (prop === 'GDP - $ billion') {
//       array.push({
//         name: prop,
//         count: obj[prop]
//       });
//     }
//     logProp(array)
//   }
// }
// gmapper(frdata, gdpArray);
// fmapper(frdata, fedsArray);
// function fmapper(obj, array) {
//   for (prop in obj) {
//     if (prop === 'Total federal outlays - $ billion') {
//       array.push({
//         name: prop,
//         count: obj[prop]
//       });
//
//     }
//     logProp(array)
//   }
// };
// function smapper(obj, array) {
//   for (prop in obj) {
//     if (prop === 'GDP - $ billion') {
//       array.push({
//         name: prop,
//         count: obj[prop]
//       });
//     }
//   }
// };
//
// React.render(<Graph data={frdata} title="Sample Fruits"/>, document.getElementById('graph'));
