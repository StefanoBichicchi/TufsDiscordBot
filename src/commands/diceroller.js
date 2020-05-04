const { DiceRoller } = require('rpg-dice-roller/lib/umd/bundle');

module.exports = {
	name: 'tira',
	description: 'Tira un dado',
	execute: (msg, args) => {
		const Roller = new DiceRoller();
		const dice = args.join(' ');
		const response = Roller.roll(dice);

		msg.reply(response.output);
	},
};