const { MessageEmbed } = require('discord.js');

const allCommands = require('../../src/commands');

module.exports = {
	name: 'aiuto',
	description: 'Visualizza la lista dei comandi',
	execute: msg => {

		let commands = []

		Object.keys(allCommands).forEach(function(key) {
			commands.push({
				name: allCommands[key].name,
				value: allCommands[key].description
			});
		});

		console.dir("comandi", commands);

		const embedMessage = new MessageEmbed()
			.setTitle('Lista dei comandi di Tufs')
			.setColor('#424bf5')
			.setDescription('Ecco tutti i miei comandi')
			.addFields(
				{ name: 'aiuto', value: 'Visualizza la lista comandi', inline: true},
				{ name: 'ping', value: 'Pong! (visualizza il tuo ping)', inline: true},
				{ name: 'tira', value: 'Tira un dado', inline: true },
				{ name: 'iniziativa', value: 'Crea una tabella iniziativa per gli scontri', inline: true},
				{ name: 'lutmeme', value: 'Invia un meme de L\'Ultima Torcia!', inline: true},
			)
			.setFooter('Bot creato da Stiv');

		msg.channel.send(embedMessage)
			.catch(e => console.error(e));
	},
};