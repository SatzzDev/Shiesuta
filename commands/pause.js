const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");

module.exports = {
    name: "pause",
    async run(m, args, { player, t }) {
        if (!player) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.noPlayer, color: 0xED4245 }));
        player.pause(true);
        return m.reply(card({ title: `## ${EMOJI.pause} ${t.pause}`, body: t.pauseSub, color: 0xFEE75C }));
    }
};
