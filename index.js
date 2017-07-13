console.log("Twit time!");


var Twit = require('twit');
var config = require('./config');

var fs= require('fs');


var T = new Twit(config);


tweetYo(); 

function tweetYo(){

	var filePath = 'pics/pic1.jpg';
T.postMediaChunked({ file_path: filePath }, upload);


function  upload(err, data, response) {
  console.log("running..");
  var id=data.media_data_string;	
	var tweet={
		status:'#node  testing once again here with pic',
		media_ids: [id]
	}

	T.post('statuses/update',tweet);
}
}
	
