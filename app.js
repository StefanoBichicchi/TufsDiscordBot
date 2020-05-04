'use strict';

const { Client, Collection } = require('discord.js');
const Commands = require('./src/commands');
const DotEnv = require('dotenv');
const BotConfig = require ('./config.json');

DotEnv.config();

const client = new Client;
client.commands = new Collection();

client.on('ready', () => {
	console.info('Bot avviato: Tufs è pronto!');
	console.info(`Loggato come ${client.user.tag}!`);
});

Object.keys(Commands).map(key => {
	client.commands.set(Commands[key].name, Commands[key]);
});

process.env.botPrefix = BotConfig.prefix;

client.on('message', msg => {

	if(msg.author.bot) return;

	// GESTORE COMANDI //
	if (msg.content.trim().startsWith(process.env.botPrefix)) {
		const args = msg.content.split(/ +/);
		const command = args.shift().toLowerCase().slice(1);
		console.info(`Called command: ${command}`);

		// console.log(client.commands.has(command));
		if (!client.commands.has(command)) {
			msg.reply('Non so cosa voglia dire');
			return;
		}

		console.dir(args);

		try {
			client.commands.get(command).execute(msg, args);
		}
		catch (error) {
			console.error('Error:', error);
			msg.reply('Ops!');
		}

		return;
	}
});

client.login(process.env.DISCORD_TOKEN)
	.catch((err) => {console.error('Fatal error:', err);});