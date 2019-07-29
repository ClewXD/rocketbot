const {RichEmbed} = require('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {
    let reminderTime = args[0]; 
    if (!reminderTime) {
        let embed = new RichEmbed() 
            .setTitle('Proper Usage') 
            .setDescription(`\`<prefix>remindme 15min any text or code\``)
        return message.channel.send({embed}) 
    }

    var announcer = message.author;
    let reminder = args.slice(1).join(" "); 

    let embed = new RichEmbed() 


    .setColor('#a07ae4')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField('Reminder', `\`\`\`${reminder}\`\`\``) 
        .addField('Time', `\`\`\`${reminderTime}\`\`\``) 
        .setTimestamp()
    message.channel.send({embed})
    message.delete()
    setTimeout(function() {
        let embed = new RichEmbed()
        .setColor('#a07ae4')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField('Reminder', `\`\`\`${reminder}\`\`\``)
            .setTimestamp()
            message.channel.send({embed});
    }, ms(reminderTime));
    message.delete(10000);

}
module.exports.help = {
    name : "remind"
  }