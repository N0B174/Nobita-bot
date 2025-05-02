module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐌𝐃 𝐘𝐨𝐮𝐬𝐮𝐟 𝐀𝐥𝐢 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐍 𝐎 𝐁 𝐈 𝐓 𝐀
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐁𝐨𝐠𝐮𝐫𝐚, 𝐑𝐚𝐣𝐬𝐚𝐡𝐢, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡 
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐁𝐨𝐠𝐮𝐫𝐚, 𝐑𝐚𝐣𝐬𝐚𝐡𝐢, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡 
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟔
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : nobita.csd@gmail.com
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : t.me/nobitafromicec
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/T.nobita.csd`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGyqDQi0nNJuRsIWR_TtfXCTmqtTXEUSrsCiIxlj4u574wPsgTxmDhg5OEcE6MWOdQFTZfJiF9Y0hr7D3up9if2bZ0IgRRk2PPN_BUMK55HZ6vTIdoH-pgAuVyKrVDGToN-ItRT6dT_8neU8pXcCH3GzckxTn5ojbaJoX-KWsFxYh9G4sWpwAhWxencuQ/s480/1000005757.jpg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };