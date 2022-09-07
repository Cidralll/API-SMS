const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = {
  async sendMessege(req, res) {
    const {message, number} = req.body
    try {
      const result = await client.messages
      .create({
        body: message,
        from: process.env.TWILIO_NUMBER,
        to: `+5547${number}`
      })
  
      res.status(200).json(result)
      console.log('Status: 200 | Message sent');
      
    } catch (error) {
      res.status(400).json(error)
      console.log('Status: 400 | Message was not sent');
      console.log(error)
    }
     
  }
}