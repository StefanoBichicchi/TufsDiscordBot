const fs = require ('fs');
const path = require('path');
const { MessageAttachment } = require('discord.js')

module.exports = {
	name: "lutmeme",
	description: "Invia un meme di LUT",
	execute: msg => {
		let imgs = fs.readdirSync(path.join(__dirname, "..", "assets", "img"));
		let n = getRandomInt(0, imgs.length);

		let image = fs.readFileSync(path.join(__dirname, "..", "assets", "img", imgs[n]))

		let attachment = new MessageAttachment(image, 'LUTMeme' + path.extname(imgs[n]));

		msg.channel.send("Beccati sto meme!", attachment)
			.catch(e => console.error(e));
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}