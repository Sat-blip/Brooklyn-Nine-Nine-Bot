module.exports = {
	name: 'topic',
	description: 'Gives you a random topic.',
	execute(msg, args, typicalEmbed, footer, color) {
    const Topics = [
                    "If you were in a circus, which character would you be?", 
                    "What is the worst advice you have given?",
                    "What is one thing you should never say at a wedding?",
                    "What is the worst pickup line you have ever heard?",
                    "If you could only store one type of food in your pocket, what would you carry?",
                    "What is the worst present you have ever received and why?",
                    "If you were a farm animal, which would you be and why?",
                    "What is the worst first date you have ever been on?",
                    "Have you ever stalked someone on social media?",
                    "What is the best part about taking a selfie?",
                    "What is your favorite celebrity scandal?",
                    "If you could do anything illegal without getting caught, what would you do?",
                    "What is the weirdest food combination you’ve ever tried?",
                    "Did you have an imaginary friend? What was his/her name?",
                    "Have you ever had a dream where everyone was in their underwear?",
                    "Who’s your favorite comedian?",
                    "Have you ever been on a blind date?",
                    "What do you most like about yourself?",
                    "What hurts your feelings?",
                    "If you could be famous, would you want to? Why?",
                    "Who is a celebrity you admire?",
                    "What made you laugh at school/work/college today?",
                    "Did anything make you upset today? (OOF thats deep af)",
                    "What do you like most about your friends?",
                    "Where do you want to be ten years from now?",
                    "If you had $100 right now, what would you spend it on?",
                    "What do you think are the best traits for a person to have?",
                    "Would you ever get a tattoo? What would it be?",
                    "What do you think is a good age to start dating?",
                    "If you could go anywhere in the world, where would you choose and why?",
                    "What is something you wish you could do everyday?",
                    "Note: add more from here: https://www.gifts.com/blog/conversation-starters"]
    const desc = "**" + Topics[Math.floor(Math.random() * Topics.length)] + "**";
    msg.channel.send(typicalEmbed(desc, "New Topic:", footer, colour));
  },
};