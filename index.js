// for whatsapp messages
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
 body : 'This is a Hello from TWILIO!!!!',
 from : 'whatsapp:process.env.TWILIO_WHATSAPP',
 to : 'whatsapp:+91789xxxx367'
})
.then(message => console.log(message))
.catch(err => console.log(err));