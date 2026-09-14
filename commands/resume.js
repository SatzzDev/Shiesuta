const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");

module.exports = {
    name: "resume",
    async run(m, args, { player, t }) {
        if (!player) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.noPlayer, color: 0xED4245 }));
        player.pause(false);
        return m.reply(card({ title: `## ${EMOJI.play} ${t.resume}`, body: t.resumeSub, color: 0x57F287 }));
    }
};
