var React = require('react');
var d3 = require('d3');

function createChart(dom, props) {
  var width = props.width;
  var height = props.height;
  var pad = [20, 50, 30, 20];
  var x = d3.scale.ordinal().rangeRoundBands([0, width - pad[1] - pad[3]]);
  var y = d3.scale.linear().range([0, height - pad[0] - pad[2]]);
  var z = d3.scale.ordinal().range(["lightpink", "darkgray", "lightblue"]);
  var parse = d3.time.format("%m/%Y").parse;
  var format = d3.time.format("%y");

  var svg = d3.select(dom).append("svg:svg").attr("width", width).attr("height", height).append("svg:g").attr("transform", "translate(" + pad[3] + "," + (height - pad[2]) + ")");


  d3.csv(props.file, function(err,results){
    if(err){console.error(err);}
  var stacks = d3.layout.stack()([props.dataKeys[1], props.dataKeys[2], props.dataKeys[3]].map(function(stackBar) {
    return results.map(function(d) {
      return {x: parse(d.date), y: +d[stackBar]};
    });
  }));

  x.domain(stacks[0].map(function(d) { return d.x; }));
  y.domain([0, d3.max(stacks[stacks.length - 1], function(d) { return d.y0 + d.y; })]);

  var stackBar = svg.selectAll("g.stackBar")
      .data(stacks)
    .enter().append("svg:g")
      .attr("class", "stackBar")
      .style("fill", function(d, i) { return z(i); })
      .style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });

      var rect = stackBar.selectAll("rect")
      .data(Object)
    .enter().append("svg:rect")
      .attr("x", function(d) { return x(d.x); })
      .attr("y", function(d) { return -y(d.y0) - y(d.y); })
      .attr("height", function(d) { return y(d.y); })
      .attr("width", x.rangeBand());

      var label = svg.selectAll("text")
      .data(x.domain())
    .enter().append("svg:text")
      .attr("x", function(d) { return x(d) + x.rangeBand() / 2; })
      .attr("y", 6)
      .attr("text-anchor", "middle")
      .attr("dy", ".71em")
      .text(format);

      var rule = svg.selectAll("g.rule")
      .data(y.ticks(5))
    .enter().append("svg:g")
      .attr("class", "rule")
      .attr("transform", function(d) { return "translate(0," + -y(d) + ")"; });

  rule.append("svg:line")
      .attr("x2", width - pad[1] - pad[3])
      .style("stroke", function(d) { return d ? "#fff" : "#000"; })
      .style("stroke-opacity", function(d) { return d ? .7 : null; });

  rule.append("svg:text")
      .attr("x", width - pad[1] - pad[3] + 6)
      .attr("dy", ".35em")
      .text(d3.format(",y"));
});
};

module.exports = React.createClass({
  propTypes: {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    title: React.PropTypes.string,
    data: React.PropTypes.array.isRequired,
    dataKeys: React.PropTypes.array,
  },
  getDefaultProps: function() {
    return {
      width: 960,
      height: 500,
      title: '',
      file: '',
      dataKeys: '',
      Legend: true
    };
  },
  render: function () {
    return (
      <div className="StackedBar">
        <h4>{this.props.title}</h4>
              <div className="selection">
                <ul>
                  <li onClick={this.filter}>GDP in $ billions</li>
                  <li onClick={this.byFed}>Total Federal spending in $ billions</li>
                  <li onClick={this.byState}>Total State spending in $ billions</li>
                </ul>
              </div>
      </div>
    );
  },
  componentDidMount: function(){
    var dom = this.getDOMNode();
    createChart(dom,this.props);
  },
  shouldComponentUpdate: function(){
    var dom = this.getDOMNode();
    createChart(dom, this.props);
    return false;
  }
});
