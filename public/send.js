console.log("ghj");


(function() {
  var HOST = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(HOST);
  
  
  var form = document.querySelector('.form');

  form.onsubmit = function() {
    var input = document.querySelector('.input'); 
    var text = input.value;
    ws.send(text);
    input.value = '';
    input.focus();
    return false;
  }
  
  ws.onmessage = function(msg) {
    var response = msg.data;

    console.log(response);
  }
}());

console.log("gazjhebdkazhgvedkazghvedkhgazvekhdgvazjhegdvhj");
