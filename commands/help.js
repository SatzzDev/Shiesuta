const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");
const cfg = require("../config.json");
const PREFIX = cfg.prefix ?? ".";

module.exports = {
    name: "help",
    async run(m, args, { client, t }) {
        return m.reply(card({
            title: `### ${EMOJI.music} ${t.helpTitle}`,
            thumb: client.user.displayAvatarURL(),
            separator: true,
            body: [...t.helpLines].join("\n"),
            footer: `Created with ${EMOJI.heart} by [Saturiaaa.](https://satzz.online)`
        }));
    }
};
