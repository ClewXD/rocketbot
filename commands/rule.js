const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("This command is for admins only!")
 message.delete();
  let serverembed = new Discord.RichEmbed()
  .setTitle('**Server rules**')
  .setColor("a07ae4")
  .setThumbnail(message.guild.iconURL)
  .setDescription(

    `
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
    
    ┏╋━━━━━━◥◣◆◢◤━━━━━━╋┓
    ━━━━━━━━Information━━━━━━━━
    ┗╋━━━━━━◥◣◆◢◤━━━━━━╋┛
    
    » Chat Channel Rules «
    
    ✦ Suicidal Encouragement/sending threats to members will result in a mute.
    
    ✦ Discussing DDosing/Doxing will result in a ban. Leaking IP's will also result in a ban.
    
    ✦ Do not advertise. Advertisement is NOT allowed.
    
    ✦ Inappropriate Behavior is not allowed, please respect everyone.
    
    ✦═══════✦════════✦
    
    » Voice Channel Rules «
    
    ✦ Chat Rules still apply to the Voice Channel rules.
    
    ✦ Voice Changers are not allowed, you will be server muted.
    
    ✦ Racism will result in a server mute and chat mute.
    
    ✦ Don't excessively leave and join the channels, you will be banned.
    
    ✦ Do not attempt to ear-rape, this will result in a server mute.
    
    ✦ Advertising is not allowed.
    
    ✦ Suicidal Encouragement will result in a perm server mute.
    
    ✦═══════✦════════✦
    
    » Role Requirements «
    ✦Click the emoji and you're done!
    
    https://bit.ly/31xXeXV if you want to apply for staff
    
    
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
    
    `
    )
  return message.channel.send(serverembed);
}


module.exports.help = {
  name: "rule",
  description: "Gathers information about the server."
}