exports.config = {
  aliases: ["bot-version"]
}

const Discord = require(`discord.js`);

exports.run = (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(`Version control`)
    .attachFiles(['../../Assets/Images/banana.jpg'])
    .setThumbnail('attachment://banana.jpg')
    .setDescription(`21:04, Sunday, 16th May 2021`)
    .setColor("RANDOM")

  message.channel.send(embed);
}
