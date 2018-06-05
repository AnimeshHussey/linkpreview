const webshot = require('webshot');
var express = require('express');
var app = express();
var fs = require("fs");

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

})

var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

});

// function to encode file data to base64 encoded string
var base64_encode = function (file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}
