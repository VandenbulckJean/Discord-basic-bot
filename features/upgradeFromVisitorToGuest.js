const greetNewMember = require("./greetNewMember");

module.exports = async (member) => {
  const visitorRoleId = "900325421520924672";
  const visitorRole = member.guild.roles.cache.get(visitorRoleId);
  const guestRoleId = "900324090068500500";
  const guestRole = member.guild.roles.cache.get(guestRoleId);

  member.roles.remove(visitorRole);
  member.roles.add(guestRole);

  await new Promise((resolve) => setTimeout(resolve, 1500));
  greetNewMember(member);
};
