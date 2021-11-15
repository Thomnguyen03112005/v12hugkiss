const {MessageEmbed, Message} = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'helpmusic',
    aliases: ['help<music'],
    run: async ( client , message , arg ) => {
        const embed = new MessageEmbed()
        .setTitle('**📝Danh sách lệnh Help music📝**')
        .setDescription('***👋welcome Bro👋 ***')
        .setThumbnail(`https://i.pinimg.com/originals/cc/0e/d3/cc0ed34dd09adf414a19a69b460804f4.gif`)
        .addField('**🎧Lệnh Nhạc🎵***' , `\`
        | Play: [ Tên bài hát ] 
        |  Stop: [ Dừng bài hát ] 
        |  Loop: | lặp lại bài hát 
        | np: [ lệnh phát bài hát ngay ] 
        | lyrics: [ Lời bài hát ] 
        | connect: [ kết nối room ] 
        | disconnect: [ ngắt kết nối ] 
        | pause: [ dừng bài hát] 
        | remuse: [ tiếp tục phát ] 
        | queue: [ danh sách bài hát ] 
        | remove: [ xoá bài hát trong danh sách ] 
        | shuffle: [ xáo trộn phát bài hát ] 
        | Skip: [ bỏ qua bài hát ] 
        | Skipto [ bỏ qua bài hát trong danh sách ] 
        | volume: [ Chỉnh âm lượng ]\``)
        .addField('**Cảm ơn các bạn đã sử dụng bot của Bee🙏**' , '**Chúc bạn 1 ngày mới vui vẻ và đầy sức khoẻ❤**')
        .setFooter('📢Bot thuộc quyền sở hữu bởi Bee✔️')
        .setAuthor(message.author.tag , message.member.user.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor('RANDOM')
        return message.channel.send(embed);
    }
}