const { LANGS, setLang } = require("../lib/i18n");
const { EMOJI } = require("../lib/emoji");
const { card } = require("../lib/ui");

module.exports = {
    name: "set",
    async run(m, args, { t }) {
        const lang = args[1]?.toLowerCase();
        if (args[0]?.toLowerCase() !== "lang" || !LANGS[lang]) return m.reply(card({ title: `## ${EMOJI.error} Error`, body: t.setLangBad, color: 0xED4245 }));
        setLang(m.guild.id, lang);
        return m.reply(card({ title: `## ${EMOJI.check} Language`, body: LANGS[lang].setLangOk, color: 0x57F287 }));
    }
};
