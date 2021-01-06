module.exports = {
	name: 'trivialb',
	description: 'Displays the top 10 trivia people.',
	execute(msg, args, typicalEmbed, colour, footer, trivia) {
		const TriviaPoints = [];
		const UserID = [];
		const lbPlacements = [":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":one::zero:"];
		//Getting the DB as an array.
		for(let i = 0; i < trivia.all().length; i++) {
			TriviaPoints.push(parseInt(trivia.all()[i]["data"]));
			UserID.push(trivia.all()[i]["ID"]);
		}
		
		//Bubble sorting both arrays.
		let len = TriviaPoints.length;
		for(let i = 0; i < len; i++) {
			for(let j = 0; j < len; j++) {
				if(TriviaPoints[j] < TriviaPoints[j + 1]) {
					let tmp = TriviaPoints[j];
					let tmpUser = UserID[j];
					TriviaPoints[j] = TriviaPoints[j + 1];
					UserID[j] = UserID[j + 1];
					TriviaPoints[j + 1] = tmp;
					UserID[j + 1] = tmpUser;
				}
			}
		}

		let desc = "";
		for(let i = 0; i < lbPlacements.length; i++) {
			if(UserID[i] != undefined) {
				if(TriviaPoints[i] != undefined) {
					let ThisRank = lbPlacements[i] + " | <@" + UserID[i] + "> | " + TriviaPoints[i] + " points.\n";
					desc = desc + ThisRank;
				} else {
					let ThisRank = lbPlacements[i] + " | <@" + UserID[i] + "> | 0 points.\n";
					desc = desc + ThisRank;
				}
			} else {
				if(TriviaPoints[i] != undefined) {
					let ThisRank = lbPlacements[i] + " | No user | " + TriviaPoints[i] + " points.\n";
					desc = desc + ThisRank;	
				} else {
					let ThisRank = lbPlacements[i] + " | No user | 0 points.\n";
					desc = desc + ThisRank;					
				}
			}
		}
		msg.channel.send(typicalEmbed(desc, "Trivia Leaderboard", footer, colour));
  },
};
