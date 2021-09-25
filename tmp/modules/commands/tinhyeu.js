const fs = require("fs");
module.exports.config = {
	name: "tình yêu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "bắn cung",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tình yêu")==0 || (event.body.indexOf("tình yêu")==0)) {
		var msg = {
				body: "Thứ đắt nhất là niềm tin \nRẻ nhất là lời hứa",
				attachment: fs.createReadStream(__dirname + `/noprefix/tinhyeu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}