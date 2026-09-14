<p align="center">
  <img
    width="2048"
    height="877"
    alt="Shiesuta"
    src="https://github.com/user-attachments/assets/b57d67da-9dc7-46a9-84a8-87008f567691"
  />
</p>

<h1 align="center">Shiesuta Music Bot</h1>

<p align="center">
  A modern Discord music bot powered by
  <strong>Discord.js</strong>,
  <strong>Kazagumo</strong>,
  <strong>Shoukaku</strong>, and
  <strong>Lavalink</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js">
  <img src="https://img.shields.io/badge/Lavalink-FFCC00?style=for-the-badge&logoColor=black" alt="Lavalink">
  <img src="https://img.shields.io/badge/Kazagumo-111111?style=for-the-badge" alt="Kazagumo">
</p>



___

## Features

-   🎵 Music playback through Lavalink
-   🔎 Search by song title or URL
-   📋 Queue support
-   ⏯️ Play / pause / resume
-   ⏭️ Skip tracks
-   ⏹️ Stop and destroy the player
-   🎧 Discord voice channel support
-   🎶 Spotify integration through `kazagumo-spotify`
-   ⚡ Powered by Bun or Node.js
-   🖥️ Designed for VPS / game-panel hosting environments

___

## Requirements

Before running the bot, make sure you have:

-   [Node.js](https://nodejs.org/) 20+ **or** [Bun](https://bun.sh/)
-   A Discord application and bot token
-   A running **Lavalink v4** server
-   A Discord bot with the required intents enabled

### Required Discord Intents

Enable these intents in the Discord Developer Portal:

-   `Guilds`
-   `Guild Voice States`
-   `Guild Messages`
-   `Message Content`

___


## Configuration

Create `config.json`:

``` json
{
	"token": "YOUR_BOT_TOKEN",
	"prefix": ".",
	"defaultLang": "en",
	"nodes": [
		{
			"name": "main",
			"url": "localhost:80",
			"auth": "youshallnotpass",
			"secure": false
		}
	],
	"spotify": {
		"clientId": "YOUR_SPOTIFY_CLIENT_ID",
		"clientSecret": "YOUR_SPOTIFY_CLIENT_SECRET",
		"searchMarket": "ID"
	},
	"donate": {
		"url": "https://saweria.co/Saturiaaa",
		"chance": 0.1
	}
}
```

> [!IMPORTANT]
> **Never publish your bot token.** Add `config.json` to `.gitignore`.



___

## Quick Start

``` bash
# Clone the repository
git clone https://github.com/USERNAME/Shiesuta.git
cd Shiesuta

# Copy the default configuration file
cp config.json.example config.json

# Install dependencies
npm install

# Start the bot
npm start
```

___


## Lavalink

This bot uses Lavalink as the audio server.

Example node configuration:

``` js
const Nodes = [
  {
    name: "main",
    url: "127.0.0.1:2333",
    auth: "youshallnotpass",
    secure: false
  }
];
```

Make sure the address, port, password, and `secure` setting match your
Lavalink server.

For production, it is recommended to keep Lavalink credentials outside
public source code and load them from environment variables.

___

## Project Structure

``` text
Shiesuta/
├── assets/
│   └── saturiahost-logo-transparent.png
├── index.js
├── config.json
├── config.example.json
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

___

## Available Commands

  Command           Description
  ----------------- --------------------------------------
  `.play <query>`   Play or queue a song
  `.skip`           Skip the current track
  `.pause`          Pause playback
  `.resume`         Resume playback
  `.stop`           Stop playback and destroy the player

Examples:

``` text
.play Never Gonna Give You Up
.play https://www.youtube.com/watch?v=...
.pause
.resume
.skip
.stop
```

---

## 🎧 Supported Sources

<p align="center">
  <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" />
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Spotify-green?style=for-the-badge&logo=spotify&logoColor=white" />
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/SoundCloud-orange?style=for-the-badge&logo=soundcloud&logoColor=white" />
  &nbsp;&nbsp;
  <img src="https://img.shields.io/badge/Apple%20Music-black?style=for-the-badge&logo=applemusic&logoColor=white" />
</p>

---

## 💖 Support

If you enjoy **Shiesuta** and want to support its development:



  <a href="https://trakteer.id/saturiaaa">
    <img
      src="https://trakteer.id/favicon/apple-touch-icon.png?id=9b4f9075447b25db37b9f204678cbc19"
      width="32"
      height="32"
      align="middle"
    />
    <strong>&nbsp;Trakteer</strong>
  </a>

  &nbsp;&nbsp;&nbsp;

  <a href="https://saweria.co/Saturiaaa">
    <img
      src="https://saweria.co/favicon.ico"
      width="32"
      height="32"
      align="middle"
    />
    <strong>&nbsp;Saweria</strong>
  </a>

  &nbsp;&nbsp;&nbsp;

  <a href="https://sociabuzz.com/saturiaaa">
    <img
      src="https://storage.sociabuzz.com/storage/account/image/logo.png"
      width="32"
      height="32"
      align="middle"
    />
    <strong>&nbsp;Sociabuzz</strong>
  </a>


---



<p align="center">
  Made with ❤️ for the Discord community.
</p>

<p align="center">
  <strong>Shiesuta Music Bot</strong>
</p>