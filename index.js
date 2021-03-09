const express = require("express");
const app = express();

app.listen(() => console.log("tax by badboy"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
//لا تلعب اي شي في الكود



const prefix = "-"
const developers = "ايديك"
/////////////

let probot1 = JSON.parse(fs.readFileSync("./probot1.json", 'utf8'));

const probot = require("probot-tax");
client.on("message", badboy => {
    if(badboy.content.startsWith(prefix + 'tax')) {
      const args = badboy.content.split(" ").slice(1).join(" ")
      if(!args) return badboy.channel.send("اكتب الرقم")
badboy.channel.send(`
المبلغ ${args}
مع الضريبة المبلغ يصير ${probot.taxs(args)}

`)
probot1[badboy.author.username] = {
the_number_excluding_the_tax : args,
amount_with_tax : probot.taxs(args)
}
fs.writeFile("./probot1.json", JSON.stringify(probot1,null,5), (err) => {
if(err)
console.error(err);
 
})
    }
})






// تعين حالة للبوت بامر
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "setstatus")){
        if(badboy.author.id !== '740181687874486324') return badboy.channel.send("عادي تحرك لاني مشغول ؟؟")

    const args = badboy.content.split(" ").slice(1).join(" ")
    if(!args) return badboy.reply("اكتب الحالة الجديدة")
 badboy.channel.send("done")
 client.user.setActivity(args)

}
})





// كود بنق البوت
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "ping")){
    var embed = new Discord.MessageEmbed()
    .setTitle('Bot Ping')
    .addField("My Ping", `${client.ws.ping}  `)
    .setThumbnail(`${client.user.displayAvatarURL()}`)
    .setColor("BLUE")
.setFooter(`Requsted By ${badboy.author.username}`, badboy.author.displayAvatarURL({dynamic : true}))
    badboy.channel.send(embed)
  }
})



// تعين افاتار للبوت عن طريق امر
client.on('message', badboy  => {
  if(badboy.content.startsWith(prefix + "setavatar")){
        if(badboy.author.id !== '740181687874486324') return badboy.channel.send("عادي تحرك لاني مشغول ؟؟")
      var avatar = badboy.content.split(" ")[1];
      if(!avatar) return badboy.channel.send("حط رابط الافاتار الجديد")
      badboy.channel.send("تم")
badboy.delete()
    client.user.setAvatar(avatar);
    
    }
    });



client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "bot")){
    var embed = new Discord.MessageEmbed()
.setDescription(`[can make like this bot from here](https://repl.it/@badboya/probot-tax-by-badboy#index.js)`)
.setColor("BLUE")
.setFooter(`req by ${badboy.author.username}`)
badboy.channel.send(embed)

  }
})
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "sup")){
    var embed = new Discord.MessageEmbed()
.setDescription(`[server support](https://discord.gg/wMD6cNvCtU)`)
.setColor("BLUE")
.setFooter(`req by ${badboy.author.username}`)
badboy.channel.send(embed)

  }
})
client.login(process.env.token);