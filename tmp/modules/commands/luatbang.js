const fs = require("fs");
module.exports.config = {
	name: "Luật bang",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Bảo", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật box")==0 || (event.body.indexOf("luật box")==0)) {
		var msg = {
				body: "1:Yêu cầu tất cả thành viên phải thiểu năng.\n2:Tvm khi vô phải gt và set biệt danh theo mẫu<HBP+tên+năm sinh> sử tiểu sử (🐰𝑹𝑩𝑸👑)\n3:Không kéo men,không gây war,phải vui vẻ hòa đồng chăm tt .\n4:Không gửi những vd pic phản cảm18+,không spam, không leak dưới mọi hình thức \n5:Vào phải xin,ra cũng phải xin đoàng hoàng(lí do).\n6:Yêu cầu tất cả đều phải add < Phùng Đức Tài >",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}