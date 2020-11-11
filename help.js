const {
    prefix
} = require("../config.json")
const Discord = require("discord.js")

exports.run = (client, message, args) => {

    const help = require("../help.json")
    var data = [];
		var ee = false;
    const embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Help')
        .setDescription('Help Command')
        .setFooter('Shawn Does#7630');


    for (var i = 0; i < help.length; i++) {
        if (args[0]) {
            console.log(args[0].toLowerCase() + "   " + help[i].name.toLowerCase())
            if (args[0].toLowerCase() == help[i].name.toLowerCase()) {
                for (var f = 0; f < help[i].commands.length; f++) {
                    embed.addField(help[i].commands[f].name, help[i].commands[f].info, true)
										ee = true
                }
						}

        } else {

            embed.addField(help[i].name, help[i].info, true)

        }
    }

    message.channel.send(embed)


}