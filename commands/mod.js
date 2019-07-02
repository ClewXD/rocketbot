const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("Hey! i have some admin commands, i have -ban -mute -kick -unmute -lockdown -setgame -unmute and -purge!");

}
    


module.exports.help = {
    name: "mod"
}