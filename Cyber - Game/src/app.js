import { Client } from "discord.js"
import { readdirSync } from "fs"
import 'dotenv/config'


const client =new Client({
    intents: ["DirectMessages", "Guilds", "MessageContent", "GuildMessages"],

    // state of the bot
    presence: {status: "idle", activities:[{name:"./help", ActivityType: "Playing"}]},
})

// Event Loader
readdirSync("./events").forEach(async file => {

    if (file.endsWith(".js")) {
        const event = await import(`./events/${file}`).then(m => m.default)
        event(client)
    }
})

client.login(process.env.token)