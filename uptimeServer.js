var WebSocketServer = require("ws").Server;
var moment = require('moment');
var server = new WebSocketServer({
  port: 3000
});

var startDate = new Date();

function serverUptime(startDate, loginTime) {
  var start = moment(startDate);
  var now = moment(loginTime);
  var difference = now.diff(start, 'seconds');
  return difference;
}

server.on("connection", function (ws) {
  var timeNow = new Date();

  function hello(timeSince) {
    var newMessage = {
      type: "time-message",
      payload: {
        from: "Server",
        time: timeNow,
        serverUptime: startDate,
        seconds: timeSince
      }
    };
    console.log(newMessage);
    ws.send(JSON.stringify(newMessage));
  }
  hello(serverUptime(startDate, timeNow));
});
