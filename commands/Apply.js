const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    return message.channel.send("Hey! if you want to apply for staff click this link right here! https://bit.ly/31xXeXV");

}
    


module.exports.help = {
    name: "apply"
}

exports.conf = {
    aliases: ['Stuff', 'AlsoStuff']
    };
    exports.help = {
    name: "Apply", description: "Dumb.", usage: ".SeriousStuff"
    }