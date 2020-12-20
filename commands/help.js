module.exports = {
	name: 'help',
	description: 'A list of all commands and their descriptions.',
	execute(msg, args, typicalEmbed, colour, footer, prefix) {
		const desc = "`" + prefix + "` - prefix.\n- `addbd` - Adds your birthday.\n- `rembd` - Removes your birthday.\n- `help` - You are here.\n- `bug` - Send a bug to the developer! Be sure to include a message link!\n- `epbio` - Shows you the name, season, episode num, and desc of any episode.";
    msg.channel.send(typicalEmbed(desc, "Help and Info", footer, colour));
  },
};