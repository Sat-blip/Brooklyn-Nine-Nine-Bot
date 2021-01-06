const token = "your token here";
//const keep_alive = require('./keep_alive.js');

//Installing dependencies--------------------------------------
let Discord = null;
let fs = null;
let path = null;
let db = null;
try {
  Discord = require('discord.js');
  fs = require('fs');
  path = require('path');
  db = require('quick.db');
} catch(e) {
  console.log("Unable to install some dependencies. Attempted to install:\nDiscord.js\nfs\npath.\nError:\n" + e);
}
//Constants------------------------------------------------------------
const client = new Discord.Client();
const version = "v1.1";
const colour = '#0099ff';
const footer = "Meep Morp Robot " + version + " | /r/brooklynninenine Official Discord";
const trivia = new db.table('trivia');


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
  console.log("Hello, world!");
  //Creating command arguments
	const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  

  if(command === "help") {
    client.commands.get('help').execute(msg, args, typicalEmbed, colour, footer, prefix);
  }
  else if(command === "addbd") {
    client.commands.get('addbd').execute(msg, args, typicalEmbed, colour, footer, fs);
  }
  else if(command === "rembd") {
    client.commands.get('rembd').execute(msg, args, fs);
  }
  else if(command === "bug") {
    client.commands.get('bug').execute(msg, args, client.channels.cache.get("535523482868383750"));
  }
  else if(command === "epbio") {
    function Embed(footer, color, Synopsis, image, EpName, Season, Episode) {
      const Embed = new Discord.MessageEmbed()
      .setColor(colour)
      .setTitle(EpName)
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/icons/535148342078865409/a_6564873fc82b7ff704879b5bb0cdc3a2.gif?size=1024")
      .setImage(image)
      .addFields(
        { name: "Synopsis", value: Synopsis },
        { name: "Season", value: Season, inline: true },
        { name: "Episode", value: Episode, inline: true },
      )
      .setFooter(footer);
    return Embed;
    }
    client.commands.get('epbio').execute(msg, args, fs, Embed, footer, colour);
  }
  else if(command === "topic") {
    client.commands.get('topic').execute(msg, args);
  }
  else if(command === "triviapts") {
    client.commands.get('triviapts').execute(msg, args, typicalEmbed, colour, footer, trivia);
  }
  else if(command === "addtrivia") {
    if(msg.member.roles.cache.has('775061162081255450') == true) {
      client.commands.get("addtrivia").execute(msg, args, typicalEmbed, colour, footer, trivia);
    } else {
      msg.channel.send("You can't do that!");
    }
  }
  else if(command === "remtrivia") {
    if(msg.member.roles.cache.has('775061162081255450') == true) {
      client.commands.get("remtrivia").execute(msg, args, typicalEmbed, colour, footer, trivia);
    } else {
      msg.channel.send("You can't do that!");
    }
  }
  else if(command === "trivialb") {
    client.commands.get("trivialb").execute(msg, args, typicalEmbed, colour, footer, trivia);
  }
});


client.on("messageReactionAdd", (reaction) => {
  if(reaction.emoji.name == "✅") {
    if(reaction.message.channel == client.channels.cache.get('795959723593564200')) {
      let TriviaPoints = trivia.get(reaction.message.author.id) + 1;
      trivia.set(reaction.message.author.id, TriviaPoints);
    }
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
