const discord = require("discord.js");
module.exports.run = async (bot, message, args) => { 
    let helpembed = new discord.RichEmbed()
    .setTitle('**Help commands**')
    .setColor('a07ae4')
    .addField('**-botinfo:**',  '**Shows info about the bot.**')
    .addField('**-serverinfo:**', '**shows info about the server.**')
    .addField('**-apply:**', '**if you want to apply for staff member.**')
    .addField('**-weather:**', '**if you want to know the weather in your specified area.**')
    .addField('**report:**', '**if you want to report an user for rulebreaking behavior.**')
    .addField('**userinfo**', '**Shows info about a specified user!**')
    .addField('**-math**', '**able to calculate a question (5*5 = 25)etc.**')
    .addField('**-ip**', '**-ip (ip) shows info about the IP.**')
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp()
    
  message.author.send(helpembed);
  message.delete();
  message.reply('The help commands are in your DMs!')
}
    


module.exports.help = {
    name: "help"
}
