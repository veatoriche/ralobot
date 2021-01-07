const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const client = new Discord.Client();
client.commands = new Discord.Collection();

// commands안의 모든 파일을 command로 등록
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  // 작성자가 봇이거나 prefix가 붙지 않은 명령어 무시
  if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

  const args = msg.content.split(' ');
  const command = args[1];

  try {
    client.commands.get(command).execute(msg, args);
  } catch (error) {
    console.log(error)
    msg.reply('네 해드렸습니다.');
  }
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`${member} 어서오고.`);
  });

client.login(process.env.TOKEN);