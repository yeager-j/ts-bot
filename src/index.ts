import * as Discord from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('I am alive!!');
  }
});

client.login(process.env.TOKEN);