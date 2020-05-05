const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'aiuto',
	description: 'Visualizza la lista dei comandi',
	execute: msg => {

		const embedMessage = new MessageEmbed()
			.setTitle('Lista dei comandi di Tufs')
			.setURL("https://github.com/StefanoBichicchi/TufsDiscordBot")
			.setColor('#424bf5')
			.setDescription('Ecco tutti i miei comandi')
			.addField("Visulizza i comandi per esteso cliccando qui", "https://github.com/StefanoBichicchi/TufsDiscordBot/blob/master/README.md")
			.addFields(
				{ name: 'aiuto', value: 'Visualizza la lista comandi', inline: true},
				{ name: 'ping', value: 'Pong! (visualizza il tuo ping)', inline: true},
				{ name: 'tira', value: 'Tira un dado', inline: true },
				{ name: 'iniziativa', value: 'Crea una tabella iniziativa per gli scontri', inline: true},
				{ name: 'lutmeme', value: 'Invia un meme de L\'Ultima Torcia!', inline: true},
				{ name: 'dndmeme', value: 'Invia un meme di Dungeons&Dragons', inline: true},
			)
			.setTimestamp()
			.setFooter('Bot creato da Stiv');

		msg.channel.send(embedMessage)
			.catch(e => console.error(e));
	},
};