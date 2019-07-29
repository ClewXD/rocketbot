const Discord = require("discord.js");
const moment = require('moment');
const bot = new Discord.Client
module.exports.run = async (bot, message, args) => {
    var server = message.guild.id;

    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle('Bot Information!')
    .setURL('https://twitter.com/BotZhun')
    .setColor("a07ae4")
    .setThumbnail(boticon)
    .addField('Bot Name', bot.user.username)
    .addField("Bot Create Date",`${moment.utc(bot.user.createdAt).format('dddd, MMMM Do YYYY')}`)
    .addField("Servers", bot.guilds.size)
    .addField('Server ID', server)
    .addField('ah you want even more info? i got you, try -info', "good luck")
    .setFooter('Made By CLEW');
 
    message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo",
    description: "Shows the bot's info."
}