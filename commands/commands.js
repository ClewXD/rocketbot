const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("Hey! My commands are, -apply, -help, -botinfo, -serverinfo, -coinflip, -info and -urban i also have moderation commmands use -mod!");

}
    


module.exports.help = {
    name: "commands"
}