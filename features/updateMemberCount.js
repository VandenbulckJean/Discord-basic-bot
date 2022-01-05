module.exports = (guild) => {
  const memberCountChannelId = "900007111226957835";
  const memberCountChannel = guild.channels.cache.get(memberCountChannelId);

  const members = guild.memberCount - 1;

  if (members >= 1000) {
    memberCountChannel.setName(
      `Members: ${Number(members / 1000).toFixed(1)}K`
    );
  } else {
    memberCountChannel.setName(`Members: ${members}`);
  }
};
