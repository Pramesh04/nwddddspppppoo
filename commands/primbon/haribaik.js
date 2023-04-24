const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "haribaik",
    alias: ["haribaik"],
    use: "<query>",
    desc: "Cek Primbon Hari Baik",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    disable: true,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/haribaik/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Hari Baik :\n\n`
        let i = fetch.result
        caption += `⭔ Catatan : ${i.message}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}