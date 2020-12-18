const token = "your token here";
//const keep_alive = require('./keep_alive.js');

//Installing dependencies--------------------------------------
let Discord = null;
let fs = null;
let path = null;
try {
  Discord = require('discord.js');
  fs = require('fs');
  path = require('path');
} catch(e) {
  console.log("Unable to install some dependencies. Attempted to install:\nDiscord.js\nfs\npath.\nError:\n" + e);
}
//Constants------------------------------------------------------------
const client = new Discord.Client();
const version = "v1.4";
const colour = '#0099ff';
const footer = "Auto Greg Bot " + version + " | Prag's Pog Squad";

//On start up -------------------------------------
client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

const data = JSON.parse(fs.readFileSync("./JSONs/general.json", "utf8"));
let prefix = data["Prefix"];

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

//On message sent event ------------------------------------------
client.on('message', msg => {
  msg.content = msg.content.toLowerCase();
  	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  //Creating command arguments
	const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  

  if(command === "help") {
    client.commands.get('help').execute(msg, args, typicalEmbed, colour, footer, prefix);
  }
  else if(command === "addbd") {
    client.commands.get('addbd').execute(msg, args, typicalEmbed, colour, footer, fs);
  }
});

//Embed function for general use.
function typicalEmbed(desc, title, footer, colour) {
  const Embed = new Discord.MessageEmbed()
  .setColor(colour)
  .setTitle(title)
  .setDescription(desc)
  .setTimestamp()
  .setFooter(footer);

  return Embed;
}



client.login(token); //Bot logging into Discord.
