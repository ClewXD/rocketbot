const {RichEmbed} = require('discord.js'); 

exports.run = async (client, message, args) => {

    let embed = new RichEmbed() 
        .setColor('a07ae4')
        .setDescription(`Loading...`)
        .setTimestamp()
    message.channel.send({embed}).then(message => {
        embed.setColor('a07ae4')
        embed.setDescription(`Here is the bots ping! **\`${client.pings[0]}ms\`**`)
        embed.setFooter(`Command ran by ${message.author.username}`, message.author.avavtarURL)
        embed.setTimestamp()
        message.edit({embed})
    })

} 
module.exports.help = {
    name: 'ping',
  }