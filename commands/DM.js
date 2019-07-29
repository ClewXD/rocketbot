
    const Discord = require("discord.js");
  
    module.exports.run = async (bot, message, args) => {
        message.delete();
    const user = message.mentions.users.first();
    if (user) {

        const member = message.guild.member(user);
        if (member) {

            // Text
            var text = message.content.split(' ').slice(2).join(' ');
            if (!text) {
                return user.send(pmnotext);

            } else {
                try {
                } catch(e){
                    
                    message.channel.send(`Uh Oh, looks like that uses has their DMs closed!`)
                }
                // PM embed
                var pm = new Discord.RichEmbed()
                .setColor('a07ae4')
                .addField(`Important Message!!`, `<@${message.author.id}>: ${text}`)
                .setFooter(`message from ${message.author.username}#${message.author.discriminator}`)

                return user.send(pm);

            }

        } else {

            return;

        }

    } else {

        return;

    }

}
module.exports.help = {
    name: "dm"
}