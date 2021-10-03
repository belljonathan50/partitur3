
// var url = location.origin.replace(/^http/, 'ws');
// var url = "wss://partitur.herokuapp.com/";
// var url = "ws://192.168.0.8:3000";
// var url = "ws://192.168.1.178:3000";

var url = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(url);

// var url = "ws://192.168.0.100:3000";


var ws = new WebSocket (url);
// console.log ("ws", ws);
ws.onmessage = function(msg) { receive (msg.data); };

function refresh(){
    setInterval(function(){send("dummy;")},10000)
}
var client = true;
function send (msg) {
    // console.log ("send", msg);
    ws.send (msg);
}

function receive (data) {
    let n = data.search(';');
    let msg = data.substring(0, n+1);
    console.log ("receive", msg);
    if (client && (msg!="dummy;")) inscore.loadInscore (msg, false);
}
