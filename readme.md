🌦 Discord Weather Bot
A simple Discord bot that provides weather updates for any city using the OpenWeatherMap API.


🚀 Features
Responds with a greeting and usage instructions when a user types "hello".
Fetches live weather data when a user types !weather <city_name>.
Provides temperature, wind speed, humidity, and weather conditions.
🛠 Setup Instructions


1️⃣ Clone the Repository
git clone https://github.com/sreeraj2004/Weather-bot/
cd weather-bot


2️⃣ Install Dependencies
npm install


3️⃣ Create a .env File
Inside the project folder, create a .env file and add the following:
CLIENT_TOKEN=your_discord_bot_token
WEATHER_API_KEY=your_openweathermap_api_key
🔹 Replace your_discord_bot_token with your Discord bot token.
🔹 Replace your_openweathermap_api_key with your OpenWeatherMap API key.


4️⃣ Run the Bot
node app.js


📜 Usage
Command	Description
hello	The bot greets the user and provides instructions.
!weather <city>	Fetches weather details for the specified city.
Example:
!weather London


🔧 Technologies Used
Node.js
Discord.js
Axios
Dotenv
OpenWeatherMap API
🎯 To-Do
Add support for more weather details.
Implement error handling for invalid city names.
Enhance response formatting with embeds.


🤝 Contributing
Feel free to submit a pull request or open an issue for suggestions and improvements.


📜 License
This project is open-source and available under the MIT License.