const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client();

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message_create", (message) => {
  console.log(message.body);
  if (message.body === "!ping") {
    client.sendMessage(message.from, "pong");
    message.reply('ahmad faqih dan yosep');
  }
});

client.initialize();
