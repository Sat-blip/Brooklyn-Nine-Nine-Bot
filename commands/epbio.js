module.exports = {
	name: 'epbio',
	description: 'Shows you the name, season, episode num, and desc of any episode.',
	execute(msg, args, fs, Embed, footer, color) {
    let EpTitle = "";
    for(let i = 0; i < args.length; i++) {
      if(i != 0) {
        EpTitle = EpTitle + " " + args[i];
      } else {
        EpTitle = args[i];
      }
    }
    const EpName = capitalizeStr(EpTitle);
    const data = JSON.parse(fs.readFileSync("JSONs/episodes.json", "utf8"));
    for(let i = 0; i < data.length; i++) {
      if(data[i]["EpisodeName"] == EpName) {
        const desc = data[i]["Desc"];
        msg.channel.send(Embed(footer, color, desc, data[i]["Image"], data[i]["EpisodeName"], data[i]["Season"], data[i]["Episode"]));
        return;
      }
    }

    function capitalizeStr(EpName) {
      let splitStr = EpName.toLowerCase().split(' ');
      for (let i = 0; i < splitStr.length; i++) {
          // You do not need to check if i is larger than splitStr length, as your for does that for you
          // Assign it back to the array
          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
      // Directly return the joined string
      return splitStr.join(' '); 
    }
  },
};
