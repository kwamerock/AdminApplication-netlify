const sendgrid = require("@sendgrid/mail")

// this will send the email
const sendWelcomeEmail = (email, sender, username) => {
  const message = {
    to: email,
    from: sender,
    templateId: "d-ffed5df7d0be44d0badda84ba8ab883b",
    dynamicTemplateData: {
      subject: "welcome email!",
      username: username,
    },
  }
  sendgrid.send(message)
}

// this is the cloud function
exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body)
  const { email, username } = body
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
  console.log(process.env.SENDGRID_API_KEY)
  try {
    sendWelcomeEmail(email, "noreply@withcanvas.com", username)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: "email sent!" }),
    })
  } catch (error) {
    console.log(error)
    callback(error, {
      statusCode: 400,
      body: JSON.stringify({ message: "error" }),
    })
  }
}
