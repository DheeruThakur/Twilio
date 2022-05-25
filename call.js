//for outgoing phone call
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls.create({
 url : 'http://demo.twilio.com/docs/voice.xml',
 from : process.env.TWILIO_NO,
 to : '+91789xxxx367'
})
.then(message => console.log(message.sid))
.catch(err => console.log(err));