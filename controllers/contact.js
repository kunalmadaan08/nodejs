var request = require('request');
var CONFIG = require('../config');

exports.getContacts = function(req,res,next){
	const options = {
	  method:'GET',
	  url: CONFIG.ZOHO_API_URL,
	  headers: {
	    'Authorization': CONFIG.ZOHO_AUTHORIZATION_TOKEN,
	    'content-type':'application/json'
	  }
	};
	request(options, callback);
	function callback(error, response, body) {
		if(!error && response.statusCode){
			res.status(200).send(body);
		}else{
			console.log(error);
			res.status(400).json('There is some error occured on server side. Please try again later.');
		}
	}
};