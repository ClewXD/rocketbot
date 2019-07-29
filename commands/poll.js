const {RichEmbed} = require('discord.js');

exports.run = async (client, message, args, tools) => {

    // Role Verification (Optional)
    if (!message.member.roles.find(r => r.name === 'Owner')) return message.channel.send('This requires the role: Owner');

    // Permission Verification (Optional)
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMINISTRATOR');

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

    const embed = new RichEmbed()
        .setColor('a07ae4')
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by ${message.author.username}`);
    let msg = await message.channel.send({embed});

    await msg.react('✅'); 
    await msg.react('❌');

    message.delete({timeout: 1000}); // This waits 1000 milliseconds before deleting (1 second). You can change it.

}
module.exports.help = {
    name: "poll",
}