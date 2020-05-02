import DiceRoller from "rpg-dice-roller";

module.exports = {
	name: "tira",
	description: "Tira un dado",
	execute: (msg, args) => {
		const Roller = new DiceRoller();
		let dice = args.join(" ");
		let response = Roller.roll(dice);

		msg.reply(response);
	},
};