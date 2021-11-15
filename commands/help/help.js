const {MessageEmbed, Message} = require('discord.js');
const config = require('../../config.json');
const fs = require('fs');

module.exports = {
    name: 'help',
    run: async ( client , message , arg ) => {
        const embed = new MessageEmbed()
        .setTitle('**📝Danh sách lệnh bot discord📝**')
        .setDescription(`***Sử dụng lệnh bằng cách [ ${config.prefix}help<... ]***`)
        .setThumbnail(`https://i.pinimg.com/originals/35/b2/5a/35b25ac379b8e771bbd3fd956f4d31bb.gif`)
        .addField('**👑Lệnh ADMINISTRATOR**', `Dùng lệnh [ ${config.prefix}help<admin ] để biết thêm`)
        //.addField('**🎤Lệnh Text to speak**' , ` Dùng lệnh [ ${config.prefix}help<tts ] để biết thêm `)
        .addField('**🎧Lệnh Nghe nhạc**' , `Dùng lệnh [  ${config.prefix}help<music ] để biết thêm `)
        //.addField('**🔊Lệnh Voice**' , `Dùng lệnh [ ${config.prefix}help<voice ] để biết thêm `)
        .addField('**🎮Game**' , `\` dùng lệnh [ ${config.prefix}help<game ] để biết thêm tính năng`)
        .addField('**👾Lệnh avatar**' , `Dùng lệnh [  ${config.prefix}help<avatar ] để biết thêm `)
        .addField('**🔼Sẽ Uploaded thêm**' , `Đang admin đang cập nhật các tính năng mới `)        
        .addField('**Cảm ơn các bạn đã sử dụng bot của Bee**' , '**Chúc bạn 1 ngày mới vui vẻ và đầy sức khoẻ❤**')
        .setFooter('📢Bot thuộc quyền sở hữu bởi Bee✔️')
        .setColor('RANDOM')
        return message.channel.send(embed);
    }
}