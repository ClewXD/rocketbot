const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new discord.RichEmbed()
    .setTitle('**Apply**')
    .setColor('a07ae4')
    .addField('Hey! if you want to apply for staff click this link right here! https://bit.ly/31xXeXV','**When you apply DM staff!**')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
  return message.channel.send(serverembed);
}
    


module.exports.help = {
    name: "apply"
}