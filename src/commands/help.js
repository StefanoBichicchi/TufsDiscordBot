import { MessageEmbed } from "discord.js";

module.exports = {
	name: "aiuto",
	description: "Invia la lista dei comandi",
	execute: (msg) => {
		const embedMessage = new MessageEmbed()
			.setTitle("Lista dei comandi di Tufs")
			.setColor("#424bf5")
			.setDescription("Ecco tutti i miei comandi");

		msg.channel.send(embedMessage);
	}, 
};