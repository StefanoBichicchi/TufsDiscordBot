"use strict";

import { Client, Collection } from "discord.js";
import Commands from "./src/commands";
import Dotenv from "dotenv";

Dotenv.config(); 

const client = new Client;
client.commands = new Collection();

client.on("ready", () => {
	console.info("Bot avviato: Tufs è pronto!");
	console.info(`Loggato come ${client.user.tag}!`);
});

Object.keys(Commands).map(key => {
	client.commands.set(Commands[key].name, Commands[key]);
});

client.on("message", msg => {

	// GESTORE COMANDI //
	if (msg.content.trim().startsWith("&")) {
		const args = msg.content.split(/ +/);
		const command = args.shift().toLowerCase();
		console.info(`Called command: ${command}`);

		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(msg, args);
		} catch (error) {
			console.error("Error:", error);
			msg.reply("Ops!");
		}

		return;
	}
});

client.login(process.env.DISCORD_TOKEN)
	.catch((err) => {console.error("Fatal error:", err);});