// var React = require('react');
// var Menu = require('./Menu.jsx');
// var CurrentTime = require('./CurrentTime.jsx');
// var AppUptime = require('./AppUptime.jsx');
// var ServerUptime = require('./ServerUptime.jsx');
// var moment = require('moment');
// var Transformer = require('../utils/Transformer');
// var gdpData = require('../utils/data.json');
// var Griddle = require('griddle-react');
// var GraphStack = require('react-d3-components').BarChart;
// var Graph = require('./Graph.jsx');
//
// module.exports = React.createClass({
//   timeTransform : new Transformer(function (date) {
//     return moment(date).format('MM/DD hh:mm:ss a');
//   }),
//
//   render: function() {
//     return (
//       <div className="Page">
//         <nav className="Menu-nav">
//           <Menu items={[
//               'Home', 'Time', 'Chart', 'GraphStack'
//             ]} />
//         </nav>
//         <h2 className="Page-title">{this.props.title}</h2>
//         <div className="Page-body">
//           <span><CurrentTime dateTransform={timeTransform}/></span>
//           <Bio text={this.props.bio} />
//         </div>
//       </div>
//     )
//   }
// });
