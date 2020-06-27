const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
console.log('Lendo .env');
dotenv.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}else if (message.content === '!user-info') {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}else if (message.author.username === process.env.USER_1) {
		message.channel.send('olar Judith');
	}else if (message.author.username === process.env.USER_2) {
		message.channel.send('Perdeu a referencia?');
	}
});
