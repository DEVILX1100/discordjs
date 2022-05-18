const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Purge messages!"),
     options: [
                {
                    name: 'number',
                    description: '1-100',
                    type: "INTEGER"
                }
            ],
  execute: async (interaction, client) => {

       const msgnum = interaction.options.getInteger('number')
       interaction.editReply('Purging...');
       interaction.channel.bulkDelete(msgnum);
    interaction.editReply("Done, If you wish you can delete this");
  },
};
