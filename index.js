const webshot = require('webshot');

// webshot('http://www.penta-code.com', 'pentacode.png', function(err) {
//     if (!err) {
//     console.log('Screenshot taken!');
//     }
// });

// Mobile screenshot
const optionsMobile = {
    screenSize: {
      width: 414,
      height: 736
    },
    shotSize: {
      width: 500,
      height: 'all'
    }
    //userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
  };
  
  // webshot('http://www.google.com', 'pentacode-mobile.png', optionsMobile, function(err) {
  //   if (!err) {
  //     console.log('Screenshot taken!');
  //   }
  // });

  //=============

  var express = require('express');
  var app = express();
  var fs = require("fs");

  app.get('/:id', function (req, res) {
//        // First read existing users.
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//     var users = JSON.parse( data );
//     var user = users["user" + req.params.id] 
//     console.log( user );
//     res.end( JSON.stringify(user));
//  });
    //=================
    // create the screenshot
    webshot('https://stackoverflow.com', 'pentacode-mobile.png', optionsMobile, function(err) {
      if (!err) {
        console.log('Screenshot taken!');

        res.status(200).json({
            'imageName':'some image',
            'imageUrl':base64_encode('pentacode-mobile.png')
        });

        // //Read file
        // fs.readFile( __dirname + '/' + 'pentacode-mobile.png', 'utf8', function (err, data) {
        //   //var users = JSON.parse( data );
        //   //var user = users["user" + req.params.id] 
        //   //console.log( users );
        //   res.end( data);
        // });
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




// //~~~~~~~~~~~~~~~~~~~

// var express = require('express');
// var app = express();
// var fs = require("fs");

// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        console.log( data );
//        res.end( data );
//    });
// })

// var server = app.listen(8087, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log("Example app listening at http://%s:%s", host, port)

// })