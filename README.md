<p align="center">
  <img src="" />
</p>

# Shiesuta Discord Music Bot

A modern Discord music bot powered by **Discord.js**, **Kazagumo**,
**Shoukaku**, and **Lavalink**.

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

## Installation

Clone the repository:

``` bash
git clone https://github.com/USERNAME/Shiesuta.git
cd Shiesuta
```

Install dependencies:


### Bun

``` bash
bun install
```

### NPM

``` bash
npm install
```

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

> **Never publish your bot token.** Add `config.json` to `.gitignore`.

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

___

## Spotify

Spotify support can be provided through:

``` text
kazagumo-spotify
```

Spotify integration generally resolves Spotify tracks/playlists to
playable sources through Lavalink rather than directly streaming Spotify
audio.

If your Lavalink source configuration requires additional plugins or
source configuration, configure those on the Lavalink server.

___

## Running

### Bun

Development:

``` bash
bun --watch index.js
```

Production:

``` bash
bun index.js
```

### Node.js

Development:

``` bash
node --watch index.js
```

Production:

``` bash
node index.js
```

___

## Environment & Security

Do not commit secrets such as:

-   Discord bot tokens
-   Lavalink passwords
-   Spotify credentials
-   API keys

Recommended `.gitignore`:

``` gitignore
node_modules/
config.json
.env
.env.*
*.log
```

Use `config.example.json` for public configuration templates.

___

## Tech Stack

<p>
  <a href="https://bun.sh/">
    <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  </a>
  <a href="https://discord.js.org/">
    <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js">
  </a>
  <a href="https://takiyo0.github.io/Kazagumo/">
    <img src="https://img.shields.io/badge/Kazagumo-111111?style=for-the-badge&logo=musicbrainz&logoColor=white" alt="Kazagumo">
  </a><br>

  <a href="https://github.com/shipgirlproject/Shoukaku">
    <img src="https://img.shields.io/badge/Shoukaku-111111?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Shoukaku">
  </a>
  <a href="https://lavalink.dev/">
    <img src="https://img.shields.io/badge/Lavalink-FFCC00?style=for-the-badge&logo=apache&logoColor=black" alt="Lavalink">
  </a>
  <a href="https://www.npmjs.com/package/kazagumo-spotify">
    <img src="https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify">
  </a>
</p>

## Development

Install dependencies:

``` bash
bun install
```

Start in watch mode:

``` bash
bun --watch index.js
```

Before deploying, verify:

1.  Discord bot token is valid.
2.  Lavalink is online.
3.  Lavalink credentials match the bot configuration.
4.  The bot can connect to the target voice channel.
5.  Required Discord intents are enabled.


___