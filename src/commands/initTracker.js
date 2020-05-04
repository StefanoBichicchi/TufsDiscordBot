const { Client, MessageEmbed } = require('discord.js');

var initiative_table = [];

module.exports = {
	name: 'iniziativa',
	description: 'Crea una tabella dell\'iniziativa al posto tuo!',
	execute: main
};

function addUnit(name, roll, id) {
	if(name === undefined || roll === undefined) throw 'Nome e tiro sono obbligatori!';
	if(Number.isNaN(Number.parseInt(roll, 10))) throw 'Il tiro deve essere un numero intero positivo';

	let player = {
		'name': name,
		'roll': roll
	};
	if(!initiative_table[id])
		initiative_table[id] = [];

	initiative_table[id].push(player);

	//sort initiative_table
	initiative_table[id].sort((a, b) => {
		let diff = b.roll - a.roll
		if(diff === 0) {
			return Math.random() < 0.5 ? -1 : 1;
		}
		return diff;
	});
}

function removeUnit(rank, id) {
	if(rank === undefined || Number.isNaN(Number.parseInt(rank, 10))) throw 'è richiesto un numero intero';
	if(rank <= 0 || rank > initiative_table[id].length) throw 'Numero invalido, troppo grande';

	return initiative_table[id].splice(rank-1, 1);
}

function switchUnits(rank1, rank2, id) {
	if(rank1 === undefined || rank2 === undefined) throw 'Devi inserire due numeri';
	if(Number.isNaN(Number.parseInt(rank1, 10)) || Number.isNaN(Number.parseInt(rank2, 10))) throw 'I numeri devono essere interi.';
	if(rank1 <= 0 || rank1 > initiative_table[id].length) throw 'Primo numero troppo grande';
	if(rank2 <= 0 || rank2 > initiative_table[id].length) throw 'Secondo numero troppo grande';

	let temp = initiative_table[id][rank1 - 1];
	initiative_table[id][rank1 - 1] = initiative_table[id][rank2 - 1];
	initiative_table[id][rank2 - 1] = temp;
}

function nameUnit(rank, name, id) {
	if(rank === undefined || name === undefined) throw 'Devi inserire nome e valore!';
	if(Number.isNaN(Number.parseInt(rank, 10))) throw 'Il valore deve essere intero';
	if(rank <= 0 || rank > initiative_table[id].length) throw 'Numero troppo grande.';

	initiative_table[id][rank - 1].name = name;
}

function format_order(id) {
	if(initiative_table[id].length < 1) throw 'Tabella vuota';

	let embed = new MessageEmbed();

	//TODO: Differentiate between PC/NPC or Party/Enemies?

	let order_text = '';
	for (let i = 0; i < initiative_table[id].length; i++) {
		let rank = i+1;
		order_text += rank + ': **' + initiative_table[id][i].name + '** (' + initiative_table[id][i].roll + ')\n';
	}

	embed.addField('Ordine', order_text);

	return embed;
}

function deleteMessage(message) {
	message.delete().catch((e) => {
		console.log(e);
	});
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function sendTempMessage(text, channel) {
	channel.send(text)
		.then((message) => {
			delayedDelete(message, 2000)
				.catch(err => console.error(err));
		});
}

async function delayedDelete(message, ms) {
	await sleep(ms);
	deleteMessage(message);
}

function main(msg, args){

	let channel = msg.channel;

	switch(args[0]) {
	case 'aggiungi':
		try {
			let name = args[1];
			addUnit(name, args[2], msg.guild.id);
			sendTempMessage("Aggiunto " + name + " alla tabella.", channel);
		} catch (e) {
			console.log(e);
			msg.author.send(e)
				.catch(e => console.error(e)); //This needs to be changed eventually
		}
		deleteMessage(msg);
		break;
	case 'elimina':
		try {
			let unit = removeUnit(args[1], msg.guild.id);
			sendTempMessage("Eliminato " + unit[0].name + " dalla tabella.", channel);
		} catch (e) {
			console.log(e);
			msg.author.send(e)
				.catch(e => console.error(e));
		}
		deleteMessage(msg);
		break;
	case 'scambia':
		try {
			switchUnits(args[1], args[2], msg.guild.id);
			sendTempMessage("Ordine scambiato.", channel);
		} catch (e) {
			console.log(e);
			msg.author.send(e)
				.catch(e => console.error(e));
		}
		deleteMessage(msg);
		break;
	case 'rinomina':
		try {
			nameUnit(args[1], args.slice(1).join(' '), msg.guild.id);
			sendTempMessage("Unità rinominata.", channel);
		} catch (e) {
			console.log(e);
			msg.author.send(e)
				.catch(e => console.error(e));
		}
		deleteMessage(msg);
		break;
	case 'ordine':
		try {
			msg.channel.send(format_order(msg.guild.id))
				.catch(e => console.error(e));
		} catch(e) {
			console.log(e);
			msg.author.send(e)
				.catch(e => console.error(e));
		}
		deleteMessage(msg);
		break;
	case 'pulisci':
		initiative_table[msg.guild.id] = [];
		deleteMessage(msg);
		break;
	}
}

