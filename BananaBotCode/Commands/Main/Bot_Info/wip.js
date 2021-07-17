exports.config = {
    aliases: ["WIP", "work in progress"]
}

const Discord = require(`discord.js`);

exports.run = (client, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setTitle(`Work in progress:`)
        .attachFiles(['../../Assets/Images/banana.jpg'])
        .setThumbnail('attachment://banana.jpg')
        .addField(`Embeds`, `Embeds for more commands and improving existing onces`, true)
        .addField(`Code`, `General improvements to the code, especially older commands`, true)
        .addField(`Help command(s)`, `Improving the existing help command and adding help commands for the other modules`, true)
        .setFooter(`Remember, this is a hobby project, so do not expect too much progress within a given amount of time, thanks.`)
        .setColor("RANDOM")

    message.channel.send(embed);
}