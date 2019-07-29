const Discord = require('discord.js');
const settings = require('../config.json');
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("This command is for admins only!")
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'purplog');
  if (!logchannel) return message.reply('I cannot find a logs channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
  try {
    user.send(`Hello, you have been banned in *${message.guild.name}* because: **${reason}**! If you think this ban was false, DM Zhun#0420`)
} catch(e){
    message.channel.send(`A user has been banned... but their DMs are locked.`)
}
  if (!message.guild.member(user).bannable) return message.reply(`Oh oh! I cannot ban that member!`);
  message.guild.member(user).ban();

  const embed = new Discord.RichEmbed()
    .setColor('#a07ae4')
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('Banned User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Banned by Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason)
    .setFooter('banned by', message.author.tag, message.author.avatarURL);
    message.channel.send(`:white_check_mark: I\'ve logged the ban in the logs channel.`)
  return client.channels.get(logchannel.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};