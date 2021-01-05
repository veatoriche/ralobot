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

const leftTemplate = new Discord.MessageEmbed()
			.setTitle('췌아')
			.setColor('#FF3399')
			.setImage('https://d1oylbhrqjzo71.cloudfront.net/files/177b5f5c-ac08-4d78-8622-b8c121f11096.jpg?w=550');

const frontTemplate = new Discord.MessageEmbed()
			.setTitle('췌아')
			.setColor('#FF3399')
			.setImage('https://s3.orbi.kr/data/file/united2/ddfbb85604c94b198f580eb21bf27283.jpeg');

const rightTemplate = new Discord.MessageEmbed()
			.setTitle('췌아')
			.setColor('#FF3399')
			.setImage('https://image5jvqbd.fmkorea.com/files/attach/new/20191210/494354581/1787964531/2476139622/f8000518d133a8e2376db61f9307a772.jpg');

module.exports = {
	scar: scarTemplate,
	smile: smileTemplate,
	left: leftTemplate,
	right: rightTemplate,
	front: frontTemplate
}