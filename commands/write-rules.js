module.exports = {
  category: "Administration",
  description: "write all the rules in the current channel.",

  slash: true,
  testOnly: true,

  guildOnly: true,

  permission: ["ADMINISTRATOR"],

  callback: ({ interaction, channel }) => {
    channel.send({
      content:
        "‼️ AXON COMMUNITY RULES ‼️\nTo make sure that we keep a welcoming and positive environment for everyone within our Discord, all members are expected to follow the below rules:\n\n✅ BE KIND AND FRIENDLY\nWe greatly encourage you to introduce yourself and welcome new members, as well as helping each other in order to create a loving community!\n\n✅ BE RESPECTFUL AND POLITE\nThe only constructive way to address ourselves to others is by being respectful and polite. Always treat others as you would like to be treated. Remember that the best way to explain your point of view to someone who disagrees with you is by staying calm and wise.\n\n✅ POST CONTENT IN THE APPROPRIATE CHANNELS\nWe tried to organise our Discord in the most efficient way to keep it clean. Please try and learn what the different channels are about so you can use the right one.\n\n✅ CHECK <#900011324690559026> BEFORE ASKING QUESTIONS\nWe believe you can already find a lot of answers to your questions there as we tried to explain a lot. By checking the <#900011324690559026> before asking your questions, we can keep a smooth environment for all members.\nIf you haven't find you answer, please feel free to ask in <#900020871404589083>\n\n🚫 NO RACISM, SEXISM OR ANY OTHER KIND OF DISCRIMINATION\nWe will really make sure that any discrimination or harassment of any kind isn't tolerated!\n",
    });
    channel.send({
      content:
        "We want this environment to be safe and secure for each of you. Please understand that the violation of this rule will result in the immediate ban of this server.\n\n🚫 NO NSFW OR PORNOGRAPHIC CONTENT\nNo content of this type will be tolerated in any channel. This includes texts, images, nicknames, profile pictures, links featuring sex, hard violence, ... The violation of this rule will result in the immediate ban of this server.\n\n🚫 NO PROMOTION OR SPAM\nDo not spam of self-promote (advertisements, server invites, DM members with advertisements,...) without asking a team member first.\n\n⚠️ BE CAREFUL OF SCAMS\nWe will never DM you first, ask you for funds or confidential informations.\nPlease take a look at <#900023506669011055> for your own safety!\n\nThank you and enjoy your time with us! ❤️",
    });
    interaction.reply({
      content: "I typed as fast as possible. How did I do ?",
      ephemeral: true,
    });
  },
};
