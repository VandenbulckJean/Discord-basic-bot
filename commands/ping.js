module.exports = {
  category: "Dev",
  description: "Reply with pong.",

  slash: true,
  testOnly: true,

  permission: ["ADMINISTRATOR"],

  callback: ({ interaction }) => {
    interaction.reply({
      content: "Pong",
      ephemeral: true,
    });
  },
};
