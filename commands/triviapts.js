module.exports = {
	name: 'triviapts',
	description: 'Displays your total trivia points.',
	execute(msg, args, typicalEmbed, colour, footer, trivia) {
		try {
			const DB = trivia.get(msg.author.id);
			const desc = "<@" + msg.author.id + "> has " + DB + " points!";
			msg.channel.send(typicalEmbed(desc, "Trivia Points", footer, colour));		
		} catch(e) {
			msg.channel.send("Ecountered an error while searching DB. Full error in the console.");
			console.log("Ecountered following error while reading trivia.json:\n" + e);			
		}
  },
};