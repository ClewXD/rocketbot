const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("This command is for admins only!")
    let serverembed = new discord.RichEmbed()
    .setTitle('**moderator commands**')
    .setColor('a07ae4')
    .addField('**-ban:**',  '**ban a specified user.**')
    .addField('**-lockdown:**', '**lock a specified channel.**')
    .addField('**-mute:**', '**mute a specified user.**')
    .addField('**-unmute:**', '**unmute the muted user.**')
    .addField('**-say:**', '**make the bot say a specified message.**')
    .addField('**-setgame**','**change the bots activity**')
    .addField('**-purge**', '**purge a given amount of messages**')
    .addField('**-bc**', '**makes an invite to the server (like an backdoor.**')
    .addField('**-poll**', '**makes an poll with your question.**')
    .addField('**-ip**', '**shows info about the specified IP.**')
    .setFooter(message.author.tag, message.author.avatarURL)

    .setTimestamp()
message.author.send(serverembed)
message.delete()
message.reply('The Admin commands are in your DMs!');


}
    


module.exports.help = {
    name: "ac"
}
