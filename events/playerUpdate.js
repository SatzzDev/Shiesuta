const state = require("../lib/state");
const { fetchLyrics, parseLrc } = require("../lib/utils");
const { nowPlayingCard } = require("../lib/ui");

module.exports = {
    name: "playerUpdate",
    emitter: "kazagumo",
    async run(ctx, player, data) {
        const guildId = player.guildId;
        const pos = data.state.position;
        const position = pos / 1000;
        state.posState.set(guildId, { pos, at: Date.now(), paused: player.paused });
        const st = state.npState.get(guildId);
        if (!st || player.paused) return;
        if (!st.lines) {
            const lyrics = await fetchLyrics(st.track);
            st.lines = lyrics?.syncedLyrics ? parseLrc(lyrics.syncedLyrics) : [];
        }
        if (!st.lines.length) return;
        const i = st.lines.findLastIndex(line => line.time <= position);
        if (i === -1 || i === st.last) return;
        st.last = i;
        st.msg.edit(nowPlayingCard(guildId, st.track, st.requester, st.lines, position)).catch(() => {});
    }
};