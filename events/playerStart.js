const { T } = require("../lib/i18n");
const { nowPlayingCard } = require("../lib/ui");
const { purge, clearIdle } = require("../lib/utils");
const state = require("../lib/state");

module.exports = {
    name: "playerStart",
    emitter: "kazagumo",
    async run(ctx, player, track) {
        clearIdle(player.guildId);
        await purge(player.guildId);
        const channel = player.textId ? ctx.client.channels.cache.get(player.textId) : null;
        if (!channel) return;
        const t = T(player.guildId);
        const requester = track.requester?.toString() ?? t.unknown;
        const msg = await channel.send(nowPlayingCard(player.guildId, track, requester, null, 0)).catch(() => null);
        if (!msg) return;
        state.pending.set(player.guildId, [msg]);
        state.npState.set(player.guildId, { msg, track, requester, lines: null, last: -1 });
        state.posState.set(player.guildId, { pos: 0, at: Date.now(), paused: false });
    }
};