module.exports = {
	name: 'addbd',
	description: 'Add your birthday!',
	execute(msg, args, typicalEmbed, colour, footer, fs) {
    msg.channel.send("Feature will be added soon.");

    if(true == false) {
      const data = JSON.parse(fs.readFileSync("../JSONs/birthdays.json", "utf8"));
      for(let i = 0; i < data.length; i++) {
        if(data[i]["UserID"] == msg.author.id) {
          //wsd
        }
      }
    }
  },
};
