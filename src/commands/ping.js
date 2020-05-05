
module.exports = {
	name: "ping",
	description: "Pong! (visualizza la tua latenza)",
	execute: msg => {
		let ping = Date.now() - msg.createdTimestamp + " ms";
		msg.reply("hai un ping di `" + ping + "`");
	}
}