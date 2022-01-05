module.exports = {
  category: "Moderation",
  description: "Kick specified member from server.",

  slash: true,
  testOnly: true,

  guildOnly: true,

  minArgs: 2,
  expectedArgs: "<user> <reason>",
  options: [
    {
      name: "user",
      description: "Specify the user you want to kick.",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "Specify the reason you want them kicked.",
      type: "STRING",
      required: true,
    },
  ],

  callback: ({ interaction, args, guild, member }) => {
    const communityManagerRoleId = "900326613487587328";

    if (
      !member.roles.cache.some((role) => role.id === communityManagerRoleId)
    ) {
      interaction.reply({
        content: "You don't have the right to do this.",
        ephemeral: true,
      });
    } else {
      const target = interaction.options.getMember("user");

      if (!target) {
        interaction.reply({
          content: "Please tag someone to kick.",
          ephemeral: true,
        });
      } else if (!target.kickable) {
        interaction.reply({
          content: "Cannot kick that user.",
          ephemeral: true,
        });
      } else {
        args.shift();
        const reason = args.join(" ");
        const wallOfShameChannelId = "900759010062524417";
        const wallOfShameChannel =
          guild.channels.cache.get(wallOfShameChannelId);

        target.kick(reason);

        wallOfShameChannel.send({
          content: `*\n<@${target.id}> has been kicked !\nReason : ${reason}.\n*`,
        });

        interaction.reply({
          content: `You kicked <@${target.id}>`,
          ephemeral: true,
        });
      }
    }
  },
};
