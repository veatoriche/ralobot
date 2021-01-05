const template = require('../templates/embed')

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
	name: '참참참',
	description: '랄로랑 참참참하기 `!랄로 참참참 [왼쪽, 오른쪽, 가운데]`로 사용',
	execute(msg, args) {
    const chamList = ['왼쪽', '오른쪽', '가운데'];

    if (args.length !== 3) {
      msg.channel.send('참참참 항목을 정확히 입력해주세요. ex) `!랄로 룰렛 [왼쪽, 오른쪽, 가운데]`');
      return;
    }

    if (!chamList.includes(args[2])) {
      msg.channel.send('참참참 항목을 정확히 입력해주세요. ex) `!랄로 룰렛 [왼쪽, 오른쪽, 가운데]`');
      return;
    }

    const result = randomChoice(chamList);
    
    let imgMessage = null;

    if (result == '왼쪽') imgMessage = template.left;
    if (result == '오른쪽') imgMessage = template.right;
    if (result == '가운데') imgMessage = template.front;

    msg.channel.send(imgMessage);

    if (result == args[2]){
      msg.channel.send(`${msg.author.username}가 이겼습니다!`);
    } else {
      msg.channel.send('랄로가 이겼습니다!');
      msg.reply('컷.');
    }
  } 
};