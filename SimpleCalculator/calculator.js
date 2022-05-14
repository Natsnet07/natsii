var http = require('http');
var url = require('url');
var fs = require('fs');
var calculatormod = require('./calculatormod');
http.createServer(function (req, res) { 
    var q = url.parse(req.url, true);
    var qdata=q.query;
var filename = "." + q.pathname;
if (q.pathname=="/cal.js")
{
    if(qdata.operation=='add'){
        calculatormod.add(req,res,q.query)
        calculatormod.displays(req,res,q.query)
    }
    else if(qdata.operation=='subtract'){
        calculatormod.subtract(req,res,q.query)
        calculatormod.displays(req,res,q.query)
    }

    else if(qdata.operation=='multiply'){
        calculatormod.multiply(req,res,q.query)
        calculatormod.displays(req,res,q.query)
    }

    else if(qdata.operation=='division'){
        calculatormod.division(req,res,q.query)
        calculatormod.displays(req,res,q.query)
    }
}
 
else
fs.readFile(filename, function(err, data) { if (err) {
res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
res.writeHead(200,{'Content-Type': 'text/css'}); // Content-Type not included 
res.write(data);
return res.end();
  });
}).listen(8080);