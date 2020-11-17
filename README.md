# DangerousUserDB Bot (beta)

A simple bot to check the status of a Discord User on our site.

## Usage

`!lookup`: Looks up a user with our API. For example, if you wanted to look up a user with the ID of 1, then you would run `!lookup 1`.


`!report`: Report a user with our API. For example, if you wanted to report a user with the ID of 1, then you would run `!report 1`. You will need to have an account on discord.riverside.rocks or any instance of the DangerousUserDB to do this.


## Installation

Clone the repo. Then, install all packages:

`npm install`

Create a .env file with the following contents:

```
TOKEN=
```

After the equal sign, paste your bot token. Start the bot by running:

`node .`
