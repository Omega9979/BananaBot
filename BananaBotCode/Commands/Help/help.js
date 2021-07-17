exports.config = {
  aliases: ["command-list", "help-list"]
}

const Discord = require(`discord.js`);

exports.run = (client, message, args) => {

  // Basic help command; list all modules of the bot @folder names

  const basicHelpCommand = new Discord.MessageEmbed()
    .setTitle(`Banana Bot's Help Section`)
    .attachFiles([`./BananaBotCode/Assets/Images/banana.jpg`])
    .setThumbnail('attachment://banana.jpg')
    .addFields(
      { name: `Which module are you asking for?`, value: `\u200B` },
      { name: '$help fun', value: 'Funny stuff', inline: true },
      { name: '$help bot info', value: 'Info about the bot', inline: true },
      { name: `$help others`, value: `Other commands`, inline: true },
    )
    .setColor("RANDOM")

  message.channel.send(basicHelpCommand);
}