const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the bots latency!"),
  execute: async (interaction, client) => {
    return interaction.reply({ content: `Pong \`${client.ws.ping}ms\` 🏓` , components: [new MessageActionRow().addComponents(new MessageButton().setLabel(`${client.ws.ping}ms`).setStyle(`SECONDARY`).setDisabled(true).setCustomId(`pingg`))]});
  },
};
