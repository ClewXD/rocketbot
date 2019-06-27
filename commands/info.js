exports.run = async (client, msg) => {
  const information = `
Hey! I am rocketbot! I am a user friendly moderation bot that is made by Clew! if you need more info about the bot just DM clew!`;
  msg.channel.send(information);
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "info",
  description: "Provides some information about Guardian.",
  usage: "",
  usageDelim: "",
};
