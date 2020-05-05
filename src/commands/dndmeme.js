const { MessageAttachment } = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports = {
	name: "dndmeme",
	description: "Manda un meme di DnD",
	execute: msg => {
		randomPuppy('dndmemes')
			.then(url => {
				msg.channel.send("Beccati sto meme!")
					.catch(e => console.error(e));

				msg.channel.send(new MessageAttachment(url))
					.catch(e => console.error(e));
			})
	}
}