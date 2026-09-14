const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");

const MODES = {
    track: ["track", "loopTrackSub", EMOJI.loop1],
    queue: ["queue", "loopQueueSub", EMOJI.loop],
    off: ["none", "loopOffSub", EMOJI.check]
};
const CYCLE = { none: "track", track: "queue", queue: "off" };

module.exports = {
    name: "loop",
    async run(m, args, { player, t }) {
        if (!player) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.noPlayer, color: 0xED4245 }));
        const arg = args[0]?.toLowerCase();
        const key = MODES[arg] ? arg : CYCLE[player.loop ?? "none"];
        const [mode, sub, icon] = MODES[key];
        player.setLoop(mode);
        return m.reply(card({ title: `## ${icon} ${t.loop}: ${key[0].toUpperCase()}${key.slice(1)}`, body: t[sub], color: 0xFEE75C }));
    }
};
