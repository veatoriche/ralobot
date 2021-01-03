module.exports = {
	name: '이상형',
	description: '랄로의 이상형이 누군지 물어봅니다.',
	execute(msg, args) {
		const template = require('../templates/embed')
		msg.channel.send(template.scar)
	},
};