import Discord from "discord.js";
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("raw", (packet, id) => {
  console.log("----");
  console.log(JSON.stringify(packet), id);
  console.log("\n");
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login("").catch((err) => {
  console.log(err);
});

// const PROTO_PATH = path.resolve(__dirname, './proto/sample.proto');

// function sayHello(ctx) {
//     ctx.res = { message: 'Hello ' + ctx.req.name };
// }

// function sayHi(ctx) {
//     ctx.res = { message: 'Hi ' + ctx.req.name };
// }

// const app = new Mali(PROTO_PATH, 'Greeter');
// app.use({ sayHello, sayHi });
// app.start('127.0.0.1:50051');
