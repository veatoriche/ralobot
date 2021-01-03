function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
	name: '가위바위보',
	description: '랄로와 가위바위보합니다. ``!랄로 가위바위보 [가위/바위/보]``로 사용',
	execute(msg, args) {
    const rcp = ['가위', '바위', '보'];
    const player = rcp.findIndex((el) => el === args[2]);
    const kk = randomChoice(rcp);
    const ralo = rcp.findIndex((el) => el === kk);
    let message = '';

    if (player === -1) {
      message += '가위 바위 보 중 하나를 선택하세요.';
      msg.channel.send(message);
      return;
    }
    message += `${msg.author.username}는 ${rcp[player]}를 냈다!`;
    message += `\n랄로는 ${rcp[ralo]}를 냈다!`;

    if (ralo === player) {
      message += '\n비겼습니다.';
      msg.channel.send(message);
    } else if ((player + 1) % 3 === ralo) {
      message += '\n랄로가 이겼습니다.!';
      msg.channel.send(message);
      msg.reply('컷.');
    } else {
      message += `\n${msg.author.username}(이)가 이겼습니다!`;
      msg.channel.send(message);
    }
	},
};