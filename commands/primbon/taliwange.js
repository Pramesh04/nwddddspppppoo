const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "taliwange",
    alias: ["harisangar"],
    use: "<query>",
    desc: "Cek Primbon Hari Sangar Taliwange",
    type: "primbon",
    example: `%prefix%command 11 06 2007`,
    disable: true,
    start: async(killua, m, { args, prefix, command }) => {
        let [a, b, c] = args
        if (!a, !b, !c) return m.reply(`Example : ${prefix + command} 11 06 2007`)
        let fetch = await fetchUrl(global.api("zenz", `/primbon/harisangar_taliwangke/${a}/${b}/${c}`, {}, "apikey"))
        let caption = `Primbon Hari Sangar Taliwange :\n\n`
        let i = fetch.result
        caption += `⭔ Tgl Lahir : ${i.tgl_lahir}\n`
        caption += `⭔ Result : ${i.result}\n`
        caption += `⭔ Info : ${i.info}\n`
        caption += `⭔ Catatan : ${i.catatan}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}