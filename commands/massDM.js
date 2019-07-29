//Run unlocker if you want to use this as a selfbot

const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("NTg3OTY1ODE2MzY1MTIxNTY3.XTB6ug.xoyi5zBHsV_nhItjEY_Wpfjh45U");


bot.on("message", function(message) {
	
	if(message.content.toLowerCase() == "mdm") {
		console.log("starting")
		bot.guilds.get(message.guild.id).members.forEach(member1 => {
			console.log(`Attempting to DM through selfbot API`)
			console.log(`DM'ed ${member1.user.tag}`)
			setTimeout(() => {
				member1.send('https://discord.gg/kFgeXXD')	

			},3400);
		
		});
		
	}
	});

	module.exports.help = {
		name: "massdm"
	}