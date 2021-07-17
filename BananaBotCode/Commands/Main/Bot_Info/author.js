exports.config = {
  aliases: ["coder", "writer"]
}

const Discord = require(`discord.js`);

exports.run = (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(`Omega9979`)
    .attachFiles(['./BananaBotCode/Assets/Images/banana.jpg'])
    .setThumbnail('attachment://banana.jpg')
    .setDescription(`Alias: Banana`)
    .setColor("RANDOM")
    .setFooter(`Omega#9979`)

  message.channel.send(embed);
}
