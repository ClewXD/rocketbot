const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("This command is for admins only!")
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'purplog');
  if (!logchannel) return message.reply('I cannot find a logs channel');
  if (reason.length < 1) return message.reply('`You must supply a reason for the kick.`');
  if (message.mentions.users.size < 1) return message.reply('`You must mention someone to kick them.`').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick();

  try {
    user.send(`Hello, you have been Kicked in *${message.guild.name}* because: **${reason}**!  If you think this kick was false, DM Zhun#0420`)
} catch(error){
    message.channel.send(`A user has been kicked... but their DMs are locked.`)
}


  const embed = new Discord.RichEmbed()
  .setColor('a07ae4')
    .setTimestamp()
    .addField('Action:', 'Kick')
    .addField('Kicked User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Kicked by Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  message.channel.send(':white_check_mark: I\'ve logged the kick in <#293573342999609345>.')
  return client.channels.get(logchannel.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
