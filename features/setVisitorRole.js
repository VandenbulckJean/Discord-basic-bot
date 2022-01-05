module.exports = (member) => {
  const visitorRoleId = "900325421520924672";
  const visitorRole = member.guild.roles.cache.get(visitorRoleId);

  member.roles.add(visitorRole);
};
