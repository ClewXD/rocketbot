const discord = require("discord.js");
const moment =  require("moment");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("This command is for admins only!")
    
    if(!args[0]) return message.channel.send("You have to specify a number of messages to delete.");

message.channel.bulkDelete(args[0]).then(() => {

    message.channel.send(`purged ${args[0]} messages.`).then(msg => msg.delete(2000));
});
}


module.exports.help = {
    name: "purge",
    description: "Bulkdelete a specified amount of messages."
}