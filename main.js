//Código desde cero y comentarios hecho por: 
// @gata_dios    
// @Skidy89  
// @elrebelde21 
                      
// Importaciones 
const baileys = require('@whiskeysockets/baileys'); // trabajar a través de descargas por Whatsapp 
const { WaMessageStubType, WA_DEFAULT_EPHEMERAL, BufferJSON, areJidsSameUser, downloadContentFromMessage, generateWAMessageContent, generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, getContentType,  relayMessage} = require('@whiskeysockets/baileys'); // Importa los objetos 'makeWASocket' y 'proto' desde el módulo '@whiskeysockets/baileys'      
const { default: makeWASocket, proto } = require("@whiskeysockets/baileys")   
const moment = require('moment-timezone') // Trabajar con fechas y horas en diferentes zonas horarias
const gradient = require('gradient-string') // Aplicar gradientes de color al texto     
const { exec, spawn, execSync } =  require("child_process")// Función 'execSync' del módulo 'child_process' para ejecutar comandos en el sistema operativo 
const chalk = require('chalk') // Estilizar el texto en la consola  
const os = require('os') // Proporciona información del sistema operativo 
const fs = require('fs') // Trabajar con el sistema de archivos    
const scp1 = require('./libs/scraper') 
const fetch = require('node-fetch')
const axios = require('axios') 
const {fileURLToPath} = require('url') 
const cheerio = require('cheerio')
const yts = require('yt-search') 
const gpt = require('api-dylux')
const util = require('util')
const createHash = require('crypto') 
const mimetype = require("mime-types")  
const ws = require('ws')
const JavaScriptObfuscator = require('javascript-obfuscator')
const webp = require("node-webpmux")
const Jimp = require('jimp')
const { File } = require("megajs")
const speed = require("performance-now")
const ffmpeg = require("fluent-ffmpeg")
const similarity = require('similarity')   
const ytdl = require('ytdl-core') 
const fg = require('api-dylux') 
const {savefrom, lyrics, lyricsv2, youtubedl, youtubedlv2} = require('@bochilteam/scraper') 
const translate = require('@vitalets/google-translate-api') 
const { smsg, fetchBuffer, getBuffer, buffergif, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, msToTime, downloadMediaMessage, convertirMsADiasHorasMinutosSegundos, pickRandom, getUserBio, asyncgetUserProfilePic} = require('./libs/fuctions')
const { ytmp4, ytmp3, ytplay, ytplayvid } = require('./libs/youtube')

const {sizeFormatter} = require('human-readable') 
const formatSize = sizeFormatter({
  std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`});
  
const color = (text, color) => { // Función 'color' que toma un texto y un color como parámetros
return !color ? chalk.cyanBright(text) : color.startsWith('#') ? chalk.hex(color)(text) : chalk.keyword(color)(text)} // Si no hay color, utilizar el color celeste brillante (por defecto)

const msgs = (message) => {  
if (message.length >= 10) { 
return `${message.substr(0, 500)}` 
} else {  
return `${message}`}}
const getFileBuffer = async (mediakey, MediaType) => {  
const stream = await downloadContentFromMessage(mediakey, MediaType)  
let buffer = Buffer.from([])  
for await(const chunk of stream) {  
buffer = Buffer.concat([buffer, chunk]) }  
return buffer 
}   
  
module.exports = conn = async (conn, m, chatUpdate, mek, store) => {  
var budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  
//----------------------[ ATRIBUTOS ]-------------------------
if (m.key.id.startsWith("BAE5")) return  
var body = (typeof m.text == 'string' ? m.text : '')
  var prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : ""
//var prefix = body.match(/^[/.*#]/)   
const isCmd = body.startsWith(prefix) 
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const args = body.trim().split(/ +/).slice(1) 
const from = m.chat 
const msg = JSON.parse(JSON.stringify(m, undefined, 2)) 
const content = JSON.stringify(m.message) 
const type = m.mtype 
let t = m.messageTimestamp 
const pushname = m.pushName || "Sin nombre" 
const botnm = conn.user.id.split(":")[0] + "@s.whatsapp.net"  
const _isBot = conn.user.jid
const userSender = m.key.fromMe ? botnm : m.isGroup && m.key.participant.includes(":") ? m.key.participant.split(":")[0] + "@s.whatsapp.net" : m.key.remoteJid.includes(":") ? m.key.remoteJid.split(":")[0] + "@s.whatsapp.net" : m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid  
const isCreator = [conn.decodeJid(conn.user.id), ...global.owner.map(([numero]) => numero)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const isOwner = isCreator || m.fromMe;
const isMods = isOwner || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
//const isCreator = global.owner.map(([numero]) => numero.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net').includes(userSender) 
const itsMe = m.sender == conn.user.id ? true : false 
const text = args.join(" ") 
const q = args.join(" ") 
const quoted = m.quoted ? m.quoted : m 
const sender = m.key.fromMe ? botnm : m.isGroup ? m.key.participant : m.key.remoteJid 
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const mime = (quoted.msg || quoted).mimetype || ''  
const isMedia = /image|video|sticker|audio/.test(mime)
const mentions = []  
if (m.message[type].contextInfo) {   
if (m.message[type].contextInfo.mentionedJid) {  
const msd = m.message[type].contextInfo.mentionedJid  
for (let i = 0; i < msd.length; i++) {  
mentions.push(msd[i])}}}
  
//----------------------[ FUNCION/GRUPO ]-------------------------
const groupMetadata = m.isGroup ? await conn.groupMetadata(from) : ''
const groupName = m.isGroup ? groupMetadata.subject : '' 
const participants = m.isGroup ? await groupMetadata.participants : '' 
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '' 
const isBotAdmins = m.isGroup ? groupAdmins.includes(botnm) : false  
const isGroupAdmins = m.isGroup ? groupAdmins.includes(userSender) : false 
const isBaneed = m.isGroup ? blockList.includes(userSender) : false 
const isPremium = m.isGroup ? premium.includes(userSender) : false   
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const thumb = 'https://telegra.ph/file/16a28106fa7c2109f3ff9.jpg'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${userSender.split('@')[0]}:${userSender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: "puta gata", orderTitle: "puto aiden me lo folle", sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(from ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: "A", jpegThumbnail: null}}}//const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
const kick = function (from, orangnya) {
for (let i of orangnya) {
conn.groupParticipantsUpdate(from, [i], "remove");
}}
const time = moment(Number(msg.messageTimestamp + "000")).locale("es-mx").tz("America/Asuncion").format('MMMM Do YYYY, h:mm:ss a')
  
const reply = (text) => {  
m.reply(text)} 
const sendAdMessage = (text, title, body, image, url) => { conn.sendMessage(m.chat, {text: text, contextInfo: { externalAdReply: { title: title, body: body, mediaUrl: url, sourceUrl: url, previewType: 'PHOTO', showAdAttribution: true, thumbnail: image, sourceUrl: url }}}, {})}  
const sendImage = ( image, caption ) => { conn.sendMessage(m.chat, { image: image, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  
const sendImageAsUrl = ( url, caption ) => { conn.sendMessage(m.chat, { image:  {url: url }, caption: caption }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}  

//-------------[ TIPOS DE MENSAJES Y CITADOS ]----------------
const isAudio = type == 'audioMessage' // Mensaje de Audio  
const isSticker = type == 'stickerMessage' // Mensaje de Sticker  
const isContact = type == 'contactMessage' // Mensaje de Contacto  
const isLocation = type == 'locationMessage' // Mensaje de Localización   
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')  
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')  
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')  
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')  
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')  
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message') // Mensaje citado de cualquier tipo  
const isViewOnce = (type === 'viewOnceMessage') // Verifica si el tipo de mensaje es (mensaje de vista única)  

//base de datos
let user = global.db.data.users[m.sender]
let chats = global.db.data.users[m.chat]
let setting = global.db.data.settings[conn.user.jid]  

//--------------------[ AUTOBIO ]----------------------- 
if (global.db.data.settings[numBot].autobio) {
let setting = global.db.data.settings[numBot]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
var timestamp = speed();   
var latensi = speed() - timestamp 
let bio = `🔰 ${botname} uso: ${conn.public ? 'Publico' : 'Privado'} | Uptime : ${runtime(process.uptime())} | User: ${Object.keys(global.db.data.users).length}`
try {
await conn.updateProfileStatus(bio)
//await delay(3 * 3000) 
//await conn.updateProfilePicture(numBot, { url: "https://telegra.ph/file/84b0bad9adbbd5ed2b95e.jpg" })
setting.status = new Date() * 1 
} catch {
console.log(`[𝚄𝙿𝙳𝙰𝚃𝙴]\n𝙿𝚒𝚗𝚐: ${latensi.toFixed(4)}`) 
}}} 
	
//autoread
if (m.message) {
conn.readMessages([m.key])}	

//Marcar como (Escribiendo...) 
/*if (command) {
await conn.sendPresenceUpdate('composing', m.chat)
}*///Para que le guste :v

//--------------------[ ANTIFAKES ]-----------------------
if (global.db.data.chats[m.chat].antifake && !isGroupAdmins) {	
let forbidPrefixes = ["1", "994", "48", "43", "40", "41", "49"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje['smsAntiFake']()}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
if (global.db.data.chats[m.chat].antiarabe && !isGroupAdmins) {
let forbidPrefixes = ["212", "265", "234", "258", "263", "967", "20", "92", "91"];
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
m.reply(`${lenguaje['smsAntiArabe']()}`, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}} 

//---------------------[ ANTIPRIVADO ]-----------------------
if (msg.text.toLowerCase().includes('staff') || msg.text.toLowerCase().includes('ayudar') || msg.text.toLowerCase().includes('estado') || msg.text.toLowerCase().includes('owner') || msg.text.toLowerCase().includes('infohost') || msg.text.toLowerCase().includes('grupos')) {
} else if (!m.isGroup && !isCreator) {
  return;
}
/*conn.sendMessage(m.chat, {text: `*${lenguaje['smsWel']()}* @${sender.split`@`[0]}, ${lenguaje['smsAntiPv']()}\n${nn2}`, mentions: [m.sender], }, {quoted: m}) 
await delay(2 * 2000) 
await conn.updateBlockStatus(m.chat, 'block')*/
//return 
//}}}

//--------------------[ viewOnceMessage ]-----------------------
if (m.mtype == 'viewOnceMessageV2') { 
//if (global.db.data.chats[m.chat].viewonce) return
teks = `\`𝙰𝚀𝚄𝙸 𝙽𝙾 𝚂𝙴 𝙿𝙴𝚁𝙼𝙸𝚃𝙴 𝙾𝙲𝚄𝙻𝚃𝙰𝚁 𝙽𝙰𝙳𝙰\``
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption} ${teks}`, m)
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption} ${teks}`, m)
}}

//--------------------[ ANTILINK ]-----------------------
if (global.db.data.chats[m.chat].AntiYoutube && !isCreator) {
if (budy.includes("https://youtu.be/") || budy.includes("https://youtube.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE YOUTUBE DETECTADO 📢*' : user.Language === 'en' ? '*YOUTUBE LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط اليوتيوب 📢*' : user.Language === 'pt' ? '*LINK DE YOUTUBE DETECTADO 📢' : user.Language === 'id' ? '*LINK YOUTUBE TERDETEKSI 📢' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА ЮТУБ 📢' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntInstagram && !isCreator) {
if (budy.includes("https://www.instagram.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE INSTAGRAM DETECTADO 📢*' : user.Language === 'en' ? '*INSTAGRAM LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط الانستغرام 📢*' : user.Language === 'pt' ? '*LINK DE INSTAGRAM DETECTADO 📢*' : user.Language === 'id' ? '*LINK INSTAGRAM TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА INSTAGRAM 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiFacebook && !isCreator) {
if (budy.includes("https://facebook.com/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE FACEBOOK DETECTADO 📢*' : user.Language === 'en' ? '*LINK DE FACEBOOK DETECTADO 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط الفيسبوك 📢*' : user.Language === 'pt' ? '*LINK DO FACEBOOK DETECTADO 📢*' : user.Language === 'id' ? '*LINKFACEBOOK TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА FACEBOOK 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTelegram && !isCreator) {
if (budy.includes("https://t.me/")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text: `${user.Language === 'es' ? '*LINK DE TELEGRAM DETECTADO 📢*' : user.Language === 'en' ? '*TELEGRAM LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط التليجرام 📢*' : user.Language === 'pt' ? '*LINK DE TELEGRAM DETECTADO 📢*' : user.Language === 'id' ? '*LINK TELEGRAM TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА ТЕЛЕГРАММУ 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTiktok && !isCreator) {
if (budy.match("https://www.tiktok.com/") || budy.match("https://vm.tiktok.com/")) {
//f (!isCreator) return m.reply(`Es mi creador Salvador`) 
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE TIKTOK DETECTADO 📢*' : user.Language === 'en' ? '*TIKTOK LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط التيك توك 📢*' : user.Language === 'pt' ? '*LINK DO TIKTOK DETECTADO 📢*' : user.Language === 'id' ? '*LINK TIKTOK TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА ССЫЛКА НА TIKTOK 📢*' : user.Language}\n\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].AntiTwitter) {
if (budy.includes("https://twitter.com/")){
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']())
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return m.reply(lenguaje['smsAntiLink5']())
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE TWITER (X) DETECTADO 📢*' : user.Language === 'en' ? '*TWITER LINK (X) DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط تويتر (X) 📢*' : user.Language === 'pt' ? '*LINK DO TWITER (X) DETECTADO 📢*' : user.Language === 'id' ? '*LINK TWITER (X) TERDETEKSI 📢*' : user.Language === 'rs' ? '*ССЫЛКА НА ТВИТЕР (X) ОБНАРУЖЕНА 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (global.db.data.chats[m.chat].antiLink2 && !isCreator) {
if (budy.includes("https://")) {
if (isGroupAdmins) return reply(lenguaje['smsAntiLink5']()) 
if (!isBotAdmins) return m.reply(lenguaje['smsAntiLink6']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${user.Language === 'es' ? '*LINK DE HTTPS DETECTADO 📢*' : user.Language === 'en' ? '*HTTPS LINK DETECTED 📢*' : user.Language === 'ar' ? '*تم اكتشاف رابط HTTPS 📢*' : user.Language === 'pt' ? '*LINK HTTPS DETECTADO 📢*' : user.Language === 'id' ? '*LINK HTTPS TERDETEKSI 📢*' : user.Language === 'rs' ? '*ОБНАРУЖЕНА HTTPS-ССЫЛКА 📢*' : user.Language}\n@${sender.split("@")[0]} ${user.Language === 'es' ? 'Usted sera eliminado de este grupo' : user.Language === 'en' ? ' You will be removed from this group' : user.Language === 'ar' ? ' ستتم إزالتك من هذه المجموعة' : user.Language === 'pt' ? ' Você será removido deste grupo' : user.Language === 'id' ? ' Anda akan dikeluarkan dari grup ini' : user.Language === 'rs' ? ' Вы будете удалены из этой группы' : user.Language}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//antilink	
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
let delet = m.key.participant
let bang = m.key.id
conn.sendMessage(m.chat, {text: `*LINK DE WHATSAPP DETECTADO 📢* @${sender.split("@")[0]} Usted sera eliminado de este grupo`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (!isBotAdmins) return conn.sendMessage(m.chat, { text: `🚩 𝐒𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐀 𝐋𝐀 𝐏𝐑𝐄𝐒𝐄𝐍𝐂𝐈𝐀 𝐃𝐄𝐋 𝐋𝐎𝐒 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑𝐄𝐒\n${listAdmin}\n\n• 𝐄𝐥 𝐛𝐨𝐭 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐚 𝐚𝐝𝐦𝐢𝐧𝐬 𝐩𝐚𝐫𝐚 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐚 𝐞𝐬𝐞 𝐩𝐞𝐧𝐝𝐞𝐣𝐨`, mentions: groupAdmins.map(v => v.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})  
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
if (isGroupAdmins) return reply(`🚩 Eres un administrador del grupo, así que no te prohibiré el uso de enlaces :v`) 
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}

//--------------------[ ANTITOXIC ]-----------------------
if (global.db.data.chats[m.chat].antitoxic && !isCreator) {   
if (budy.match(`g0re|g0r3|g.o.r.e|sap0|sap4|malparido|malparida|malparidos|malparidas|m4lp4rid0|m4lp4rido|m4lparido|malp4rido|m4lparid0|malp4rid0|chocha|chup4la|chup4l4|chupalo|chup4lo|chup4l0|chupal0|chupon|chupameesta|sabandija|hijodelagranputa|hijodeputa|hijadeputa|hijadelagranputa|kbron|kbrona|cajetuda|laconchadedios|putita|putito|put1t4|putit4|putit0|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|fanax|f4nax|drogas|droga|dr0g4|nepe|p3ne|p3n3|pen3|p.e.n.e|pvt0|puto|pvto|put0|hijodelagransetentamilparesdeputa|Chingadamadre|coño|c0ño|coñ0|c0ñ0|afeminado|drog4|cocaína|marihuana|chocho|chocha|cagon|pedorro|agrandado|agrandada|pedorra|sape|nmms|mamar|chigadamadre|hijueputa|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|cepe|sepe|sepesito|cepecito|cepesito|hldv|ptm|baboso|babosa|babosos|babosas|feo|fea|feos|feas|webo|webos|mamawebos|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|joden|jodemos|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking`)) { 
if (m.isBaileys && m.fromMe) { 
return !0 }   
if (!m.isGroup) { 
return !1 }
if (isGroupAdmins) return
const user = global.db.data.users[m.sender];
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.settings[conn.user.jid] || {};
const isToxic = budy.match; 
user.warn += 1;
if (!(user.warn >= 4)) await conn.sendMessage(m.chat, {text: `Hey @${m.sender.split('@')[0]} ${user.Language === 'es' ? 'decir la palabra ' : user.Language === 'en' ? ' say the word' : user.Language === 'ar' ? ' قل الكلمة قل الكلمة' : user.Language === 'pt' ? ' diga a palavra' : user.Language === 'id' ? ' ucapkan kata itu' : user.Language === 'rs' ? ' скажи слово' : user.Language} *(${isToxic})* ${user.Language === 'es' ? 'Esta prohibida En este grupo, No seas Toxico(a)\n\nADVERTENCIA' : user.Language === 'en' ? 'It is prohibited in this group, do not be toxic\n\nWARNING' : user.Language === 'ar' ? ' ممنوع في هذه المجموعة، لا تكن ساماً\n\nتحذير' : user.Language === 'pt' ? 'É proibido neste grupo, não seja tóxico\n\nAVISO' : user.Language === 'id' ? 'Dilarang di grup ini, jangan beracun\n\nPERINGATAN' : user.Language === 'rs' ? 'Запрещено в этой группе, не токсично.\n\nВНИМАНИЕ.' : user.Language}\n⚠️ *${user.warn}/4*\n\n${botname}`, mentions: [m.sender]}, {quoted: m})
if (user.warn >= 4) {
user.warn = 0;
await conn.sendMessage(m.chat, {text: `*@${m.sender.split('@')[0]} ${user.Language === 'es' ? 'superaste las 4 advertencias serás eliminado de este grupo 😐....*' : user.Language === 'en' ? 'you passed the 4 warnings you will be removed from this group 😐....*' : user.Language === 'ar' ? ' لقد تجاوزت الـ 4 تحذيرات سيتم إزالتك من هذه المجموعة 😐....*' : user.Language === 'pt' ? 'você passou nos 4 avisos você será removido deste grupo 😐....*' : user.Language === 'id' ? 'kamu melewati 4 peringatan kamu akan dikeluarkan dari grup ini 😐....*' : user.Language === 'rs' ? 'вы прошли 4 предупреждения, вы будете удалены из этой группы 😐....*' : user.Language}`, mentions: [m.sender]}, {quoted: m})
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
return !1;
}} 

//modo public & privado
if (!conn.public && !isCreator) {
if (!m.key.fromMe) return
}        	
//Banea chat
if (global.db.data.chats[m.chat].ban && !isCreator) {
return
}
if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {
return
}
      
// Tiempo de Actividad del bot
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
//conn.sendReadReceipt(from,sender,[m.key.id])
        
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

//---------------------[ MULTILENGUAJE ]------------------------
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js')
if (user.Language == 'es') {
global.lenguaje = es
} else if (user.Language == 'en') {
global.lenguaje = en
} else if (user.Language == 'ar') {
global.lenguaje = ar 
} else if (user.Language == 'id') { 
global.lenguaje = id
} else if (user.Language == 'pt') { 
global.lenguaje = pt
} else if (user.Language == 'rs') { 
global.lenguaje = rs
} else {
global.lenguaje = es
}      

// ‿︵‿︵ʚɞ『 INFO CONSOLE 』ʚɞ‿︵‿︵	
if (m.message) {
console.log(chalk.bold.cyanBright(`╔═════════════════════∌\n║+${conn.user.jid.split`@`[0]} ➢ ${botname}`), 
chalk.bold.magenta(`\n╠═════════════════════\n║⏰${lenguaje.consola.text} `) + chalk.magentaBright(moment(t * 1000).tz(place).format('DD/MM/YY HH:mm:ss'),
chalk.bold.red(`\n️║🏷️ ${lenguaje.consola.text1} `) + chalk.bold.white(`[${conn.public ? 'Publico' : 'Privado'}]`), 
chalk.bold.yellow(`\n║📑${lenguaje.consola.text2} `) + chalk.yellowBright(`${type}`),  
m.isGroup ? chalk.bold.greenBright(`\n║📤${lenguaje.consola.text4} `) + chalk.greenBright(groupName) + ' ➜ ' + gradient.rainbow(from) : chalk.bold.greenBright(`\n║📥${lenguaje.consola.text5}`, userSender), 
chalk.bold.cyan(`\n║📊${lenguaje.consola.text3} `) + chalk.cyanBright(pushname) + ' ➜', gradient.rainbow(userSender), 
chalk.bold.white(`\n║💬${lenguaje.consola.text6}`) + chalk.whiteBright(`\n╚═════════════════════⋊\n${msgs(m.text)}\n`))
)}          

switch (prefix && command) {
case 'yts':
if (!text) return reply(`*Ejemplo:*\n${prefix + command} historia wa anime`)
const yts = require("youtube-yts");
const search = await yts(text);
//reply(info.wait) 
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
let teks = 'Búsqueda en YouTube\n\nResultados de ' + text + '\n\n';
let no = 1;
let themeemoji = "✨"
for (let i of search.all) {
  teks += `${themeemoji} No: ${no++}\n${themeemoji} Tipo: ${i.type}\n${themeemoji} ID del Video: ${i.videoId}\n${themeemoji} Título: ${i.title}\n${themeemoji} Vistas: ${i.views}\n${themeemoji} Duración: ${i.timestamp}\n${themeemoji} Subido: ${i.ago}\n${themeemoji} URL: ${i.url}\n\n━━━━━━━━━━━━\n\n`;
}
await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak })
break

case 'google': {      
if (!text) return reply(`*Ejemplo:*\n${prefix + command} gata`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google : ${text}\n\n`
for (let g of res) {
teks += `• *Titulo* : ${g.title}\n`
teks += `• *Descripcion* : ${g.snippet}\n`
teks += `• *Link* : ${g.link}\n\n━━━━━━━━━━━━━━━━━━━━\n\n`
} 
reply(teks)
})
}
break 

case 'imagen': {
const {googleImage} = require('@bochilteam/scraper') 
if (budy.includes('gore') || budy.includes('cp')|| budy.includes('porno')|| budy.includes('Gore')|| budy.includes('rule')|| budy.includes('CP')|| budy.includes('Rule34')) return m.reply('😐 NO PIDA BOLUDECES');
if (!text) return m.reply(`${lenguaje.lengua.ejemplo}\n${prefix + command} gatito`)
try {  
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `💫 ${lenguaje['result']()} ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch {
try {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = image;
conn.sendMessage(m.chat, { image: { url: link}, caption: `💫 ${lenguaje['result']()} : ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)
}}}
break

case 'ia': case 'chatgpt':
if (!text) return conn.sendMessage(from, { text: `*INGRESE EL TEXTO DE LOS QUE QUIERE BUSCAR?*` }, { quoted: msg })
await conn.sendPresenceUpdate('composing', m.chat)
let syst = `Eres InfinityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
let gpt = await fetch(global.API('fgmods', '/api/info/openai', { prompt: syst, text }, 'apikey'));
let res = await gpt.json()
await m.reply(res.result)
break

case 'gemini': {
if (!text) return conn.sendMessage(from, { text: `*INGRESE EL TEXTO DE LOS QUE QUIERE BUSCAR?*` }, { quoted: msg })
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(global.API('fgmods', '/api/info/gemini', { text }, 'apikey'));
let res = await gpt.json()
await m.reply(res.result)}
break

case 'welcome': case 'antilink': case 'modoadmin': case 'modoadmins': case 'soloadmin': case 'antilink2': case 'antitwiter':case 'antitiktok': case 'AntiTikTok': case 'antitelegram': case 'AntiTelegram': case 'AntiFacebook': case 'antifacebook': case 'antinstagram': case 'AntInstagram': case 'antiyoutube': case 'AntiYoutube': case 'antifake': case 'antiFake': case 'antiarabe': case 'antiArabe': case 'antiviewonce': case 'antitoxic': case 'autodetect': case 'detect': { 
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`⚠️ 𝐀𝐂𝐂𝐈𝐎́𝐍 𝐌𝐀𝐋 𝐔𝐒𝐀𝐃𝐀\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)

if (/welcome/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
m.reply(`❬ 🚩 ❭ La funcion ${command} esta habilitada en este grupo`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
m.reply(`❬ 🚩 ❭ La funcion ${command} esta deshabilitada en este grupo`)}}

if (/antilink/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antilink = true
m.reply(`Atención a todos los miembros activos de este grupo 📣\n\nEl antilink esta activo\n\nY solo los admins de este grupo podran pasar el enlace\n\nSi algun participante que no se admin envía un enlace de este grupo u otro grupo sera expulsado de este grupo de inmediato`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antilink = false
m.reply(`❬ 🚩 ❭ La funcion ${command} esta deshabilitada en este grupo`)}}

if (/modoadmins|soloadmin|modoadmin/.test(command)) {
if (args[0] === "on") { 
global.db.data.chats[m.chat].modeadmin = true
m.reply(`❬ 🚩 ❭ La funcion ${command} esta habilitada en este grupo`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].modeadmin = false
m.reply(`❬ 🚩 ❭ La funcion ${command} esta deshabilitada en este grupo`)}}


if (/antilink2/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antiLink2 = true
m.reply(lenguaje.enable.text3)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiLink2 = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antitwiter|AntiTwiter/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTwitter = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTwitter = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antitiktok|AntiTikTok/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTiktok = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTiktok = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antitelegram|AntiTelegram/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTelegram = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTelegram = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/AntiFacebook|antifacebook/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiFacebook = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiFacebook = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antinstagram|AntInstagram/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntInstagram = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntInstagram = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antiyoutube|AntiYoutube/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiYoutube = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiYoutube = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antifake|antiFake/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antiFake = true
m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero fake (virtuales), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiFake = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antiarabe|antiArabe/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antiArabe = true
m.reply(`*Atención a todos los miembros activos de este grupo 📣*\n\n*El ${command} esta activo*\n\n⚠️ *Los cual el grupo no esta permitido ingreso de numero arabe (+212, +91, +92, etc), seran explusado automáticamente del Grupo...*`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiArabe = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antiviewonce/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].viewonce = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].viewonce = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/antitoxic/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antitoxic = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antitoxic = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}

if (/autodetect|detect/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
m.reply(`✅ *${command}* ${lenguaje.enable.text1}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
m.reply(`🟢 *${command}* ${lenguaje.enable.text2}`)}}}
break

case 'antiprivado': case 'anticall': {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`⚠️ 𝐀𝐂𝐂𝐈𝐎́𝐍 𝐌𝐀𝐋 𝐔𝐒𝐀𝐃𝐀\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (/antiprivado/.test(command)) {
if (args[0] === "on") {
global.db.data.settings[numBot].antiprivado = true
m.reply(`❬ 🚩 ❭ La funcion ${command} esta habilitada en este grupo *${command}*`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antiprivado = false
m.reply(`❬ 🚩 ❭ La funcion ${command} esta deshabilitada en este grupo`)}}

if (/anticall/.test(command)) {
if (args[0] === "on") {
global.db.data.settings[numBot].anticall = true
m.reply(`❬ 🚩 ❭ La funcion ${command} esta habilitada en este grupo *${command}*`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].anticall = false
m.reply(`❬ 🚩 ❭ La funcion ${command} esta deshabilitada en este grupo`)}}}
break

case 'ping': 
var timestamp = speed();  
var latensi = speed() - timestamp
conn.sendMessage(from, { text: `*Pong 🏓  ${latensi.toFixed(4)}*` }, { quoted: msg, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
break

case 'status': case 'estado': case 'velocidad': {
const { performance } = require('perf_hooks') 
const osu = require('node-os-utils') 
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
const totalMemory = Math.round(os.totalmem() / (1024 * 1024 * 1024))
const freeMemory = Math.round(os.freemem() / (1024 * 1024 * 1024))
const usedMemory = totalMemory - freeMemory
const cpuUsage = os.loadavg()[0]                
let respon = `      \`⧼⧼⧼ 🚀 ＶＥＬＯＣＩＤＡＤ ⧽⧽⧽\`
> ${latensi.toFixed(4)} Seg
> ${oldd - neww} _milisegundos_
                
\`✅ INFORMACIÓN DEL BOT\`               
➢ 𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 : ${runtime(process.uptime())}
➢ 𝙶𝚁𝚄𝙿𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙱𝙰𝙽𝙴𝙰𝙳𝙾𝚂: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
➢ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂: ${Object.keys(global.db.data.users).length}

\`💻 INFO DE SERVIDOR\`
➢ RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
➢ 𝙿𝙻𝙰𝚃𝙰𝙵𝙾𝚁𝙼𝙰 : ${os.platform()}
${lenguaje.info.text4} ${os.hostname()}
${lenguaje.info.text5} ${cpuUsage.toFixed(2)}%
${lenguaje.info.text6} ${totalMemory} GB

\`❐ Uso de memoria de NodeJS\`
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `\`❐ Uso total de CPU\`
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso de núcleo(s) de CPU (${cpus.length} CPU central)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
conn.sendFile(m.chat, imagen1, 'lp.jpg', respon, m, false, { contextInfo: { externalAdReply: {title: "𝘐𝘔𝘍𝘖𝘙𝘔𝘈𝘊𝘐𝘖𝘕 𝘈𝘊𝘌𝘙𝘊𝘈 𝘋𝘌𝘓 𝘉𝘖𝘛", body: "Click para entrar", sourceUrl: md, thumbnailUrl: imagen1 }}})}//`
break 

case 'speedtest': case 'speed': {
const cp = require('child_process') 
const {promisify} = require('util') 
const exec = promisify(cp.exec).bind(cp);
let o;
conn.fakeReply(m.chat, `🚀 𝐏𝐫𝐮𝐞𝐧𝐚 𝐝𝐞 𝐯𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝`, '0@s.whatsapp.net', 'test')
try {
o = await exec('python3 speed.py --secure --share');
} catch (e) {
o = e;
} finally {
const {stdout, stderr} = o;
if (stdout.trim()) m.reply(stdout);
if (stderr.trim()) m.reply(stderr)
console.log(stderr) 
}}
break

case 'grupo':
if (!m.isGroup) return reply(info.group);  
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply(`*Accion mal usaba*\n\n*Use de esta forma:*\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
  if (args[0] === 'abrir') {
m.reply(`*GRUPO ABIERTO CON EXITO✅*`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply(`*GRUPO CERRADO CON EXITO✅*`)
await conn.groupSettingUpdate(from, 'announcement')
}
break

case 'delete': case 'del': {
if (!m.quoted) throw false
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
let { chat, fromMe, id} = m.quoted
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})}
break  
		            
case 'hidetag': case 'notificar': case 'tag': {
if (!m.isGroup) return m.reply(info.group) 
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.quoted && !text) return m.reply(lenguaje.grupos.text) 
try { 
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
} catch {  
conn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}
break 

case 'setppname': case 'nuevonombre': case 'newnombre': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateSubject(m.chat, text)
await reply(`*✅El nombre del grupo se cambio correctamente*`)}
break
case 'setdesc': case 'descripción': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply('*⚠️ Ingresa el texto*')
await conn.groupUpdateDescription(m.chat, text)
await reply(`*✅La descripción del grupo se cambio con éxito*`)}
break
case 'setppgroup': case 'setpp': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!quoted) return reply(`*⚠️Y la imagen?*`)
if (!/image/.test(mime)) return reply(`*⚠️ Responde a una con:* ${prefix + command}`)
if (/webp/.test(mime)) return reply(`*⚠️Responde a una  Image con :* ${prefix + command}`)
var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]}) 
fs.unlinkSync(mediz)
reply(`*✅Exito*`)
} else {
var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
reply(`*✅Exito*`)}}
break

case 'kick': {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
const kicktext = `${lenguaje.grupos.text16}`;
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
if (m.mentionedJid.includes(conn.user.jid)) return;
const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
const owr = m.chat.split`-`[0];
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
break
	
case 'link': case 'linkgc': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
let response = await conn. groupInviteCode(m.chat)
conn.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })}
break
	
case 'promote': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
	
case 'demote': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
	
case 'tagall': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
let teks = `❑ ━〔 *📢 𝙸𝙽𝚅𝙾𝙲𝙰𝙲𝙸𝙾𝙽 📢* 〕━ ❑\n\n`
teks += `❑ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴: ${q ? q : 'Sin mensaje'}\n\n`
for (let mem of participants) {
teks += `➥ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })}
break

case 'play': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!text) return conn.sendMessage(from, { text: `*🚩 Ingrese el nombre del algunas cancion*` }, { quoted: msg })
let yts = require("youtube-yts")
let search = await yts(text)
let anup3k = search.videos[0]
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
conn.sendMessage(from, { image : eek, caption:  `↻ ◁ II ▷ ↺
${anu.title}

ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮▯▯▯` }, { quoted: m})
const playmp3 = require('./libs/ytdl2')
const pl= await playmp3.mp3(anup3k.url)
await conn.sendMessage(from, { audio: fs.readFileSync(pl.path), fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m }); 
await fs.unlinkSync(pl.path)}
break

case 'play2': {
let yts = require("youtube-yts")
if (!text) return m.reply(lenguaje.descargar.text + ` *${prefix + command}* ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
//let message = await 
conn.sendMessage(from, { image : thumbnail, caption:  ` *⌜Cancion Encontrada ✅⌟*\n◉ *Título:* ${yt_play[0].title}\n◉ *Duración:* ${secondString(yt_play[0].duration.seconds)}\n◉ *Publicado:*  ${yt_play[0].ago}\n\n*ESPERE ENVIANDO SU ARCHIVO MP3 ⚠*` }, { quoted: m}) 
try { 
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${ttl}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
let chat = global.db.data.chats[m.chat]
let res = await yts(text)
//let vid = res.all.find(video => video.seconds < 3600)
let vid = res.videos[0]
if (!vid) return `⚠️ Vídeo no encontrado`
let isVideo = /vid$/.test(command)
let q = isVideo ? '360p' : '128kbps' 
let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
let { title, dl_url, quality, size, sizeB } = yt
let isLimit = limit * 1024 < sizeB 
if (!isLimit) conn.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', asDocument: chat.useDocument }, { quoted: m})
m.react(done)
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {video: {url: dl_url}, caption: wm, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `${lenguaje.descargar.text4}\n🔰 ${lenguaje.descargar.title} ${n}`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}
break

case 'play3': case 'playdoc': case 'ytmp3doc': { 
if (!text) return m.reply(lenguaje.descargar.text1 + `\n• *${prefix + command}* ozuna\n• ${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `${lenguaje.descargar.text5}\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n◉ *Link:* ${yt_play[0].url}\n\n${lenguaje.descargar.text6}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}
break

case 'play4': case 'playdoc2': case 'ytmp4doc': {
if (!text) return m.reply(lenguaje.descargar.text1 + `\n• *${prefix + command}* ozuna\n• ${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
let message = await conn.sendMessage(m.chat, { text: `${lenguaje.descargar.text3}\n◉ ${lenguaje.descargar.title} ${yt_play[0].title}\n◉ ${lenguaje.descargar.ago} ${yt_play[0].ago}\n◉ ${lenguaje.descargar.duracion} ${secondString(yt_play[0].duration.seconds)}\n◉ ${lenguaje.descargar.autor} ${yt_play[0].author.name}\n◉ ${lenguaje.descargar.views} ${MilesNumber(yt_play[0].views)}\n◉ *Link:* ${yt_play[0].url}\n\n${lenguaje.descargar.text7}`, contextInfo: { externalAdReply: { title: wm, body: yt_play[0].title.replace(/\*/g, ''), thumbnailUrl: thumbnail, sourceUrl: yt_play[0].url, mediaType: 1, showAdAttribution: false, renderLargerThumbnail: true }}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
 let q = args[1] || '360p'
try {  
const yt = await fg.ytv(args[0], q)
let { title, dl_url, quality, size, sizeB } = yt
 conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${title}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
let yt = await fg.ytmp4(args[0], q)
let { title, size, sizeB, dl_url, quality } = yt
conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${title}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done)	
} catch {
try {		
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸️ ${lenguaje.lengua.titulo} ${ttl}\n┆🔸️ ${lenguaje.lengua.Peso} ${size}\n╰─────────────────`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `*╭┄〔 📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥 〕┄⊱-*\n┆🔸 ${lenguaje.lengua.titulo} ${n}\n┆🔸️${lenguaje.lengua.Peso} ${n3}\n╰─────────────────`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}}
break

case "ytmp3": case "ytaudio": 
const mp = require('./libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return reply(`*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.reply(`Calma ✋🥸🤚\n\n*Estoy descargando tu audio 🔄*\n\nAguarde un momento, por favor`) 
let mediaa = await ytplayvid(text)
const audio = await mp.mp3(text)
await conn.sendMessage(from, {audio: fs.readFileSync(audio.path), mimetype: 'audio/mp4',
contextInfo: {
externalAdReply: { title:audio.meta.title,
body: botname,
//await getBuffer(pl.meta.image),
thumbnail: getBuffer(audio.meta.image), 
mediaType:2,
mediaUrl:text,
}}}, {quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const mp = require('./libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return reply(`*Que esta buscado?*\n\n*Ejemplo:*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.reply(`Calma ✋🥸🤚\n\n*Estoy descargando tu video 🔄*\n\nAguarde un momento, por favor`) 
const vid = await mp.mp4(text)
const ytc = `*${vid.title}*`
await conn.sendMessage(from, {video: {url : vid.videoUrl}, caption: ytc }, {quoted:m})}
break   

case 'git': case 'gitclone':
if (!args[0]) return reply(`*Ejemplo :*\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalido!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(info.error))
break

case 'tiktok': {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
try {
require('./libs/tiktok').Tiktok(args).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})
} catch {
m.reply(info.error)}}
break
case 'tiktokimg': {
if (!text) return m.reply(`${lenguaje.lengua.espere}\n${prefix + command} https://vm.tiktok.com/ZMjnPvJuF/`) 
m.react("📥") 
let imagesSent
if (imagesSent) return;
imagesSent = true    
try {   
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
let tioShadow = await ttimg(text); 
let result = tioShadow?.data;
for (let d of result) {
await conn.sendMessage(m.chat, {image: {url: d}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})};
imagesSent = false
} catch (e) {
imagesSent = false    
return m.reply(`${info.error}\n\n${e}`)}}
break

case 'mediafire': { 
const { mediafireDl } = require('./libs/mediafire.js') 
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`) 
m.react("📥") 
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 1500) return reply(lenguaje.descargar.text15 + util.format(baby1))
const result4 = `╭━─━─━─≪💎≫─━─━─━╮
┆      *MEDIAFIRE*  
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text12} ${baby1[0].nama} 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text13} ${baby1[0].size} 
┆——————«•»——————
┆🔸️ ${lenguaje.descargar.text14} ${baby1[0].mime}
╰━─━─━─≪💎≫─━─━─━╯\n\n${lenguaje.descargar.descargado}` 
m.reply(`${result4}`) 
conn.sendMessage(m.chat, { document: { url: baby1[0].link}, caption: baby1[0].nama}, {quoted: m})}
break

case 'instagram': {
if (!text) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
m.react("📥") 
conn.fakeReply(m.chat, `${lenguaje.lengua.espere}`, '0@s.whatsapp.net', 'No haga spam')
let res = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
let json = await res.json()
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: `🔗 *Url:* ${shortUrl1}`}, {quoted: m})
.catch(console.error)}
break

case 'apk': {
let { search, download } = require('aptoide-scraper')
if (!text) return m.reply(lenguaje.descargar.text24)
try {     
let searchA = await search(text); 
let data5 = await download(searchA[0].id); 
let response = `╭━─━─━─≪≫─━─━─━╮\n│ ≡ ${lenguaje.descargar.text25} ≡\n│——————«•»——————\n│🔸📌 ${lenguaje.descargar.text12} ${data5.name}\n│🔸📦 *Package:* ${data5.package}\n│🔸🕒 ${lenguaje.descargar.text26} ${data5.lastup}\n│🔸📥 ${lenguaje.descargar.text27} ${data5.size}\n╰━─━─━─≪≫─━─━─━╯` 
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
return await m.reply(lenguaje.descargar.text28)}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
} catch { 
return m.reply(info.error)}}
break

case 'twiter': case 'x': {
if (!args[0]) return m.reply(`${lenguaje.lengua.ejem}\n${prefix + command} https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`) 
m.react(rwait)          
try {
let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
conn.sendFile(m.chat, HD, 'twitter.mp4', `•─≪ *TWITTER DL* ≫─•\n\n${desc}`, m)
m.react(done)
} catch (e) {
m.reply(info.error) 
console.log(e)}}
break

case 'ss': case 'ssweb': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!q) return reply(`*Ejemplo:* ${prefix+command} link`)
let krt = await scp1.ssweb(q)
conn.sendMessage(from, {image:krt.result, caption: info.result}, {quoted:m})}
break        

case 'reg': case 'daftar': {
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let user = global.db.data.users[m.sender]
if (user.registered === true) return reply(`*Hey tu ya esta registrado 🤓*`) 
if (!Reg.test(text)) return reply(`*Incorrecto ❎*\n\n> El comando de registo es\n> Comando: ${prefix}reg name.edad`) 
let [_, name, splitter, age] = text.match(Reg)
if (!name) return reply('🚩 Ingresa el nombre') 
if (!age) return reply('🚩 Ingresa la edad acontinuación') 
age = parseInt(age)
if (age > 100) return reply('USTED ES MUY MAYOR') 
if (age < 5) return reply('USTED ES MUY MENOR') 
if (name.length >= 30) return reply('ESCRIBA UN NOMBRE MÁS CORTO') 
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
// let sn = createHash('md5').update(m.sender).digest('hex')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Bogota').format('HH:mm:ss')
global.db.data.users[m.sender].limit += 4
global.db.data.users[m.sender].exp += 200
conn.sendMessage(from, { text: `┏━━『 V E R I F I C A C I O N 』━•
┃• NOMBRE: ${name}
┃• EDAD: ${age}
┃• FECHA: ${date}
┃• NÚMERO: wa.me/${sender.split("@")[0]}
┗•` }, { quoted: fkontak })}
break            

case 's': case 'sticker': {
const d = new Date(new Date + 3600000);
const locale = 'es-ES';
const dias = d.toLocaleDateString(locale, {weekday: 'long'});
const fecha = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
let sticker = `┏• ${packname}
┃
┃ 🟢 ᴀᴜᴛᴏʀ: 
┃ 🗓️ ғᴇᴄʜᴀ: 
┃ 📅 ᴅɪᴀ:
┃ 👑 ᴏᴡɴᴇʀ:
┗━━━━━━━━•`
let sticker2 = ` ┏• ${vs}
 ┃
 ┃ 🟢 ${pushname}
 ┃ 🗓️ ${fecha}
 ┃ 📅 ${dias}
 ┃ 👑 By: elrebelde21
 ┗━━━━━━━━•`
if (/image/.test(mime)) {  
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: sticker, author: sticker2, contextInfo: {forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nna, thumbnailUrl: imagen1}}})
await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 20) return m. reply(lenguaje.sticker.text1)  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: sticker, author: sticker2, contextInfo: { forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' }, 
forwardingScore: 9999999,  
isForwarded: true, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nna, thumbnailUrl: imagen1}}})
await new Promise((resolve) => setTimeout(resolve, 2000));
await fs.unlinkSync(encmedia)  
} else {  
m.reply(lenguaje.sticker.text2)}}
break
				
case 'attp':
if (!text) return reply('ingresa algo para convertirlo a sticker :v')
link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak})
break
				
case 'fetch': case 'get': {
if (!/^https?:\/\//.test(text)) return m.reply('*Ej:* https://ingresa.link.aqui.com') 
const _url = new URL(text);
const url = global.API(_url.origin, _url.pathname, Object.fromEntries(_url.searchParams.entries()), 'APIKEY');
const res = await fetch(url); 
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) { 
throw `Content-Length: ${res.headers.get('content-length')}`;
} 
if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, url, 'file', text, m); 
let txt = await res.buffer();
try {
txt = format(JSON.parse(txt + '')); 
} catch (e) {
txt = txt + '';
} finally {
m.reply(txt.slice(0, 65536) + '')}}
break
				
case 'block': {
if (!isCreator) return reply(info.owner)
reply(`*el usuario fue bloqueado del bot*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block')}
break
	
case 'unblock': {
if (!isCreator) return reply(info.owner)
reply(`*el usuario fue desbloqueado*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock')}
break
	
case 'banchat': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].ban) return reply(`*Chat baneado*`)
 db.data.chats[m.chat].ban = true
 reply(`*Chat baneado con exito el bot no respodera a ningun  comando*`)
 } else if (args[0] === "off") {
if (!db.data.chats[m.chat].ban) return reply(`*Chat desbaneado*`)
db.data.chats[m.chat].ban = false
reply(`*Chat desbaneado hora estoy disponible*`)}}
break
				
case 'getcase': 
if (!isCreator) return conn.sendMessage(from, { text: `*ESTE COMANDO ES PARA MI JEFE*` }, { quoted: msg }); 
if (!text) return m.reply(`no hay comando a buscar o que?`) 
try { 
bbreak = 'break' 
reply('case ' + `'${args[0]}'` + fs.readFileSync('./main.js').toString().split(`case '${args[0]}'`)[1].split(bbreak)[0] + bbreak) 
 } catch (err) { 
console.error(err) 
reply(" Error, tal vez no existe el comando")} 
break

case 'addcase':
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg }); 
if (!text) throw 'Y EL CASE? '
try {
const addcase =[fs.readFileSync('main.js', 'utf8').slice(0, fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('main.js', 'utf8').slice(fs.readFileSync('main.js', 'utf8').lastIndexOf('break') + 5)].join('\n');
fs.writeFileSync('main.js', addcase)
conn.editMessage(m.chat, '*AGUARDE ESTOY AGREGADO EL CASE*', '*LISTO!!*', 5, m)
} catch (error) {
throw error
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
if (!text) return conn.sendMessage(from, { text: `*INGRESE EL MENSAJE PARA DIFUNDIR*` }, { quoted: msg }); 
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`*ENVIANDO MENSAJE, ESPERE UN MOMENTO...*`)
for (let i of anu) {
await sleep(1500)
let txt = `[ ✅ *COMUNICADO OFICIAL* ✅ ]\n\n${text}`
conn.sendText(i, txt, fkontak)
}
reply(`✅ *EL MENSAJE FUE ENVIADO A ${anu.length} GRUPO(S)*\nTIEMPO TOTAL DE ENVÍO: ${anu.length * 1.5}`)}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });   
if (!text) return conn.sendMessage(from, { text: `*INGRESE EL MENSAJE PARA DIFUNDIR*` }, { quoted: msg }); 
let anu = await store.chats.all().map(v => v.id)
reply(`✅ *EL MENSAJE FUE ENVIADO A ${anu.length} CHAT TOTALES*\nTIEMPO TOTAL DE ENVÍO: ${anu.length * 1.5}`)
for (let yoi of anu) {
await sleep(1500)
conn.sendText(yoi, txt, fkontak)}
reply('Listo')}
break

case 'public': case 'publico': {
if (!isCreator) return reply(info.owner)
conn.public = true
reply('✅Cambio con exitoso a uso público')}
break
case 'self': case 'privado': {
if (!isCreator) return reply(info.owner)
conn.public = false
reply('✅Cambio con exitoso a uso privado')}
break	

case 'autoadmin': case 'tenerpoder': {
if (!m.isGroup) return reply(info.group)
if (!isCreator) return reply(info.owner)
m.reply('Ya eres admin mi jefe 😎') 
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
break 

case 'leave': {
if (!isCreator) return reply(info.owner)
reply(m.chat, `*Adios fue un gusto esta aqui hasta pronto*`)
await conn.groupLeave(m.chat)}
break

case 'backup': case 'respaldo': case 'copia': {
try {
let d = new Date
let date = d.toLocaleDateString('fr', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./database.json`)
let creds = await fs.readFileSync(`./sessions/creds.json`)
await m.reply(lenguaje.owner.text27)
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} catch (e) {
console.log(e)}}

case 'fotobot': case 'nuevafoto': case 'seppbot': {
if (!quoted) return m.reply(`¿Donde esta la imagen?\n\nEnviar/responder a una imagen con : ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Enviar/responder imagen con : ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Enviar/responder imagen con : ${prefix + command}`)
var mediz = await conn.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [{tag: 'picture', attrs: { type: 'image' }, content: img }]})
fs.unlinkSync(mediz)
m.reply(`exito`)
} else {
var memeg = await conn.updateProfilePicture(numBot, { url: mediz })
fs.unlinkSync(mediz)
m.reply(`exito`)}}
break

case 'botname': case 'namebot': {
if (!text) return m.reply(`Ej: ${prefix + command} NovaBot`)
await conn.updateProfileName(text)
m.reply(`Exito`)}
break
				
case 'update':
if (!isCreator) return conn.sendMessage(from, { text: info.owner }, { quoted: msg });    
try {    
let stdout = execSync('git pull' + (m.fromMe && q ? ' ' + q : ''))
await conn.sendMessage(from, { text: stdout.toString() }, { quoted: msg });
} catch { 
let updatee = execSync('git remote set-url origin https://github.com/elrebelde21/InfinityBot-MD.git && git pull')
await conn.sendMessage(from, { text: updatee.toString() }, { quoted: msg })}  
break
}

//Sin prefijo
switch (command) {
case 'menu': case 'help': {
//let owner = owner + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let me = m.sender
let timestampe = speed()
let latensie = speed() - timestampe
const {welcome, antilink, antiFake, antiArabe, detect, autosticker, antiNsfw, modeadmin, antitoxic, antiprivado, anticall, antilink2, AntiTiktok, AntiTelegram, AntiFacebook, AntInstagram, AntiYoutube, AntiTwitter, autoread} = global.db.data.chats[m.chat];
menu = `Hola @${me.split('@')[0]} mi nombre es ${global.botname}

• *Fecha :* ${time}
• *Actividad :* ${runtime(process.uptime())}
• *Velocidad :* ${latensie.toFixed(4)} miliseconds
• *Modo :* ${conn.public ? 'público' : `Privado`}
• *Prefix :* ${prefix}
• *Usuario reg :* ${rtotalreg}
• *Usuarios totales:* ${totalreg}

*𝘈𝘊𝘛𝘐𝘝𝘈𝘙 𝘛𝘜 𝘉𝘖𝘛 24/7 𝘈𝘊𝘛𝘐𝘝𝘖 𝘌𝘕 𝘐𝘕𝘍𝘐𝘕𝘐𝘛𝘠-𝘏𝘖𝘚𝘛:*
${dash}

════════════════════
*𝘉𝘖𝘛 𝘚𝘐𝘔𝘗𝘓𝘌 𝘊𝘖𝘕 𝘗𝘖𝘊𝘖𝘚 𝘊𝘖𝘔𝘈𝘕𝘋𝘖*
════════════════════

|- *_-¿PREGUNTA / DUDAS?-_*
• ${prefix}report
• ${prefix}creador
• ${prefix}staff
• ${prefix}solicitud
• ${prefix}ayudar
• ${prefix}precios
• ${prefix}pagos

||- *_-INFORMACIONES-_*
[🚩] ${prefix}ping
[🚩] ${prefix}estado
[🚩] ${prefix}status
[🚩] ${prefix}speed
[🚩] ${prefix}grupos 
[🚩] ${prefix}panel

||- *_-GRUPOS-_*
||- *_-ADMINISTRADORES-_*
||- *_-Menciones-_*

[📧] ${prefix}hidetag
[📧] ${prefix}tangall
[👤] ${prefix}kick
[👤] ${prefix}del
[🔰] ${prefix}grupo open / close
[🔰] ${prefix}setppname
[🔰] ${prefix}setdesc
[🔰] ${prefix}setppgroup
[🔰] ${prefix}promote
[🔰] ${prefix}demote
[🔰] ${prefix}link
[🔰] ${prefix}admins _(sin prefijo)_

||- *_-BUSCADORES-_*
[🪄] ${prefix}ia
[🪄] ${prefix}gemeni
[🪄] ${prefix}google
🪄] ${prefix}imagen
🪄] ${prefix}yts

||- *_-Proteccion de Grupos-_*
[🛡️] ${prefix}antilink on / off [${antilink ? '✅' : '❌'}]
[🛡️] ${prefix}welcome on/off [${welcome ? '✅' : '❌'}]
[🛡️] ${prefix}antiFake on/off [${antiFake ? '✅' : '❌'}]
[🛡️] ${prefix}antiArabe on/off [${antiArabe ? '✅' : '❌'}]
[🛡️] ${prefix}detect on/off [${detect ? '✅' : '❌'}]
[🛡️] ${prefix}modeadmin on/off [${modeadmin ? '✅' : '❌'}]
[🛡️] ${prefix}antitoxic on/off [${antitoxic ? '✅' : '❌'}]
[🛡️] ${prefix}antiprivado on/off [${antiprivado ? '✅' : '❌'}]
[🛡️] ${prefix}anticall on/off [${anticall ? '✅' : '❌'}]
[🛡️] ${prefix}antilink2 on/off [${antilink2 ? '✅' : '❌'}]
[🛡️] ${prefix}AntiTiktok on/off [${AntiTiktok ? '✅' : '❌'}]
[🛡️] ${prefix}AntiTelegram on/off [${AntiTelegram ? '✅' : '❌'}]
[🛡️] ${prefix}AntiFacebook on/off [${AntiFacebook ? '✅' : '❌'}]
[🛡️] ${prefix}AntInstagram on/off [${AntInstagram ? '✅' : '❌'}]
[🛡️] ${prefix}AntiYoutube on/off [${AntiYoutube ? '✅' : '❌'}]
[🛡️] ${prefix}AntiTwitter on/off [${AntiTwitter ? '✅' : '❌'}]
[🛡️] ${prefix}autoread on/off [${autoread ? '✅' : '❌'}]

||- *_-DESCARGAS-_*
[🚀] ${prefix}play
[🚀] ${prefix}playdoc
[🚀] ${prefix}play3
[🚀] ${prefix}play4
[🚀] ${prefix}ytmp3
[🚀] ${prefix}ytmp4
[🚀] ${prefix}gitclone
[🚀] ${prefix}mediafire
[🚀] ${prefix}tiktok
[🚀] ${prefix}tiktokimg
[🚀] ${prefix}apk
[🚀] ${prefix}twiter

||- *_-STICKER-_*
[👾] ${prefix}sticker
[👾] ${prefix}attp

> SimpleBot | ${botname}`
let ments = [me]        
conn.sendMessage(from, { 
text: menu,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": imagen1, 
"mediaUrl": panel,
"sourceUrl": panel
}}}, { quoted: fkontak })}
break
           
case 'precios': case 'precio': 
conn.sendMessage(from, { 
text: `*🚩 Precios :*
* 1GB, 100CPU = 1dolar
* 2GB, 120CPU = 2dolar
* 3GB, 140CPU = 3dolar
* 4GB, 175CPU = 4dolar
* 5GB, 200CPU = 5dolar`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": imagen1, 
"mediaUrl": panel,
"sourceUrl": panel
}}}, { quoted: fkontak })
break
           
case 'pagos': case 'pago':
conn.sendMessage(from, { 
text: `*🛍️Método de pago :*

*• PayPal :* paypal.me/OfcGB
*• Mercado pago, alías:* OficialGB
*• Naranja x, alías:* OficialGL
*• Yape (Perú) :* +51948705559
*• Nequi (Colombia):* +573027866596
*• DolarApp:* $oficialgb`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": imagen1, 
"mediaUrl": panel,
"sourceUrl": panel
}}}, { quoted: fkontak })
break

case 'infohost': case 'host': {
conn.sendMessage(m.chat, { text: lenguaje.info.text27(nna, host, paypal, fb),
contextInfo:{
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'INFINITY-WA 💫' },
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
"sourceUrl": panel}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
break

case 'report': case 'reportar': case 'solicitud': case 'ayudar': {
if (!text) return reply(`*🚩 Por favor, Ingrese sus reporte o problema para que algun moderador pueda ayudarle*`)
conn.sendTextWithMentions(`120363267424451517@g.us`, `[ ❗ 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐑 𝐒𝐔𝐒 𝐏𝐑𝐄𝐒𝐄𝐍𝐂𝐈𝐀 ❗]\n\n• 𝐔𝐬𝐮𝐚𝐫𝐢𝐨: @${m.sender.split("@")[0]}\n• 𝐌𝐞𝐧𝐬𝐚𝐣𝐞: ${text}`)
reply(`*✅ Sus reportes fueron enviados a los moderadores del host, tan pronto como sea posible se comunicarán con usted*`)}
break 

case 'owner': case 'creator': case 'creador': case 'staff': {
conn.sendTextWithMentions(m.chat, `👑 𝐌𝐈 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐄𝐒: wa.me/message/FETBF7YBO37CG1

🚩 𝐒𝐓𝐀𝐅𝐅 𝐃𝐄𝐋 𝐇𝐎𝐒𝐓𝐈𝐍𝐆: 
• @527294888993
• @5492964650915
• @573012482597
• @51948705559
• @573012482597
• @5217442363122
• @51935531943
• @50492280729
• ${fb}

> *Contáctelos si necesita ayudar o tiene alguna pregunta. Por favor, evite molestar, ya que podrían bloquearlo 😉*`)}
break

case 'panel': case 'pagina': {
m.reply(panel)}
break
case 'grupos': {
m.reply(nn)}
break
case 'admins': case 'administradores': {
if (!m.isGroup) return m.reply(info.group);  
//const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
const pesan = args.join` `;
const oi = `${lenguaje.grupos.text21} ${pesan}`;
const text = `═✪〘 *ＩＮＶＯＣＡＮＤＯ ＡＤＭＩＮＳ* 〙✪═\n\n[ ${groupMetadata.subject} ]\n\n• ${oi}\n\n• *ᴀᴅᴍɪɴs:*\n➥ ${listAdmin}\n\n${lenguaje.grupos.text22}`.trim(); 
conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
break
         
async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};

async function GDriveDl(url) {
  let id;
  if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL';
  id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
  if (!id) throw 'ID Not Found';
  const res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
    method: 'post',
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'content-length': 0,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'origin': 'https://drive.google.com',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
      'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
      'x-drive-first-party': 'DriveWebUi',
      'x-json-requested': 'true'}});
  const {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
  if (!downloadUrl) throw 'Link Download Limit!';
  const data = await fetch(downloadUrl);
  if (data.status !== 200) throw data.statusText;
  return {downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')};
}

async function ttimg(link) {
    try {    
        let url = `https://dlpanda.com/es?url=${link}&token=G7eRpMaa`;    
        let response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        let imgSrc = [];
        $('div.col-md-12 > img').each((index, element) => {
            imgSrc.push($(element).attr('src'));
        });
        if (imgSrc.length === 0) {
            return { data: '*[ ⚠️ ] No se encontraron imágenes en el enlace proporcionado.*' };
        }
        return { data: imgSrc }; 
    } catch (error) {
        console.lo (error);
        return { data: '*[ ⚠️ ] No se obtuvo respuesta de la página, intente más tarde.*'};
    };
};
         
default:
/*if (budy.startsWith(`dash`)) {
m.reply(`🚩 𝐏𝐑𝐎𝐍𝐓𝐎`)}*/
if (budy.startsWith('>')) {
if (!isCreator) return
try {
return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('=>')) {
if (!isCreator) return
try {
return  reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  //gata.sendMessage(from, JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'), text, { quoted: msg })
} catch (e) {
e = String(e)
reply(e)
}}
if (budy.startsWith('$')) {
if (!isCreator) return
try {
return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))
} catch (err) {
console.log(util.format(err))
let e = String(err)
conn.sendMessage("447700168473@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲" + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})