const { Client, Message, MessageEmbed } = require ("discord.js");
const glob = require("glob");
module.exports = {
    name: "reload",
    run: async (client , message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("❌\`Bạn nên có quyền quản trị để sử dụng lệnh này!\`")
        }
        if (message.author.id !== "749968113134469190") 
            return messsage.channel.send("\`Bắt đầu quá trình khởi động lại bot\`🔄")
        client.commands.sweep(() => true)
        glob(`${__dirname}/../**/*.js` , async (err, filePaths) => {
            if (err) return console.log(err);
            filePaths.forEach((file) => {
        delete require.cache[require.resolve(file)];

        const pull = require(file);
        if(pull.name) {
            console.log(`Reloaded ${pull.name} (cmd)`);
            client.commands.set(pull.name, pull);

        }
        if(pull.aliases && Array.isArray(pull.aliases)) {
            pull.aliases.forEach((alias) => {
                
            client.aliases.set(alias, pull.name);
            });
        }

            });
        
        });
        message.channel.send('\`Khởi động lại bot thành công\`✅')
    }
};