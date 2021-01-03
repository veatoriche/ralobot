const fs = require('fs')

module.exports = {
	name: 'help',
	description: '사용할 수 있는 커맨드를 설명합니다.',
	execute(msg, args) {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    message = '=======================================';
    message += '\n랄로 봇에서 사용할 수 있는 명령어 목록입니다.\n\n!랄로 [명령어] [option]으로 사용합니다.\n\n\t명령어\t\t\t\t설명';

    for (const file of commandFiles) {
      const command = require(`./${file}`);
      message += `\n+ **${command.name}**\t\t\t\t*${command.description}*`;
    }

    message += '\n=======================================';
    msg.channel.send(message);
	},
};