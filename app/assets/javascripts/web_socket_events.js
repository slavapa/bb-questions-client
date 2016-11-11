(function( Common ) {
    //Public Method
    
    Common.generateInterval = function(attempts) {
        var maxInterval;
        maxInterval = (Math.pow(2, attempts) - 1) * 1000;
        if (maxInterval > 30 * 1000) {
          maxInterval = 30 * 1000;
        }
        return Math.random() * maxInterval;
    }; 
    
}( window.Common = window.Common || {}));

(function (Socket) {
  Socket.createWebsocket = function() {
    var attempts = 1;
    var scheme = "ws://";
    //var uri = scheme + window.document.location.host + '/';
    var uri = scheme + "bb-questions.herokuapp.com/"; //"http://bb-questions-slavapa.c9users.io/"
    var ws = new WebSocket(uri);
    
    ws.onopen = function() {
      return attempts = 1;
    };
    
      ws.onmessage = function() {
          console.log(event.data)
      };

    ws.onclose = function() {
      return setTimeout(function() {
        attempts++;
        return Socket.createWebsocket();
      }, window.Common.generateInterval(attempts));
    };
    
    return ws;
  };   
}(window.Socket = window.Socket || {}));
