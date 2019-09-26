const dotenv = require('dotenv').config();

var CONFIG = {
	ZOHO_API_URL:'https://books.zoho.com/api/v3/contacts?organization_id='+process.env.ZOHO_ORGANIZATION_ID,
	ZOHO_AUTHORIZATION_TOKEN: process.env.ZOHO_AUTHORIZATION_TOKEN	
}

module.exports =  CONFIG;