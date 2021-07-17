exports.config = {
  aliases: ["info bot", "development"]
}

const Discord = require(`discord.js`);

exports.run = (client, message, args) => {

  // bot info help command; all commands from the fun folder

  const helpCommandsFun = `author, version, wip`

  const funHelpCommand = new Discord.MessageEmbed()
    .setTitle(`Banana Bot's Information Commands`)
    .setDescription(`**Here are all commands regarding information about the bot:**`)
    .addField(`\u200B`, `${helpCommandsFun}`, true)
    .setFooter(`Remember to add the prefix to all of them!`)
    .setColor("RANDOM")

  message.channel.send(funHelpCommand);
}