const Discord = require ("discord.js");
const config = require ("./config.json");
const bot = Discord.client ({disableeveryone: true});

bot.on("ready", async () => {
console.log (`${bot.user.username} is online!`)
bot.user.setactivity("prefix is '<'!", {type: "WATCHING"});
})

bot.login(config.token);
