// Generated by CoffeeScript 1.6.1
(function() {

  exports.Server = (function() {

    function Server() {
      var args;
      this.express = require("express");
      args = require("optimist").usage("Pass port as -p (to use port 80 you need to sudo)")["default"]("p", "6655").alias("d", "debug").alias("p", "port").argv;
      this.debug = args.d;
      this.port = args.p;
    }

    Server.prototype.start = function(port) {
      var app;
      if (port == null) {
        port = false;
      }
      app = this.express();
      app.use(this.express["static"]("" + __dirname + "/../public"));
      app.listen(port || (port = this.port));
      return console.log("Server running. Go to http://localhost:" + port);
    };

    return Server;

  })();

}).call(this);
