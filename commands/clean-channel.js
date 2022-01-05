module.exports = {
  category: "Dev",
  description: "Remove all channel messages.",

  slash: true,
  testOnly: true,

  guildOnly: true,

  permission: ["ADMINISTRATOR"],

  callback: async ({ interaction, channel }) => {
    let deletedCount = 0;
    let justDeleted;

    await interaction.deferReply({
      ephemeral: true,
    });

    do {
      await channel.messages.fetch({ limit: 99 }).then(async (toBeDeleted) => {
        await channel.bulkDelete(toBeDeleted).then(async (deleted) => {
          deletedCount += deleted.size;
          justDeleted = deleted.size;
        });
      });
    } while (justDeleted > 0);

    interaction.editReply({
      content: `The channel is cleared Master. I've deleted ${deletedCount} messages.`,
    });
  },
};
