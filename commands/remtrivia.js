module.exports = {
	name: 'remtrivia',
	description: 'Staff only! Remove trivia points from a certain user.',
	execute(msg, args, typicalEmbed, colour, footer, trivia) {
    //arg[1] - amount to give.
    try {
      const PersonToGive = msg.mentions.users.first().id;
      if(trivia.get(PersonToGive) > -1) {
        const CurrentPoints = parseInt(trivia.get(PersonToGive));
        trivia.set(PersonToGive, CurrentPoints - parseInt(args[1]));
        msg.channel.send("Done!");
      } else {
        msg.channel.send("This person's point total is already either greater than or equal to 0.");
      }
    } catch(e) {
      msg.channel.send("Correct usage: `$addtrivia [mention user] [amount]`"); 
      console.log("Err:\n" + e);
    }
  },
};
