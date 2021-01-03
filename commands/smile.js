module.exports = {
	name: '웃어',
	description: '랄로가 웃습니다.',
	execute(msg, args) {
		const template = require('../templates/embed')
		msg.channel.send(template.smile)
	},
};