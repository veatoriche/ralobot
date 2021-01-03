module.exports = {
	name: '웃어',
	description: '활짝',
	execute(msg, args) {
		const template = require('../templates/embed')
		msg.channel.send(template.smile)
	},
};