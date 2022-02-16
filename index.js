const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const emojiChannelID = '926062158024937492';
client.on('ready', async () => {
    try {
      const channel = client.channels.get(emojiChannelID);
      if (!channel) return console.error('Invalid ID or missing channel.');
  
      const messages = await channel.fetchMessages({ limit: 100 });
  
      for (const [id, message] of messages) {
        await message.react('<:emoji_50:941696432736444526>');
      }
    } catch(err) {
      console.error(err);
    }
  });

  client.on('message', async message => {
    if (message.channel.id === emojiChannelID) {
      try {
        await message.react('<:emoji_50:941696432736444526>');
        // await message.react('✖');
      } catch(err) {
        console.error(err);
      }
    }
  });

client.login("TOKEN");