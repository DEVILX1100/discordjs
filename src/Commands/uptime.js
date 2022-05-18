const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Get the bots Uptime!"),
  execute: async (interaction, client) => {

      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      
      const embed = new MessageEmbed()
         .setColor("#ff0000")
         .setDescription(`${days}d, ${hours}h, ${minutes}m, ${seconds}s`)
    return interaction.reply({ embeds: [embed]});
  },
};
