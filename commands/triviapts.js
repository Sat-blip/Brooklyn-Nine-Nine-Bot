module.exports = {
	name: 'triviapts',
	description: 'Displays your total trivia points.',
	execute(msg, args, typicalEmbed, colour, footer, fs) {
		try {
			const data = JSON.parse(fs.readFileSync("JSONs/trivia.json", "utf8"));
      for(let i = 0; i < data.length; i++) {
        if(data[i]["UserID"] == msg.author.id) {
					const desc = "<@" + msg.author.id + "> has " + data[i]["TriviaPoints"] + " points!";
					msg.channel.send(typicalEmbed(desc, "Trivia Points", footer, colour));
					break;
				} else if(i == data.length - 1) {
					const desc = "<@" + msg.author.id + "> has 0 points!";
					msg.channel.send(typicalEmbed(desc, "Trivia Points", footer, colour));					
				}
			}
		} catch(e) {
			msg.channel.send("Ecountered an error while searching DB. Full error in the console.");
			console.log("Ecountered following error while reading trivia.json:\n" + e);			
		}
  },
};
