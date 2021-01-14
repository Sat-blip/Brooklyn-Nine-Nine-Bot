module.exports = {
	name: 'remtrivia',
	description: 'Staff only! Remove trivia points from a certain user.',
	execute(msg, args, typicalEmbed, colour, footer, fs) {
    //arg[1] - amount to give.
    try {
      const PersonToGive = msg.mentions.users.first().id;
      const data = JSON.parse(fs.readFileSync("JSONs/trivia.json", "utf8"));
      for(let i = 0; i < data.length; i++) {
        if(data[i]["UserID"] == PersonToGive) {
          if(parseInt(data[i]["TriviaPoints"]) > -1) {
            const CurrentPoints = parseInt(data[i]["TriviaPoints"]);
            data[i]["TriviaPoints"] = CurrentPoints - parseInt(args[1]);
            let jsonDATA = JSON.stringify(data);
            fs.writeFile("JSONs/trivia.json", jsonDATA, function(err) { if(err) { console.log(err); } });      
            msg.channel.send("Done!"); 
            break; 
          }  
        } else if(i == data.length - 1) {
          msg.channel.send("This person's point total is already either less than or equal to 0.");
        }
      }
    } catch(e) {
      msg.channel.send("Correct usage: `$addtrivia [mention user] [amount]`"); 
      console.log("Err:\n" + e);
    }
  },
};
