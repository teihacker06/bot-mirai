module.exports.config = {
  name: "adm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://media.giphy.com/media/mf4qECoTz8ZVK/giphy.gif",
"https://media.giphy.com/media/AFdcYElkoNAUE/giphy.gif",
"https://media.giphy.com/media/6U47YlEnJQNeb05Csh/giphy.gif",
"https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
"https://media.giphy.com/media/TlDd1mxmPGQo/giphy.gif",
"https://media.giphy.com/media/6SpbCkTjqmsKs/giphy.gif",
"https://media.giphy.com/media/3o85xkQFBFZGLecJry/giphy.gif",
"https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
"https://media.giphy.com/media/a6pzK009rlCak/giphy.gif",
"https://i.pinimg.com/originals/0f/2d/b8/0f2db86540afb15dd763a99b9a248baf.gif",
"https://i.pinimg.com/originals/c6/9a/e2/c69ae2e4f239da4584b548b6dfe226ba.gif",
"https://i.pinimg.com/originals/58/1f/c7/581fc7b69f373c3cc2be99f58a840cfd.gif",
"https://i.pinimg.com/originals/be/e0/96/bee096e95d49eeb2e8539633388ca013.gif",
"https://i.pinimg.com/originals/9e/91/fe/9e91feda4e8cf0c5ddad28ee53c07f50.gif",
"https://i.pinimg.com/originals/f1/39/81/f13981f2dc628bbe208747caabdbddf3.gif",
"https://i.pinimg.com/originals/42/3c/9a/423c9a21fc58034aae78b7ebc2b62673.gif",
"https://media.giphy.com/media/1gOykJJoWktIkf2yuO/giphy.gif",
"https://4.bp.blogspot.com/-yAExPAr7JeA/WDaBRVuJwxI/AAAAAAALb7I/Dbvda0KD5uECF3_SBjsvkl2_mqP9_BweQCLcB/s1600/AS000834_17.gif",
  ];
  var callback = () => api.sendMessage({body:`梁ADMIN BOT梁
  👀 Tên: Phùng Đức Tài (daktei)
  ❎ Tuổi: 15
  👤 Giới tính: Nam
  🙄 Sinh ngày: 25-09-2006
  💫 Chiều cao / cân nặng: 1m74 / 55kg
  💘 Mối quan hệ: Hẹn hò
  😎 Quê quán: Nghệ An
  🤔 Nơi ở: Yên Thành
  ♓ Cung: Thiên Bình
  👫 Gu: Lùn cute, tóc dài hoặc ngắn, biết nấu cơm ko biết thì tập, lo lắng quan tâm vậy là đủ :)))
  🌸 Tính cách: Là một con người với niềm đam mê thử thách bản thân và muốn vượt qua giới hạn bản thân để đạt được mục tiêu của mình <3
  📱 Facebook: https://www.facebook.com/pdt206
📢 Lưu ý cho các qtv và tv trong box: 
- Vui lòng không spam khi sử dụng để tránh die bot
- Không sử dụng lệnh nhiều của lệnh đó
- Đừng chửi bot vì nó được lập trình tự động rời box
- Đừng report bot vì nó cute lắm ><
- Nếu bot ko hoạt động hay bị lỗi hay liên hệ qua sdt hoặc nhắn tin mess để được liên hệ trực tiếp với mình
=> Yêu mọi người nhiều lắm <3 hãy đồng hành cùng với bot và mình nhé <3
------------
✔Donate:
💳MB: Đã bẻ thẻ :>
💳GRIB: Đã bẻ thẻ :>
📲MoMo: 0349336137
----PĐT----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };