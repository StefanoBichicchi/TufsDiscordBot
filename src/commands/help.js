const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'aiuto',
	description: 'Visualizza la lista dei comandi',
	execute: msg => {
		const embedMessage = new MessageEmbed()
			.setTitle('Lista dei comandi di Tufs')
			.setColor('#424bf5')
			.setDescription('Ecco tutti i miei comandi')
			.addFields(
				{ name: 'help', value: 'Visualizza la lista comandi', inline: true },
				{ name: 'tira', value: 'Tira un dado', inline: true },
			)
			.setFooter('Powered by Stiv');

		msg.channel.send(embedMessage);
	},
};