const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");
const { stopLyrics } = require("../lib/utils");
const state = require("../lib/state");

module.exports = {
    name: "stop",
    async run(m, args, { player, t }) {
        if (!player) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.noPlayer, color: 0xED4245 }));
        stopLyrics(m.guild.id);
        state.npState.delete(m.guild.id);
        player.destroy();
        return m.reply(card({ title: `## ${EMOJI.stop} ${t.stop}`, body: t.stopSub, color: 0xED4245 }));
    }
};
