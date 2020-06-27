const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
console.log('Lendo .env');
dotenv.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.DISCORD_TOKEN);
