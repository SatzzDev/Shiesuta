const { T, fmt } = require("../lib/i18n");
const { EMOJI } = require("../lib/emoji");
const { card, nowPlayingCard } = require("../lib/ui");
const { purge, clearIdle, stopLyrics, fetchLyrics, parseLrc } = require("../lib/utils");
const state = require("../lib/state");
const cfg = require("../config.json");

const DONATE_URL = cfg.donate?.url ?? "";
const DONATE_CHANCE = cfg.donate?.chance ?? 0.1;

module.exports = {
    name: "playerStart",
    emitter: "kazagumo",
    async run(ctx, player, track) {
        clearIdle(player.guildId);
        await purge(player.guildId);
        const channel = player.textId ? ctx.client.channels.cache.get(player.textId) : null;
        if (!channel) return;
        const t = T(player.guildId);
        const requester = track.requester ? track.requester.toString() : t.unknown;
        const msg = await channel.send(nowPlayingCard(player.guildId, track, requester, null, 0)).catch(() => null);
        if (!msg) return;
        state.pending.set(player.guildId, [msg]);
        const data = await fetchLyrics(track);
        const lines = data?.syncedLyrics ? parseLrc(data.syncedLyrics) : null;
        state.npState.set(player.guildId, { msg, track, requester, lines, last: -1 });
        stopLyrics(player.guildId);
        if (lines?.length) state.lyricTimers.set(player.guildId, setInterval(() => {
            const st = state.npState.get(player.guildId);
            const p = ctx.kazagumo.players.get(player.guildId);
            if (!st || !p?.playing) return;
            const pos = (p.position ?? 0) / 1000;
            const i = Math.max(0, st.lines.findIndex(l => l.time > pos));
            if (i === st.last) return;
            st.last = i;
            st.msg.edit(nowPlayingCard(player.guildId, st.track, st.requester, st.lines, pos)).catch(() => { });
        }, 500));
        if (Math.random() < DONATE_CHANCE) {
            const d = await channel.send(card({
                title: `## ${EMOJI.heart} ${t.donateTitle}`,
                body: `-# ${EMOJI.heart} ${fmt(t.donateBody, { donateUrl: DONATE_URL })}`,
                thumb: channel.client.user.displayAvatarURL(),
                color: 0xEB459E
            })).catch(() => null);
            if (d) setTimeout(() => d.delete().catch(() => { }), 120000);
        }
    }
};
