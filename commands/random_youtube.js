const http = require('request-promise')
require('dotenv').config();

const options = {
  url: "https://www.googleapis.com/youtube/v3/playlistItems",
  method: 'GET',
  qs: {
    key: process.env.KEY,
    playlistId: 'UUD2YO_A_PVMgMDN9jpRrpVA',
    maxResults: 50,
    part: 'contentDetails'
  }
};  

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
	name: '영상',
	description: '최근 50개의 영상 중 랜덤한 랄로 영상 링크를 받습니다.',
	async execute(msg, args) {
    try {
      const result = await http.get(options);
      const randomVideo = randomChoice(JSON.parse(result).items);

      messageBody = "랄로가 직접 뽑은 랜덤 영상\n\n";
      messageBody += "https://www.youtube.com/watch?v=" + randomVideo.contentDetails.videoId;
      msg.channel.send(messageBody);
    } catch (e) {
      console.log(e);
    }
	},
};