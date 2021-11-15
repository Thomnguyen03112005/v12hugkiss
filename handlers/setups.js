const config = require("../config.json")

module.exports = (client) => {
   
    let stateswitch = false;
     client.on("ready", () => {
        console.log(`${client.user.username} đã sẵn sàng hoạt động!`)
         setInterval(() => {
            stateswitch = !stateswitch; //thay đổi trạng thái
            if (stateswitch) client.user.setActivity(`${config.prefix}help để xem chi tiết các lệnh✔`, { type: "PLAYING" });
            else client.user.setActivity(`${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} Thành viên🤡`, { type: "PLAYING" });
            if (stateswitch) client.user.setActivity(`Hãy cùng lắng nghe lời tôi nói🎧`, { type: "LISTENING" });
            else client.user.setActivity(`Chúc Bạn 1 ngày mới vui vẻ❤`, { type: "PLAYING"});
            if (stateswitch) client.user.setActivity(`Bot thuộc sở hữu Bee🐝`, { type: "PLAYING" });
            else client.user.setActivity(`Code by Thowm!`, { type: "PLAYING"}); //ok chua?
         }, 8000); 
     
        
    });
}