module.exports = (client) => {
	console.log(client.user.tag + " Has Booted")
	client.user.setPresence({
    status: 'dnd',
    activity: {
        name: client.config.prefix + 'help | ' + client.config.status,
        type: 'PLAYING',
        url: 'https://www.twitch.tv/monstercat'
    }
	})
}
