module.exports = {
	name: 'addbd',
	description: 'Add your birthday!',
	execute(msg, args, typicalEmbed, colour, footer, fs, prefix) {
    if(isNaN(args[0]) == true || isNaN(args[1]) == true) {
      msg.channel.send("Either your day or month is not an integer.");
    } else {
      let MyDict = {
        "Day": args[0],
        "Month": args[1],
        "UserID" : msg.author.id
      }

      let jsonDATA = JSON.stringify(MyDict);
      fs.writeFile("JSONs/Birthdays/" + msg.author.id + ".json", jsonDATA, function(err) {
        if(err) {
          console.log(err);
          msg.channel.send("Sorry, there was a problem dumping data into the database!\nPlease try again. If the problem persists, type `>bug [bug report]`.");
          return;
        }
      });
      msg.channel.send("Your birthday is set to: `" + args[0] + "/" + args[1] + "`.");
    }
  },
};