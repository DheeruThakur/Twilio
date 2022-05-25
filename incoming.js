//for incoming phone call
const express = require("express");
const VoiceResponse = require("twilio").twiml.VoiceResponse
require("dotenv").config();

const app = express();

app.post('/voice' , (req , res) => {
 const twiml = new VoiceResponse();

 twiml.say('Hello buddy this is thakur speaking');
 res.type('text/xml')

 res.send(twiml.toString())
})
const PORT = process.env.PORT;
app.listen(PORT);