const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("Hey! My prefix is '-' my commands are, -botinfo -serverinfo -apply. for more commands use -commands and if you need more help just DM One of the mods or admins!");

}
    


module.exports.help = {
    name: "help"
}