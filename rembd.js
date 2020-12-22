module.exports = {
	name: 'rembd',
	description: 'Remove your birthday!',
	execute(msg, args, fs) {
    try {
      const path = "JSONs/Birthdays/" + msg.author.id + ".json";
      fs.unlinkSync(path)
      //file removed
    } catch(e) {
      console.log("Error encountered while trying to delete '" + msg.author.id + ".json'. Error:\n" + e);
      msg.channel.send("Error encountered while trying to delete '" + msg.author.id + ".json'.");
    }
    msg.channel.send("Removed your birthday: Removed `" + msg.author.id + ".json`.");
  },
};