module.exports = {
	name: 'addtrivia',
	description: 'Staff only! Adds trivia points to a certain user.',
	execute(msg, args, typicalEmbed, colour, footer, trivia) {
    //arg[1] - amount to give.
    try {
      const PersonToGive = msg.mentions.users.first().id;
      if(trivia.get(PersonToGive)) {
        const CurrentPoints = parseInt(trivia.get(PersonToGive));
        trivia.set(PersonToGive, CurrentPoints + parseInt(args[1]));
        msg.channel.send("Done!");
      } else {
        trivia.set(PersonToGive, args[1])
      }
    } catch(e) {
      msg.channel.send("Correct usage: `$addtrivia [mention user] [amount]`");
      console.log("Err:\n" + e);
    }
  },
};
