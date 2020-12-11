const sgMail = require('@sendgrid/mail')

const sendGridAPIKey =  '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'ernest.viol@gmail.com',
        subject: 'Welcome!',
        text: `Welcome to the app ${name}.`
    })
}

const sendCancelationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'ernest.viol@gmail.com',
        subject: 'Goodbye!',
        text: `We're going to miss you ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}