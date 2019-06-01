const webshot = require('webshot');
var express = require('express');
var app = express();
var fs = require("fs");

//env options
app.set('port', process.env.PORT || 3000);

// screenshot options
const optionsMobile = {
  // screenSize: {
  //   width: 414,
  //   height: 736
  // },
  shotSize: {
    width: 500,
    height: 'all'
  }
  //userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

app.get('/', function(req, res){
  res.send('GET request to the homepage');
  console.log('from fef route');
});

app.get('/thumbnail', function (req, res) {
  // create the screenshot
  webshot(req.query.url, 'output-thumbnail.png', optionsMobile, function (err) {
    if (!err) {
      console.log('screenshot taken!');

      res.status(200).json({
        'id': 'some image',
        'imgEncoded': base64_encode('output-thumbnail.png')
      });
    }
  });

});

// var server = app.listen(process.env.PORT, function () {
//   // var host = server.address().address
//   // var port = process.env.PORT; //server.address().port
//   console.log("Example app listening at http://%s:%s", port)

// });


// function to encode file data to base64 encoded string
var base64_encode = function (file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//========Sample hello world using node===========
// const http = require('http');

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
