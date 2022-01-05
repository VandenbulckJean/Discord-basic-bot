const DiscordJS = require("discord.js");
const WOKCommands = require("wokcommands");
const path = require("path");
const dotenv = require("dotenv");
const updateMembers = require("./features/updateMemberCount");
const setVisitorRole = require("./features/setVisitorRole");
const upgradeFromVisitorToGuest = require("./features/upgradeFromVisitorToGuest");

const { Intents, Client } = DiscordJS;

dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
  partials: ["MESSAGE", "REACTION"],
});

client.on("ready", () => {
  const guildId = "899956869127364618";
  const guild = client.guilds.cache.get(guildId);
  const __dirname = path.resolve();

  updateMembers(guild);
  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    testServers: guildId,
    botOwners: ["765142248647950336", "880335905234227291"],
  }).setCategorySettings([{ name: "Dev", emoji: "🎮" }]);
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message:", error);
      return;
    }
  }
  if (
    reaction.message.id === "900386875347439708" &&
    reaction.emoji.name == "🧬"
  ) {
    upgradeFromVisitorToGuest(
      reaction.message.guild.members.cache.get(user.id)
    );
  }
});

client.on("guildMemberAdd", (member) => {
  updateMembers(member.guild);
  setVisitorRole(member);
});

client.on("guildMemberRemove", (member) => {
  updateMembers(member.guild);
});

client.login(process.env.TOKEN);
