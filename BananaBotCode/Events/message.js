const prefix = "$"

const Discord = require(`discord.js`);

exports.run = async (client, message) => {
    if (message.author.id === `159985870458322944`) {
        LevelUp();
    }

    else if (message.content.startsWith(prefix)) {

        cmd = message.content;
        args = message.content.slice(1);
        commandfile = client.commands.get(cmd.slice(prefix.length)) || client.aliases.get(cmd.slice(prefix.length));

        if (!commandfile) { // invalid command
            const invalidCommandEmbed = new Discord.MessageEmbed()
                .addField(`This command is invalid!`, `${message.author}, maybe have a look at the help section?`, true)
                .setFooter(`$help (Be careful with custom prefixes!)`)
                .setColor("RANDOM")
            message.channel.send(invalidCommandEmbed)
        } else { // valid command
            commandfile.run(client, message, args);
        }
    }

    function LevelUp() {
        if (message.content.startsWith(`Meoww!`) || (`GG`)) {
            message.channel.send(`Congrats from my side as well!! :banana::banana::banana:`);
        } else {
            return;
        }
    }
}

