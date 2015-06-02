var React = require('react');
var moment = require('moment');
var ws = new WebSocket("ws://localhost:3000");

module.exports = React.createClass({
  getInitialState: function() {
    return {serverUptime: '',
    loggedInTime: '',
    seconds: 0,
    };
  },
  componentDidMount: function() {
    this.getServerUptime();
  },
  handleConnect: function(message){
    var msgObj = JSON.parse(message.data);
    console.log(msgObj);
    if(msgObj.type ==='data-message'){
      console.log(msgObj.payload.data);
    }
    else if(msgObj.type === 'time-message'){
    var serverTotalTime = msgObj.payload.serverUptime;
    this.setState({serverUptime: serverTotalTime, seconds: msgObj.payload.seconds, loggedInTime: msgObj.payload.time});
    ws.send(message);}
  },
  getServerUptime: function(){
    ws.addEventListener('message', this.handleConnect);
  },
  render: function() {
    var serverUptime = moment(this.state.serverUptime).format('MM/DD hh:mm:ss a');
    return (
      <p>
        Server has been running since {serverUptime}.
      </p>
    );
  }
});
