const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");

module.exports = {
    name: "shuffle",
    async run(m, args, { player, t }) {
        if (!player) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.noPlayer, color: 0xED4245 }));
        if (player.queue.size < 2) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.shuffleShort, color: 0xED4245 }));
        player.queue.shuffle();
        return m.reply(card({ title: `## ${EMOJI.shuffle} ${t.shuffle}`, body: t.shuffleSub, color: 0xFEE75C }));
    }
};
