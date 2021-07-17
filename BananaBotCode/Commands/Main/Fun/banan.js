exports.config = {
    aliases: ["banban"]
}

exports.run = async (client, message, args) => {

    String.prototype.replaceAll = function (str1, str2, ignore) {
        return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
    }

    const replaceThis = ` `;
    const withThis = ":banana:";

    const whatToChange = message.content.slice(7);

    if (whatToChange === ``) {
        message.channel.send(`What do you want to banan?`)
    } else {
        message.channel.send(whatToChange.replaceAll(replaceThis, withThis));
    }
}