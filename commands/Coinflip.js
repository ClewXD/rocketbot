module.exports.run = async (bot, message, args) => {
    var chance = Math.floor(Math.random() * 2)
    if (chance == 0) {
        message.channel.send('Your coin landed on Heads!');
    } else {
        message.channel.send('Your coin ladnded on Tails!');
        }
    }
    
    module.exports.help = {
        name: 'coinflip',
        description: 'descrption here'
    }