const fs = require("fs");
module.exports.config = {
	name: "school",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "school",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("School")==0 || (event.body.indexOf("school")==0)) {
		var msg = {
				body: "Tao học đây nhé:)",
				attachment: fs.createReadStream(__dirname + `/noprefix/school.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}