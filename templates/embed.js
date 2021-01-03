const Discord = require('discord.js');

const scarTemplate = new Discord.MessageEmbed()
      .setColor('#0099ff')
			.setTitle('말을아끼겠습니다...')
			.setURL('https://youtu.be/Rc8CSYe6INs?t=131')
			.setDescription('그러니까 내가 누군가를 좋아한다는 사실이 그 사람에게는 상처가 될 수도 있잖아요...')

const smileTemplate = new Discord.MessageEmbed()
			.setTitle('활짝')
			.setColor('#FF3399')
			.setImage('https://s3.orbi.kr/data/file/united2/ddfbb85604c94b198f580eb21bf27283.jpeg');

module.exports = {
	scar: scarTemplate,
	smile: smileTemplate
}