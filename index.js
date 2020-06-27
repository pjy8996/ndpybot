const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format");
const welcomeChannelName = "🎉입장-퇴장🎉";
const byeChannelName = "🎉입장-퇴장🎉";
const welcomeChannelComment = "님! 안녕하세요!\n게임디코 서버에 오신것을 환영합니다!\n저희 서버는 보안강도가 __중간__ 으로 설정 되어 있습니다\n이메일인증및, 디스코드 가입 5분이 지나야 합니다!";
const byeChannelComment = "님..안녕히가세요 다음에 만나요!";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '!help를 쳐보세요.' }, status: 'online' })

  let state_list = ['!도움 을 쳐보세요^^','곰용#7777 제작','고묭고묭.......!!','정상작동','고묭! (정상!)...!',]
  let state_list_index = 1;
  let change_delay = 3000; // 이건 초입니당. 1000이 1초입니당.

  function changeState() {
    setTimeout(() => {
      console.log( '상태 변경 -> ', state_list[state_list_index] );
      client.user.setPresence({ game: { name: state_list[state_list_index] }, status: 'online' })
      state_list_index += 1;
      if(state_list_index >= state_list.length) {
        state_list_index = 0;
      }
      changeState()
    }, change_delay);
  }

  changeState();
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;
  

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == '!비용') {
    return message.reply('https://cdn.discordapp.com/attachments/716485518778564618/719372195146760223/EBA98DECB2ADEBB984EC9AA9EC8B9CEBB09CEBB984EC9AA9ECB59CECA285.png');
  }

  if(message.content == '!비용') {
    return message.reply('https://cdn.discordapp.com/attachments/716485518778564618/719372195146760223/EBA98DECB2ADEBB984EC9AA9EC8B9CEBB09CEBB984EC9AA9ECB59CECA285.png');
  }

  if(message.content == '!봇SPV') {
    let embed = new Discord.RichEmbed()
    let img = 'https://cdn.discordapp.com/attachments/704981754116833340/715941524751384707/download20200504193638.png';
    var duration = moment.duration(client.uptime).format(" D [일], H [시간], m [분], s [초]");
    embed.setColor('#186de6')
    embed.setAuthor('곰용 (GY) BOT 시스템 사용량', img)
    embed.setFooter(`곰용 BOT ❤️`)
    embed.addBlankField()
    embed.addField('RAM usage',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('running time', `${duration}`, true);
    embed.addField('user',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('server',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('Discord.js',   `v${Discord.version}`, true);
    embed.addField('Node',         `${process.version}`, true);

    embed.setTimestamp()
    message.channel.send(embed);
  }

  if(!message.guild) {
    console.log(message.content)
  }

  if(message.content == '!봇 재시작') {
    let img = 'https://cdn.discordapp.com/attachments/716485518778564618/717260766302044200/download20200504193638.png';
    let embed = new Discord.RichEmbed()
      .setColor('#00ffff')
      .setTitle('곰용 봇 재시작 완료!')
      .setURL('https://discord.com/oauth2/authorize?client_id=715540963321446412&scope=bot')
      .setAuthor('!곰용봇 초대! - ( 클릭! )', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.com/oauth2/authorize?client_id=715540963321446412&scope=bot')
      .setDescription('**곰용봇 재시작 메뉴**')
      .setURL('https://discord.com/oauth2/authorize?client_id=715540963321446412&scope=bot')
      .setURL('https://discord.com/oauth2/authorize?client_id=715540963321446412&scope=bot')
      .setThumbnail(img)
      .addBlankField()
      .addField('Discord.js', '상태 : 좋음\n수신 : 양호')
      .addField('NODE.js', '상태 : 빌드성공!\n수신 : 양호', true)
      .addField('PYthon', '상태 : 좋음\n수신 : 양호', true)
      .addField('PYcharm', '상태 : 빌드성공!\n수신 : 양호', true)
      .addField('호스팅 상태', 'HEROKU호스팅 서비스 : 수신 | 양호\nAWS호스팅 서비스 : 수신 | 양호\nAzure호스팅 서비스 : 수신 | 양호')
      .addBlankField()
      .setImage('https://i.imgur.com/wSTFkRM.png')
      
      .setTimestamp()
      .setFooter('곰용봇 재시작 메뉴', 'https://i.imgur.com/wSTFkRM.png');

    message.channel.send(embed)
  } else if(message.content == '!도움') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '!도움', desc: '곰용 봇 도움말'},
      {name: '!봇 재시작', desc: '봇을 재시작 합니다'},
      {name: '!일반공지', desc: 'dm으로 전체 공지 보내기'},
      {name: '!임베드공지', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
      {name: '!청소', desc: '텍스트 지움'},
      {name: '!초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '!초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
      {name: '!봇SPV', desc: '봇의 시스템 사용량 표기'},
      {name: '!봇SPV', desc: '봇의 시스템 사용량 표기'},
      
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('곰용 BOT 도움말', helpImg)
      .setColor('#186de6')
      .setFooter(`곰용 BOT ❤`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '!초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
    } else if(message.content.startsWith('/임베드공지')) {
      if(checkPermission(message)) return
      if(message.member != null) { // 채널에서 공지 쓸 때
        let contents = message.content.slice('/임베드공지'.length);
        let embed = new Discord.RichEmbed()
          .setAuthor('고묭봇 공지')
          .setColor('#186de6')
          .setFooter(`고묭BOT ❤️`)
          .setTimestamp()
    
        embed.addField('**공지**: ', contents);
    
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(embed)
        });
    
        return message.reply('공지를 전송했습니다.');
      } else {
        return message.reply('채널에서 실행해주세요.');
      }
    } else if(message.content.startsWith('!일반공지')) {
      if(checkPermission(message)) return
      if(message.member != null) { // 채널에서 공지 쓸 때
        let contents = message.content.slice('!일반공지'.length);
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(`<@${message.author.id}> ${contents}`);
        });
    
        return message.reply('공지를 전송했습니다.');
      } else {
        return message.reply('채널에서 실행해주세요.');
      }
    } else if(message.content.startsWith('!청소')) {
      if(message.channel.type == 'dm') {
        return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
      }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 99까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @곰용 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);