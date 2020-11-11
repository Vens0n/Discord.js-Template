exports.run = (client, message, args) => {

	var user = message.mentions.members.first()

	if(!user) return message.reply("Like Your Gonna Kill Air!")


	let replies = ["Fell From A High Place", "Has Been Shot Twice In The Gut", "Forgot To Breathe Again", "Was Poisoned"];
	let random = Math.floor(Math.random() * replies.length);


	message.channel.send(user.user.username + " " + replies[random])

}