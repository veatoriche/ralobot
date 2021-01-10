const http = require('request-promise')
require('dotenv').config();

const options = (coinName) => {
  return {
    url: `https://api.bithumb.com/public/ticker/${coinName}_KRW`,
    method: 'GET'
  }
};

module.exports = {
	name: '코인시세',
	description: '비트코인 시세',
	async execute(msg, args) {
    if (args.length < 3) {
      msg.channel.send('코인의 이름을 입력해주세요. ex) `!랄로 코인시세 BTC`');
      return;
    }

    try {
      const result = await http.get(options(args[2]));
      const resultJson = JSON.parse(result);

      messageBody = `**${args[2]}의 가격 정보**\n\n`

      messageBody += `*00시 기준 시가* : **${resultJson.data.opening_price} KRW**\n`
      messageBody += `*00시 기준 종가* : **${resultJson.data.closing_price} KRW**\n`
      messageBody += `*00시 기준 고가* : **${resultJson.data.max_price} KRW**\n`
      messageBody += `*00시 기준 저가* : **${resultJson.data.min_price} KRW**\n`
      msg.channel.send(messageBody);
    } catch (e) {
      console.log(e);
    }
  },
};