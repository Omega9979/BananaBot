exports.config = {
  aliases: ["help fun", "fun help"]
}

exports.run = (client, message, args) => {

  // Fun help command; all commands from the fun folder

  const Discord = require(`discord.js`);
  const fs = require(`fs`);

  const helpCommandsFun = `banan`

  const funHelpCommand = new Discord.MessageEmbed()
    .setTitle(`Banana Bot's Fun Commands`)
    .setDescription(`**Here are all fun commands:**`)
    .addField(`\u200B`, `${helpCommandsFun}`, true)
    .setFooter(`Remember to add the prefix to all of them!`)
    .setColor("RANDOM")

  message.channel.send(funHelpCommand);
}