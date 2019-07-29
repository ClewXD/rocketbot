const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const bot = new Discord.Client();


module.exports.run = (client, message,args) => {
  let reason = args.slice(0).join(' ')
  if (reason.length < 1) return message.reply('you must enter a valid IP.');

    user = message.author;
    snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
        let Geo = new Discord.RichEmbed()
          .setTimestamp()
          .setThumbnail(user.avatarURL)
          .setTitle(`**Purp ip-resolver**`)
          .setDescription(`
          
      **Looked Up IP**: ${args}

      **City**: ${r.body.city}

      **Country**: ${r.body.country}

      **Countrycode**: ${r.body.countryCode}

      **Region**: ${r.body.region}

      **Timezone**: ${r.body.timezone}

      **Zipcode**: ${r.body.zip}

      **latitude**: ${r.body.lat}

      **Longitude**: ${r.body.lon}

      Ip resolver made for **Purp**`)
      

          .setFooter(`IP resolved By: ${message.author.tag}`);
      
        message.author.send({ embed: Geo });
        message.delete();
      });
    }
module.exports.help = {
    name: 'ip',
}