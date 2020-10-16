const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const fetch = require('node-fetch');
let jsoning = require('jsoning');
let database = new jsoning("sql.json");


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  var content = "!help";

  if(msg.content.includes(content) !== false){
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Help')
    .setURL('https://discord.riverside.rocks')
    .setDescription('Learn about how to use this fine bot.')
    .setThumbnail('https://images.fineartamerica.com/images-medium-large/international-biohazard-symbol-.jpg')
    .addField('!help', 'Shows this message', true)
    .addField('!lookup *id*', 'Returns the ammount of times a user was found in our database.', true)
    .setTimestamp()  
    channel.send(exampleEmbed);
  }

  var content = "!lookup";

  if(msg.content.includes(content) !== false){
      var id = msg.content.substr(8);
      console.log(id+" was requested.")
      fetch('https://discord.riverside.rocks/check.json.php?id='+id)
    .then(res => res.json())
    .then(json => {

    
        if(json.reports !== ""){
            if(typeof json.reports == 'undefined'){
                msg.reply("Invalid user.")
            }else{
                msg.reply(`User requested has **${json.reports}** reports and has an abuse score of **${json.score}**. See more about ths user at https://discord.riverside.rocks/check?id=${id} . If you feel that this user is abusive, please report them at https://discord.riverside.rocks/report?id=${id} .`)
            }
        }else{
            msg.reply("Invalid user.")
        }
    })

  }
  var rep = "!report";

  if(msg.content.includes(rep) !== false){
    var id = msg.content.substr(7);
      if(db.has(message.guild.id)){
        if(!msg.guild.member(msg.author).hasPermission('MANAGE_MESSAGES')){
          msg.reply("We are sorry, but you do not have the permisions to do this.")
        }else{
          msg.reply("POST")
        }
      }else{
        if(id == ""){
          msg.reply("This server does not have an API key assciated with it. In a secure channel, please use with command with your API key. (ex. `!report abcdefg`) To get your accounts API Key, sign in at https://discord.riverside.rocks/login and view it on the dashboard.");
        }else{
          await db.push(message.guild.id, id);
          msg.reply("Your API key has been saved.");
        }
      }
    })
  }
});

client.login(process.env.TOKEN);
