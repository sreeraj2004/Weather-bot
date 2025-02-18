require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (msg) => {
    if (msg.author.bot) return; // Ignore bot messages

    if (msg.content.toLowerCase() === 'hello') {
        return msg.reply(`👋 Hello ${msg.author.username}! I am a weather bot.  
        🌤 To get weather updates, type:  
        \`!weather <city_name>\`  
        Example: \`!weather London\``);
    }

    // Weather Command
    if (msg.content.startsWith('!weather')) {
        const args = msg.content.split(' ');
        if (args.length < 2) {
            return msg.reply("Please provide a city name. Example: `!weather London`");
        }
        
        const city = args.slice(1).join(' '); // Extract city name
        
        try {
            const response = await axios.get(`${BASE_URL}`, {
                params: {
                    q: city,
                    appid: WEATHER_API_KEY,
                    units: 'metric'
                }
            });

            const weatherData = response.data;
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const humidity = weatherData.main.humidity;
            const windSpeed = weatherData.wind.speed;

            msg.reply(`🌤 **Weather in ${city}:**
            - 🌡 Temperature: ${temperature}°C
            - 🌬 Wind Speed: ${windSpeed} m/s
            - 💧 Humidity: ${humidity}%
            - 🌥 Condition: ${description}`);
        } catch (error) {
            msg.reply("❌ Unable to fetch weather. Check city name and try again.");
        }
    }
});

client.login(process.env.CLIENT_TOKEN).catch(err => {
    console.error("Failed to login:", err);
});
