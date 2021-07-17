exports.config = {
    aliases: ["help others", "others help"]
}

const Discord = require(`discord.js`);

exports.run = (client, message, args) => {

    // other help command; all commands from the fun folder

    const helpCommandsFun = `ping`

    const funHelpCommand = new Discord.MessageEmbed()
        .setTitle(`Banana Bot's Other Commands`)
        .setDescription(`**Here are all other commands:**`)
        .addField(`\u200B`, `${helpCommandsFun}`, true)
        .setFooter(`Remember to add the prefix to all of them!`)
        .setColor("RANDOM")

    message.channel.send(funHelpCommand);
}