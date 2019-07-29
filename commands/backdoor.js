const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var server = message.guild.id;
 let guild = client.guilds.get(server);
 if (!guild) return message.reply("The bot isn't in the guild with this ID.");
 
 if (message.author.id !== '318822153677963264') return

 let invitechannel = guild.channels.filter(c=> c.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))

 if(!invitechannel) return message.channel.send('No Channels found with permissions to create Invite in!')
 
 invitechannel.random().createInvite()
    .then(invite=> message.author.send('discord.gg/' + invite.code))
    message.delete();
}
    exports.help = {
        name: 'bd'
      };