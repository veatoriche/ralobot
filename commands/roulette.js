function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
	name: '룰렛',
	description: '룰렛 돌리기, `!랄로 룰렛 item1,item2,item3...`으로 사용',
	async execute(msg, args) {
    if (args.length < 3) {
      msg.channel.send('룰렛 항목을 입력해주세요. ex) `!랄로 룰렛 롤,밥,마라탕,마루쉐`');
      return;
    }

    if (args.length > 3) {
      msg.channel.send('룰렛 항목을 입력할 떄 공백을 넣지 말아주세요.');
      return;
      
    }
    items = args[2].split(',');

    let messageBody = '========================'
    messageBody += '\n!!룰렛을 돌립니다!!';
    messageBody += '\n';
    messageBody += '종목 : ' + items.join(', ');
    messageBody += '========================'

    msg.channel.send(`당첨된 항목 : **${randomChoice(items)}**!! 축하합니다!!`);
	},
};