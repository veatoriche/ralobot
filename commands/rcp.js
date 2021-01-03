function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
	name: '가위바위보',
	description: '랄로와 가위바위보',
	execute(msg, args) {
    const rcp = ['가위', '바위', '보'];
    const player = rcp.findIndex((el) => el === args[2]);
    const kk = randomChoice(rcp)
    const ralo = rcp.findIndex((el) => el === kk);

    if (player === -1) {
      msg.channel.send('가위 바위 보 중 하나를 선택하세요.');
      return;
    }

    msg.channel.send(`${msg.author.username}는 ${rcp[player]}를 냈다!`);
    msg.channel.send(`랄로는 ${rcp[ralo]}를 냈다!`);

    if (ralo === player) {
      msg.channel.send('비겼습니다.');
      return
    } else if ((player + 1) % 3 === ralo) {
      msg.channel.send('랄로가 이겼습니다.!');
      msg.reply('컷.');
    } else {
      msg.channel.send(`${msg.author.username}(이)가 이겼습니다!`);
    }
	},
};