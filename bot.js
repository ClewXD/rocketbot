const Discord = require ("discord.js");
const config = require ("./config.json");
const bot = new Discord.Client({DisableEveryone: true});
const fs = require ("fs")
bot.commands =  new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
if (err) HTMLFormControlsCollection.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
    console.log("no commands where found...")
    return;
}

jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`) 
    console.log( `${f} loaded!`)
    bot.commands.set(props.help.name, props);

} )

})
bot.on("ready", async () => {
console.log (`${bot.user.username} is online!`)
bot.user.setActivity ("Use -help!", {type: ""});
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;
    let messagearray = message.content.split(" ")
    let cmd = messagearray [0];
    let args = messagearray.slice (1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

})

bot.login(config.token);