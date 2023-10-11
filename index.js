import { REST, Routes } from 'discord.js'
import { Client, GatewayIntentBits } from 'discord.js'
import TOKEN from "./token.js"
import lvlsys from "./levelsystem.js"
const CLIENT_ID = "1161699903697858672"
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] })

lvlsys()

//commands
import levelsCmd from "./commands/levels.js"

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: "level",
        description: "Displays your level"
    }
]

const rest = new REST({ version: '10' }).setToken(TOKEN)

try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands })

    console.log('Successfully reloaded application (/) commands.')
} catch (error) {
    console.error(error)
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (interaction.isChatInputCommand()) {
        switch (interaction.commandName) {
            case "level":
                levelsCmd(interaction)
                break;
        }

    }
});

client.on("messageCreate", async (e) => {
    
})

client.login(TOKEN);