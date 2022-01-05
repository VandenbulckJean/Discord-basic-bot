module.exports = {
  category: "Moderation",
  description: "Ban specified member from server.",

  slash: true,
  testOnly: true,

  guildOnly: true,

  minArgs: 2,
  expectedArgs: "<user> <reason>",
  options: [
    {
      name: "user",
      description: "Specify the user you want to ban.",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "Specify the reason you want them Banned.",
      type: "STRING",
      required: true,
    },
  ],

  callback: ({ interaction, args, guild }) => {
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
      } else if (!target.bannable) {
        interaction.reply({
          content: "Cannot ban that user.",
          ephemeral: true,
        });
      } else {
        args.shift();
        const reason = args.join(" ");
        const wallOfShameChannelId = "900759010062524417";
        const wallOfShameChannel =
          guild.channels.cache.get(wallOfShameChannelId);

        target.ban({ reason, days: 7 });

        wallOfShameChannel.send({
          content: `*\n<@${target.id}> has been banned !\nReason : ${reason}.\n*`,
        });

        interaction.reply({
          content: `You banned <@${target.id}>`,
          ephemeral: true,
        });
      }
    }
  },
};
