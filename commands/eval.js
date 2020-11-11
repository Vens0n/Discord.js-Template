exports.run = (client, message, args) => {

	var allow = false;
	for(var i = 0; i < client.config.ownerid.length; i++) {
		if(message.author.id == client.config.ownerid[i]) allow = true;
	}

	if(!allow) return

	try {
		var output = eval(args.join(""))
	} catch(error) {
		output = "Error : " + output;
	}

message.channel.send({embed : {
	title: "Eval",
	color: "ffff00",
	description: "```fix\n" + output + "\n```",
	footer: client.config.footer
}})

}
