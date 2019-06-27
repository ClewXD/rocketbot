const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("Hey! My commands are, -apply, -help, -botinfo, -serverinfo, -coinflip, -info and -urban!");

}
    


module.exports.help = {
    name: "commands"
}