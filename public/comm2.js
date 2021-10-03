
// var url = location.origin.replace(/^http/, 'ws');
// var url = "wss://partitur.herokuapp.com/";
// var url = "ws://192.168.0.8:3000";
// var url = "ws://192.168.1.178:3000";
// var url = "ws://192.168.0.100:3000";
// var url = "ws://192.168.0.101:3000";


// var ws = new WebSocket (url);
// console.log ("ws", ws);
// var vid = document.getElementById('vid');
  


(function() {
    var HOST = location.origin.replace(/^http/, 'ws');
    var ws = new WebSocket(HOST);
    
    var form = document.querySelector('.form');
  
  



ws.onmessage = function(msg) {
    var response = msg.data;
    console.log("response "+response);
    var words = response.split(' ');
    var first = words[0];
    var second = parseFloat(words[1]);
    var vid = document.getElementById('vid');




    switch (first) {
      
      case "PLAY":
        setTimeout( function(){vid.play(); console.log("hurrayyyyy");},delay);
       
       
        
        break;

      case "PAUSE":
        vid.pause();
        break;

      case "vdate":
          console.log(second);
        vid.currentTime = second*4;
        break;

      case "dummy":
        console.log("dummy");
        break;

      case "speed":
        vid.playbackRate = second;
        console.log(second);
        break;

      case "STOP":
        vid.pause();
        vid.currentTime = 0;
        break;

      case  "hit":
        var NowClientSide = new Date(ts.now());
        var forsee = parseInt(words[4]);
        console.log("zob");
        console.log(NowClientSide.getTime());
        console.log(NowClientSide.value);
        console.log(typeof forsee);
        console.log(typeof tomate);
        console.log(typeof NowClientSide);
        var difference = (forsee + tomate) - NowClientSide.getTime();
        console.log("NowClientSIde "+ NowClientSide.getTime());
        console.log("forsee "+ forsee);
        console.log("difference "+ difference);
        setTimeout( function() { vid.play(); }, difference)
        break;


        // case  "write":
        //   console.log("receive the write ");
       
        //   document.write("hello world")
        //   break;
          

    }





  };

function refresh(){
    setInterval(function(){send("dummy;")},10000)
}
var client = true;
function send (msg) {
    // console.log ("send", msg);
    ws.send (msg);
    
}


// switch (msg) {
//     case "play": console.log("play"); break;
//     case "stop": console.log("stop"); break;
//     case "pause": console.log("pause"); break;
    
//                  }


  
}());


