const Discord = require("discord.js");
const moment = require('moment');
const bot = new Discord.Client
module.exports.run = async (bot, message, args) => {
    var server = message.guild.id;

    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle('even more info')
    .setURL('https://twitter.com/BotZhun')
    .setColor("a07ae4")
    .setThumbnail(boticon)
    .addField('the bot wat created by zhun/clew', 'he made me who i am')
    .addField('you want to know more huh?', 'alright, purp is a moderation / fun bot it has some commands but most of them are utility')
    .addField('why did zhun make this bot?', 'he wanted to make his own bot so he had more control over what the bots did!')
    .setFooter('Made By CLEW/zhun');
 
    message.channel.send(botembed)
}

module.exports.help = {
    name: "info",
    description: "Shows the bot's info."
}