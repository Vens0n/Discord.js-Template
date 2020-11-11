const Discord = require("discord.js")
const cooldowns = new Discord.Collection();

module.exports = (client, message) => {

    const help = require("../help.json")

    if (message.author.bot) return;

    if (message.content.indexOf(client.config.prefix) !== 0) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    var cmd = client.commands.get(command);
    var cmdinfo;
    for (let i = 0; i < help.length; i++) {
			for (let f = 0; f < help[i].commands.length; f++) {
				if(command == help[i].commands[f].name.toLowerCase()) cmdinfo = help[i].commands[f]
      }
    }
    if (cmdinfo) {
        if (!cooldowns.has(cmdinfo.name)) {
            cooldowns.set(cmdinfo.name, new Discord.Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(cmdinfo.name);
        const cooldownAmount = (cmdinfo.cooldown || 1) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                var timeLeft = (expirationTime - now) / 1000;
                var type = "Second(s)"
                if (timeLeft >= 60000) {
                    timeLeft = timeLeft / 60000
                    type = "Minute(s)"
                }

                return message.reply(`Please Wait ${timeLeft.toFixed(1)} More ${type} Before Reusing The \`${cmdinfo.name}\` Command.`);
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    if (cmd) {

        cmd.run(client, message, args);
    } else {


    for (let i = 0; i < help.length; i++) {
			for (let f = 0; f < help[i].commands.length; f++) {
        for (let e = 0; e < help[i].commands[f].allies.length; e++) {
            if (command == help[i].commands[f].allies[e]) {
  	        	cmd = client.commands.get(help[i].commands[f].name);
 	          }
        }
      }
    }


        for (let i = 0; i < help.length; i++) {
            if (help[i].allies) {
                for (let f = 0; f < help[i].allies.length; f++) {
                    if (command == help[i].allies[f]) {
                        cmd = client.commands.get(help[i].name);
                    }
                }
            }
        }
        if (cmd) {
            cmd.run(client, message, args)

        }

    }
};
