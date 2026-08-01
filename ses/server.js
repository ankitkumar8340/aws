import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import dotenv from "dotenv";
dotenv.config();

console.log("Region : ", process.env.AWS_REGION);

const client = new SESClient({
  region: process.env.AWS_REGION,
  credentials:{
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});


const command = new SendEmailCommand({
  Source: "ankitkumarswe01@gmail.com",
  Destination: {
    ToAddresses: ["trainwithak01@gmail.com"],
  },
  Message: {
    Subject: {
      Data: "Welcome to AWS SES",
    },
    Body: {
      Text: {
        Data: "I am sending this E-mail through AWS SES",
      },
    },
  },
});

try {
  const response = await client.send(command);
  console.log("Email sent:", response.MessageId);
} catch (err) {
  console.error("Error sending email:", err);
}


