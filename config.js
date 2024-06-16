/*EDIT OWNER DISINI
*/
global.owner = [
  ['628563858981'],
  ['628563858981'],
  ['628563858981', 'CROCObot ', 'CROCObot@gmail.com', true]
] // Put your number here
global.mods = ['628563858981'] // Moderator
global.prems = ['628563858981'] // Premium
// YANG ATAS ITU UBAH JADI NOMOR LU
// & YG BAWAH INI, NOMOR,NAMA,EMAIL LU
global.fsizedoc = '45000000000' // default 10TB
global.fpagedoc = '19'
global.numberbot = '6282249503984'
global.namedoc = 'CROCObot ⁻ ᴹᵈ'
global.nameowner = 'CROCObot '
global.mail = 'tataverifakun@gmail.com'
global.nomorown = '628563858981' 
global.dana = '6281264520813'
global.pulsa = '6281264520813'
global.gopay = '6281264520813'
global.namebot = 'CROCObot ⁻ ᴹᵈ'
global.sgc = 'https://chat.whatsapp.com/GHckItx1ThUG1MFqeU7mVn'
global.sourceUrl = "https://instagram.com/"
global.sig = 'https://instagram.com/'
global.swa = 'wa.me/628563858981'
global.thumb = 'https://telegra.ph/file/7f59829e67ab1e49cf0bb.jpg'
global.version = '6.5.0'
global.wm = 'CROCObot ⁻ ᴹᵈ'
global.watermark = wm
global.wm2 = 'CROCObot'
global.wm3 = namebot
global.danied = '*Command tidak dapat di akses!!!*' 
global.wm4 = namebot
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '*🍿 SEDANG LOADING MOHON TUNGGU. . .*'
global.eror = 'Server Error'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.web = global.sourceUrl

// GANTI WM DISINI

global.stiker_wait = 'Sedang Di Proses...'
global.packname = 'By 𝙗𝙤𝙩𝙯CROCO|𝙤𝙬𝙣 𝟬𝟴𝟭𝟯\nS T I C K E R  M A K E R\n\nnomor bot: wa.me/628563858981'
global.author = ''
global.APIs = {
  lolhuman: 'https://api.lolhuman.xyz',
  rose: 'https://api.itsrose.life',
  skizo: 'https://xzn.wtf/',
  sazumiviki: 'https://api.sazumiviki.me'
};

global.APIKeys = {
  'https://api.sazumiviki.me': 'sazumiviki',
  'https://xzn.wtf/': 'sazumiviki',
  'https://api.itsrose.life': 'YOUR_ROSE_KEY',
  'https://api.lolhuman.xyz': 'momo',
};
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Yang Ini Jangan Di Ubah Yah Kak*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})