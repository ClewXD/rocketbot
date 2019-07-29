const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("This command is for staff only!");

    var splitser = "//";
    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
        .setTitle("announce a message!")
        .setColor("a07ae4")
        .setDescription(`Make an announcement!`)
        return message.channel.send(useMessage);
    }
args = args.join(" ").split(splitser);
if(args[2] == undefined) args[2] = "#a07ae4";
if (args[3] == undefined) args[3] = "announcements";


var options = {
    title: args[0] ||"notification",
    message: args[1] || "No input message",
    color: args[2].trim(),
    channel: args[3].trim()
    

}
var announcer = message.author;
var user = message.mentions.users.first();
var announceEmbed = new discord.RichEmbed()
.setTitle('**announcement!**')
.setColor("a07ae4")
.setURL('https://twitter.com/BotZhun')
.setThumbnail(message.author.avatarURL)
.setDescription(`**Message from** ${announcer} \n\n ${options.title} \n`)
.setFooter('Coded by CLEW', 'https://m.media-amazon.com/images/M/MV5BMjA2MzQ2NzcyNV5BMl5BanBnXkFtZTYwODk3Njc3._V1_.jpg')
.setFooter(message.author.tag, message.author.avatarURL)
.setTimestamp();
message.delete();
var announcechannel = message.guild.channels.find(`name`, options.channel);
if(!announcechannel) return message.channel.send("unable to find announcement channel!");

announcechannel.send(announceEmbed);

}

module.exports.help = {
    name: "announce"
  }