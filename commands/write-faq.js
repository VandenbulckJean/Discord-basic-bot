module.exports = {
  category: "Administration",
  description: "write all the F.A.Q. in the current channel.",

  slash: true,
  testOnly: true,

  guildOnly: true,

  permission: ["ADMINISTRATOR"],

  callback: ({ interaction, channel }) => {
    channel.send({
      content:
        "1️⃣ What is Axon?\n\nAxon is a project that we created in order to build an environment like no other for both entrepreneurs and investors in the universe of cryptos. We aim to create a platform where entrepreneurs can share their ideas and their skills, build new work teams, get advices for professionals, find funds and finally create their businesses. You can check out <#900015875296469002> for all the details!\n\n\n2️⃣ Who created Axon and why?\n\nWe are a team of two young passionate developers. We created Axon because we know that too often, great ideas don't get concretised because people have a hard time finding skilled and motivated people to join them, funds to get started, advices from more experiences entrepreneurs,... Because we have been there, we want to give to others the opportunity not to be in that position. Learn more about us in <#900037250753114173>\n\n\n3️⃣ Is there a website?\n\nYes, you can find our website link in <#900023404613218414>\n\n\n4️⃣ How many Axon's NFT's will there be?\n\nThere will be two collections:\n-One collection of 1800 \"Axon's Entrepreneur Badge\"\n(Those won't be speculative collectibles).",
    });
    channel.send({
      content:
        "-One collection of 4050 \"Axon's Investor\"\n(Those will be speculative collectibles).\n\n\n5️⃣ What exactly will Axon's Entrepreneur Badges be if they won't be speculative collectibles?\n\nAxon's Entrepreneur Badges will be an access key to the Axon's Entrepreneurs Work Space. When you have one of them, you will have access to many services as private chats, conferences, mentoring, a mobile app, contests to win funds and so much more!\n\n\n6️⃣ Will Axon's Investors have a utility?\n\n Of course, you can check out <#900015875296469002> to know about it.\n\n\n7️⃣ Who can mint Axon's NFT's?\n\n-Axon's Entrepreneurs Badges will only be mintable by motivated people who want to join our Entrepreneurs Work Space and be a part of the adventure as creators. Conditions will be announced later.\n -Axon's Investors will be mintable by everyone.\n\n\n8️⃣ When are the mint dates?\n\n-Axon's Entrepreneur Badge: Early December.\n-Axon's Investors: TBA.\n\n\n9️⃣ What will be the prices?\n\n-Axon's Entrepreneur Badge: 1 SOL (0.7 buy price and 0.3 deposit).\n-Axon's Investor: TBA.\n\n\n🔟 Will there be a secondary market?\n\n-There won't be any secondary market for the Axon's Entrepreneur Badges as they are the access key to Axon's Entrepreneurs Work Space and all it's services. However, you will be able to get your 0.3 SOL deposit back if you don't want to be a part of it anymore.\n-There will be a secondary market for Axon's Investors. We will try to get partnerships with Solanart, Magic Eden,...",
    });
    interaction.reply({
      content: "I typed as fast as possible. How did I do ?",
      ephemeral: true,
    });
  },
};
