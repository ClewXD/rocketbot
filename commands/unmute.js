//Made by FlashBlink
const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('ADMINISTRATOR')) return message.channel.send("You need **ADMINISTRATOR** permissions for use this command.")
    const modlog = message.guild.channels.find(channel => channel.name === 'rocketlog');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Couldn't find user.")
    if (!user.roles.find(`name`, "RocketMute")) return message.channel.send('That person is not muted')
    let muterole = message.guild.roles.find(`name`, "RocketMute");
    if(args[0] == "help"){
      message.reply("Usage: -unmute <user>");
      return;
    }

    message.delete().catch(O_o=>{});

    
  let muteChannel = message.guild.channels.find(`name`, "rocketlog");
  if (!muteChannel) return message.channel.send('**Please create a channel with the name `mute-banned-kicked-logs`**')

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('User', `<@${user.id}>`)
            .addField('Staff_Member', `${mod}`)
            .setColor('#0d05ff')
      		.setFooter("Made by CLEW")
        modlog.send(muteembed)
  
  
}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "unmute",
    category: "MODERATION"
}