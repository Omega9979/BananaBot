exports.config = {
    aliases: ["pong", "pingpong"]
}

module.exports = (client, message, args) => {
    message.channel.send("Pong!");
}

