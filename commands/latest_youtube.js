const http = require('request-promise')
const config = require('../config.json')

const options = {
  url: "https://www.googleapis.com/youtube/v3/playlistItems",
  method: 'GET',
  qs: {
    key: config.key,
    playlistId: 'UUD2YO_A_PVMgMDN9jpRrpVA',
    maxResults: 1,
    part: 'contentDetails'
  }
};

module.exports = {
	name: '최신영상',
	description: '가장 최신 랄로 영상 주소를 가져옵니다.',
	async execute(msg, args) {
    try {
      const result = await http.get(options);
      const latestVideo = JSON.parse(result).items[0];

      messageBody = "♚♚최신 영상 of 랄☆로♚♚시청시$$전원 롤스킨☜☜100%증정※ \n\n";
      messageBody += "https://www.youtube.com/watch?v=" + latestVideo.contentDetails.videoId;
      msg.channel.send(messageBody);
    } catch (e) {
      console.log(e);
    }
	},
};