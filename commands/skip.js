const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");

module.exports = {
    name: "skip",
    async run(m, args, { kazagumo, player, t }) {
        if (!player) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.noPlayer, color: 0xED4245 }));
        player.skip();
        return m.reply(card({ title: `## ${EMOJI.skip} ${t.skip}`, body: t.skipSub, color: 0xFEE75C }));
    }
};
