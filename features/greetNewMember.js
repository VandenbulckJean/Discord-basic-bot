module.exports = (member) => {
  const greetingsChannelId = "899956869127364623";
  const greetingsChannel = member.guild.channels.cache.get(greetingsChannelId);

  const fullPosition = member.guild.memberCount - 1;
  const position = member.guild.memberCount - (1 % 10);

  greetingsChannel.send({
    content: `⏁\n\nWelcome among us <@${
      member.id
    }> 😉\nYou're the ${fullPosition}${
      position == 1 ? "st" : position == 2 ? "nd" : position == 3 ? "rd" : "th"
    } one here.\nCheck out the <#900011086168862720> and head to the <#900011324690559026> to get started.\n\n⏂`,
  });
};
