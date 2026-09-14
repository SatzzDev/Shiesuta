const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");
const state = require("../lib/state");

module.exports = {
    name: "resume",
    async run(m, args, { player, t }) {
        if (!player) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.noPlayer, color: 0xED4245 }));
        player.pause(false);
        const ps = state.posState.get(m.guild.id);
        if (ps) ps.at = Date.now();
        return m.reply(card({ title: `## ${EMOJI.play} ${t.resume}`, body: t.resumeSub, color: 0x57F287 }));
    }
};
