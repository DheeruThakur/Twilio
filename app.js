//for text sms
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
 body : 'This is a Hello from DHEERU!!!!',
 from : process.env.TWILIO_NO,
 to : '+917017xxxx10'
})
.then(message => console.log(message))
.catch(err => console.log(err));