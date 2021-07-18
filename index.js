// Web server

const express = require(`express`);
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


// Actual bot 

const Discord = require(`discord.js`)
const client = new Discord.Client();

fs = require("fs");
const path = require('path');

require(`dotenv`).config()


//Command Handler

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

/**
 * Loads the .js files in the given folder, recursively.
 * 
 * @para string folder 
 */

function loadCommands(folderPath) {
    // assuming there are no subfolders
    fs.readdir(folderPath, (err, contents) => {
        contents.forEach(fileOrFolder => {
            fileOrFolder = folderPath + `/` + fileOrFolder;
            // folder case
            if (fs.statSync(fileOrFolder).isDirectory()) {
                loadCommands(fileOrFolder);
            }
            // file case
            else {
                loadFileAsCommand(fileOrFolder);
            }
        });
    });
}

function loadFileAsCommand(filePath) {
    if (!filePath.endsWith(".js")) return;

    // load file
    const command = require(filePath);

    // TODO: get filename from path
    const commandName = path.parse(filePath).name;

    // console
    console.log("Successfully loaded " + commandName );

    // register command
    client.commands.set(commandName, command);

    // aliases
    const extraConfig = command.config;
    if (extraConfig && extraConfig.aliases) {
        extraConfig.aliases.forEach(alias => {
            client.aliases.set(alias, command);
        });
    }
}

loadCommands(`./BananaBotCode/Commands`)


//Events "handler"

fs.readdir(`./BananaBotCode/Events/`, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./BananaBotCode/Events/${file}`);
        console.log("Successfully loaded " + file)
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunc.run(client, ...args));
    });
});

// login 

client.once('ready', async () => {
    console.log(`Online!`);

})

client.login(process.env['ClientSecret'] || process.env.ClientSecret);