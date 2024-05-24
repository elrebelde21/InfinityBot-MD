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
  var prefix = /^[°•π÷×¶∆£¢*€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£*¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : ""
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
if (global.db.data.chats[m.chat].antiprivado && !isCreator) {
if (m.isBaileys && m.fromMe) return !0;
if (m.isGroup) return !1;
if (!m.message) return !0;
if (msg.text.toLowerCase().includes('staff') || msg.text.toLowerCase().includes('ayudar') || msg.text.toLowerCase().includes('estado') || msg.text.toLowerCase().includes('owner') || msg.text.toLowerCase().includes('infohost') || msg.text.toLowerCase().includes('grupos')) return !0 //comando a los que si responde el privado
const chat = global.db.data.chats[m.chat];
const bot = global.db.data.setting[numBot]
await conn.sendMessage(m.chat, {text: `${lenguaje['smsWel']()} @${sender.split`@`[0]} ${lenguaje['smsAntiPv']()}`, mentions: [sender], },{quoted: m}) 
await conn.updateBlockStatus(m.chat, 'block')
return !1;
}

//--------------------[ viewOnceMessage ]-----------------------
if (m.mtype == 'viewOnceMessageV2') { 
if (global.db.data.chats[m.chat].viewonce) return
teks = `${lenguaje['viewOnce']()}`
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

//--------------------[ ANTILINK DE YOUTUBE ]-----------------------
if (global.db.data.chats[m.chat].AntiYoutube && !isCreator) {
if (budy.includes("https://youtu.be/") || budy.includes("https://youtube.com/")) {
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//--------------------[ ANTILINK DE IG ]-----------------------
if (global.db.data.chats[m.chat].AntInstagram && !isCreator) {
if (budy.includes("https://www.instagram.com/")) {
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text:`${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//--------------------[ ANTILINK DE FACEBOOK ]-----------------------
if (global.db.data.chats[m.chat].AntiFacebook && !isCreator) {
if (budy.includes("https://facebook.com/")) {
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text: `${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//--------------------[ ANTILINK DE TELEGRAM ]-----------------------
if (global.db.data.chats[m.chat].AntiTelegram && !isCreator) {
if (budy.includes("https://t.me/")) {
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text: `${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//--------------------[ ANTILINK DE TIKTOK ]-----------------------
if (global.db.data.chats[m.chat].AntiTiktok && !isCreator) {
if (budy.match("https://www.tiktok.com/") || budy.match("https://vm.tiktok.com/")) {
//f (!isCreator) return m.reply(`Es mi creador Salvador`) 
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
conn.sendMessage(m.chat, {text: `${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//--------------------[ ANTILINK DE X (TWITER) ]-----------------------
if (global.db.data.chats[m.chat].AntiTwitter) {
if (budy.includes("https://twitter.com/")){
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text: `${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//-------[ ANTILINK2 (TODOS LOS ENLACES) ]------------
if (global.db.data.chats[m.chat].antiLink2 && !isCreator) {
if (budy.includes("https://")) {
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
if (m.key.fromMe) return
if (!isCreator) return 
conn.sendMessage(m.chat, {text: `${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

//-----------------[ ANTILINK DE WHATSAPP ]---------------------	
if (global.db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
const groupAdmins = participants.filter((p) => p.admin);
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n➥ ');
let delet = m.key.participant
let bang = m.key.id
conn.sendMessage(m.chat, {text: `${lenguaje['AntiLink']()}\n@${sender.split("@")[0]} ${lenguaje['AntiLink2']()}`, mentions: [sender], },{quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
if (!isBotAdmins) return m.reply(lenguaje['AntiLink4']())
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
if (isGroupAdmins) return reply(lenguaje['AntiLink3']())
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
if (!(user.warn >= 4)) await conn.sendMessage(m.chat, {text: `${lenguaje['AntiToxic'](m, isToxic)}\n⚠️ *${user.warn}/4*\n\n${botname}`, mentions: [m.sender]}, {quoted: m})
if (user.warn >= 4) {
user.warn = 0;
await conn.sendMessage(m.chat, {text: `*@${m.sender.split('@')[0]} ${lenguaje['AntiToxic2']()}*`, mentions: [m.sender]}, {quoted: m})
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
return !1;
}} 

//--------------------[ MODO SELF ]-----------------------
if (!conn.public && !isCreator) {
if (!m.key.fromMe) return
}        	

//--------------------[ BANEAR EL CHAT ]-----------------------
if (global.db.data.chats[m.chat].ban && !isCreator) {
return
}

//--------------------[ MODO ADMINS ]-----------------------
if (global.db.data.chats[m.chat].modeadmin && !isGroupAdmins) {
return
}
      
//--------------------[ UPTIME ]-----------------------      
//Tiempo de Actividad del bot
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
        
//----------------[ COMIENZA LA DIVISIÓN ]---------------------        
switch (prefix && command) { 

case 'yts': //Buscadores
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit) //Sin se quedar sin límites, no puede usar este comando

if (!text) return reply(`*${lenguaje.sms.text}*\n${prefix + command} historia wa anime`)
const yts = require("youtube-yts");
const search = await yts(text);
//reply(info.wait) 
const {key} = await conn.sendMessage(from, {text: info.wait}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waittt, edit: key}, { quoted: fkontak })
await conn.sendMessage(from, {text: info.waitttt, edit: key}, { quoted: fkontak })	
let teks = `${lenguaje['result']()} ` + text + '\n\n';
let no = 1;
let themeemoji = "✨"
for (let i of search.all) {
  teks += `[ ${no++} ]\n\n${themeemoji} ${lenguaje.sms.text1}: ${i.title}\n${themeemoji} ${lenguaje.sms.text2}: ${i.views}\n${themeemoji} ${lenguaje.sms.text3}: ${i.timestamp}\n${themeemoji} ${lenguaje.sms.text4}: ${i.ago}\n${themeemoji} URL: ${i.url}\n\n━━━━━━━━━━━━\n\n`;
}
await conn.sendMessage(from, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: fkontak });
await conn.sendMessage(from, {text: info.result, edit: key}, { quoted: fkontak })
db.data.users[m.sender].limit -= 1 //aqui agregar la cantidad de cuanto diamante/limite quiere te gaste por comando ejemplo: 1 = 1 límite (diamante) 
m.reply('1 ' + info.limit) //"opcional" si quiere te mande un texto de cuanto límite (diamante) has gastado el usuario
break

case 'google': {      
if (!text) return reply(`*${lenguaje.sms.text}*\n${prefix + command} gata`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google : ${text}\n\n`
for (let g of res) {
teks += `• *${lenguaje.sms.text1}* : ${g.title}\n`
teks += `•  *${lenguaje.sms.text5}* : ${g.snippet}\n`
teks += `• *Link* : ${g.link}\n\n━━━━━━━━━━━━━━━━━━━━\n\n`
} 
reply(teks)})
}
break 

case 'imagen': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
const {googleImage} = require('@bochilteam/scraper') 

if (budy.includes('gore') || budy.includes('cp')|| budy.includes('porno')|| budy.includes('Gore')|| budy.includes('rule')|| budy.includes('CP') || budy.includes('Rule34') /*|| budy.includes('escribe la palabras aquí')*/) return m.reply(`😐 ${lenguaje.sms.text6}`); //puede agregar mas palabras cuales no quiere que Bot busqué como ese ejemplo 

if (!text) return m.reply(`*${lenguaje.sms.text}*\n${prefix + command} gatito`)
try {  
image = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
n = image.result
images = n[Math.floor(Math.random() * n.length)]
conn.sendMessage(m.chat, { image: { url: images}, caption: `💫 ${lenguaje['result']()} ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
} catch {
try {  
const res = await googleImage(text);
const image = res[Math.floor(Math.random() * res.length)]
const link = image;
conn.sendMessage(m.chat, { image: { url: link}, caption: `💫 ${lenguaje['result']()} ${text}`}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
} catch (e) {
console.log(e)
}}}
break

//Herramientas
case 'traducir': case 'translate': case 'tr': {
const translate = require('@vitalets/google-translate-api') 
if (!args || !args[0]) return m.reply(`*${lenguaje.sms.text}*\n${prefix + command} es hello`)
let lang = args[0];
let text = args.slice(1).join(' ');
const defaultLang = 'es';
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ');
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
try {
const result = await translate(`${text}`, {to: lang, autoCorrect: true});
await m.reply(result.text);
} catch {
try {
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply(result2);
} catch {
await m.reply(info.error)
}}}
break

case 'ia': case 'chatgpt': {
if (!text) return conn.sendMessage(from, { text: `⚠️ ${lenguaje.sms.text7}\n• ${prefix + command} Recomienda un top 10 de películas de acción` }, { quoted: msg })
try {
await conn.sendPresenceUpdate('composing', m.chat)
let syst = `Eres InfinityBot-MD, un gran modelo de lenguaje entrenado por OpenAI. Siga cuidadosamente las instrucciones del usuario. Responde usando Markdown.`
let gpt = await fetch(global.API('fgmods', '/api/info/openai', { prompt: syst, text }, 'apikey'));
let res = await gpt.json()
await m.reply(res.result)
} catch {
try {
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`);
let res = await gpt.json()
await m.reply(res.data)
} catch (e) {
console.log(e)}}}
break

case 'chatgpt2': case 'ia2': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return conn.sendMessage(from, { text: `⚠️ ${lenguaje.sms.text7}\n• ${prefix + command} Recomienda un top 10 de películas de acción` }, { quoted: msg })   
await conn.sendPresenceUpdate('composing', m.chat) 
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`);
let res = await gpt.json()
await m.reply(res.gpt)}
break

case 'gemini': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return conn.sendMessage(from, { text: `⚠️ ${lenguaje.sms.text7}\n• ${prefix + command} Recomienda un top 10 de películas de acción` }, { quoted: msg })
try {
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(global.API('fgmods', '/api/info/gemini', { text }, 'apikey'));
let res = await gpt.json()
await m.reply(res.result)
} catch {
try {
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/gemini?query=${text}`);
let res = await gpt.json()
await m.reply(res.message)
} catch (e) {
console.log(e)}}}
break

case 'copilot': case 'bing': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return conn.sendMessage(from, { text: `⚠️ ${lenguaje.sms.text7}\n• ${prefix + command} Recomienda un top 10 de películas de acción` }, { quoted: msg })    
await conn.sendPresenceUpdate('composing', m.chat)
let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/bingia?query=${text}`);
let res = await gpt.json()
await m.reply(res.message)}
break

case 'ss': case 'ssweb': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!q) return reply(`*${lenguaje.sms.text}* ${prefix+command} link`)
let krt = await scp1.ssweb(q)
conn.sendMessage(from, {image:krt.result, caption: info.result}, {quoted:m})
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
}
break        

//Información
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
let respon = `      \`⧼⧼⧼ ${lenguaje.sms.text8} ⧽⧽⧽\`
> ${latensi.toFixed(4)} Seg
> ${oldd - neww} _milisegundos_
                
${lenguaje.sms.text9}          
➢ ${lenguaje.sms.text10}: ${runtime(process.uptime())}
➢ ${lenguaje.sms.text11}: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}
➢ ${lenguaje.sms.text12}: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
➢ ${lenguaje.sms.text13}: ${Object.keys(global.db.data.users).length}

${lenguaje.sms.text14}
➢ ${lenguaje.sms.text15}: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
➢ ${lenguaje.sms.text16} : ${os.platform()}
➢ ${lenguaje.sms.text17}: ${os.hostname()}
➢ ${lenguaje.sms.text18}:  ${cpuUsage.toFixed(2)}%
➢ ${lenguaje.sms.text19}: ${totalMemory} GB

${lenguaje.sms.text20}
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `${lenguaje.sms.text21}
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_Uso de núcleo(s) de CPU (${cpus.length} CPU central)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()//`
conn.sendFile(m.chat, imagen1, 'lp.jpg', respon, m, false, { contextInfo: { externalAdReply: {title: "𝘐𝘔𝘍𝘖𝘙𝘔𝘈𝘊𝘐𝘖𝘕 𝘈𝘊𝘌𝘙𝘊𝘈 𝘋𝘌𝘓 𝘉𝘖𝘛", body: "Click para entrar", sourceUrl: md, thumbnailUrl: imagen1 }}})}
break 

case 'speedtest': case 'speed': {
const cp = require('child_process') 
const {promisify} = require('util') 
const exec = promisify(cp.exec).bind(cp);
let o;
conn.fakeReply(m.chat, `🚀 𝐏𝐫𝐮𝐞𝐛𝐚 𝐝𝐞 𝐯𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝`, '0@s.whatsapp.net', 'test')
try {
o = await exec('python3 speed.py --secure --share');
const {stdout, stderr} = o;
if (stdout.trim()) {
const match = stdout.match(/http[^"]+\.png/);
const urlImagen = match ? match[0] : null;
await conn.sendMessage(m.chat, {image: {url: urlImagen}, caption: stdout.trim()}, {quoted: m})}
if (stderr.trim()) { 
const match2 = stderr.match(/http[^"]+\.png/);
const urlImagen2 = match2 ? match2[0] : null;    
await conn.sendMessage(m.chat, {image: {url: urlImagen2}, caption: stderr.trim()}, {quoted: m});
}} catch (e) {
o = e.message;
return m.reply(o)
console.log(e)}}
break

//Gestión del Grupo		
case 'setrules': case 'addrules': case 'addrule': {
let chat = global.db.data.chats[m.chat]
if (!text) return m.reply(`${lenguaje.sms.text22}`)  
chat.rules = text
m.reply(`${lenguaje['exito']()}`)}
break

case 'reglas': case 'rule': case 'rules': {
let chat = global.db.data.chats[m.chat]
if (!chat.rules === '') m.reply(`*Sin reglas*`) 
m.reply(`${chat.rules}`)}
break		

case 'grupo':
if (!m.isGroup) return reply(info.group);  
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply(`${lenguaje.sms.text23}\n*${prefix + command} abrir*\n*${prefix + command} cerrar*`)
  if (args[0] === 'abrir') {
m.reply(`${lenguaje.sms.text24}`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'cerrar') {
m.reply(`${lenguaje.sms.text25}`)
await conn.groupSettingUpdate(from, 'announcement')
}
break

case 'delete': case 'del': {
if (!m.quoted) throw false
if (!isBotAdmins) return reply(info.botAdmin)
//if (!isGroupAdmins) return reply(info.admin)
let { chat, fromMe, id} = m.quoted
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})}
break  
		            
case 'hidetag': case 'notificar': case 'tag': {
if (!m.isGroup) return m.reply(info.group) 
if (!isGroupAdmins) return m.reply(info.admin)
if (!m.quoted && !text) return m.reply(`*${lenguaje.sms.text26}*`) 
try { 
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
} catch {  
conn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}
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

case 'setppname': case 'nuevonombre': case 'newnombre': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply(`*${lenguaje.sms.text26}*`) 
await conn.groupUpdateSubject(m.chat, text)
}
break

case 'setdesc': case 'descripción': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!text) return reply(`${lenguaje.sms.text26}`) 
await conn.groupUpdateDescription(m.chat, text)
}
break

case 'setppgroup': case 'setpp': {
if (!m.isGroup) return reply(info.group) 
if (!isBotAdmins) return reply(info.botAdmin)
if (!isGroupAdmins) return reply(info.admin)
if (!quoted) return reply(`*${lenguaje.sms.text27}*`)
if (!/image/.test(mime)) return reply(`*${lenguaje.sms.text27}*`)
if (/webp/.test(mime)) return reply(`*${lenguaje.sms.text27}*`)
var mediz = await conn. downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await conn.query({tag: 'iq', attrs: {to: m.chat, type:'set', xmlns: 'w:profile:picture' }, content: [ {tag: 'picture', attrs: { type: 'image' }, content: img } ]}) 
fs.unlinkSync(mediz)
} else {
var memeg = await conn.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
}}
break

case 'kick': {
if (!m.isGroup) return m.reply(info.group) 
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
const kicktext = `Etiqueta a alguien boludo`;
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
	
//Descarga
case 'play': {
if (global.db.data.users[m.sender].registered < true) return reply(info.registra)
if (!text) return conn.sendMessage(from, { text: `*🚩 ${lenguaje.sms.text}*\n${prefix + command} ozuna` }, { quoted: msg })
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
await fs.unlinkSync(pl.path)
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
}
break

case 'play2': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
let yts = require("youtube-yts")
if (!text) return m.reply(`*🚩 ${lenguaje.sms.text}*\n${prefix + command} ozuna`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
//let message = await 
conn.sendMessage(from, { image : thumbnail, caption:  `↻ ◁ II ▷ ↺
${yt_play[0].title}

ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮▯▯▯` }, { quoted: m})
try { 
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${ttl}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
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
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
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
await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `${n}`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}
break

case 'play3': case 'playdoc': case 'ytmp3doc': { 
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*${lenguaje.sms.text}*\n*${prefix + command}* ozuna\n*${prefix + command}* https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
try { 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
m.reply(`*Descarga sus audio ${yt_play[0].title} en documentos espere un momento....*`) 
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch {
try {
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}
break

case 'play4': case 'playdoc2': case 'ytmp4doc': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`${lenguaje.sms.text}\n*${prefix + command}* ozuna\n*${prefix + command}* https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`) 
m.react(rwait) 
let vid = (await yts(text)).all[0]
const yt_play = await search(args.join(" "))
let { title, description, url, thumbnail, videoId, timestamp, views, published } = vid
m.reply(`*Descarga sus video ${yt_play[0].title} en documentos espere un momento....*`) 
 let q = args[1] || '360p'
try {  
const yt = await fg.ytv(args[0], q)
let { title, dl_url, quality, size, sizeB } = yt
 conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${title}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch {
try {
let yt = await fg.ytmp4(args[0], q)
let { title, size, sizeB, dl_url, quality } = yt
conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${title}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done)	
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch {
try {		
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `${ttl}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
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
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `${n}`, thumbnail: await fetch(n4)}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
m.react(done) 
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
} catch (e) {
m.react(error) 
return m.reply(info.error) 
console.log(e)}}}}}}
break

case "ytmp3": case "ytaudio": 
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
const mp = require('./libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return reply(`*${lenguaje.sms.text}*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.react("🕕") 
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
m.react("✅") 
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
break
case 'ytmp4': case 'ytvideo': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
const mp = require('./libs/ytdl2')
if (args.length < 1 || !isUrl(text) || !mp.isYTUrl(text)) return reply(`*${lenguaje.sms.text}*\n${prefix + command} https://youtu.be/7ouFkoU8Ap8?si=Bvm3LypvU_uGv0bw`)
m.react("🕕") 
const vid = await mp.mp4(text)
const ytc = `*${vid.title}*`
await conn.sendMessage(from, {video: {url : vid.videoUrl}, caption: ytc }, {quoted:m})
m.react("✅") 
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
}
break   

case 'git': case 'gitclone': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!args[0]) return reply(`*${lenguaje.sms.text}*\n${prefix + command} ${md}`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalido!!`)
m.react('🕕') 
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }) //.catch((err) => reply(info.error)
db.data.users[m.sender].limit -= 10
m.reply('10 ' + info.limit)
m.react('✅')}
break

case 'tiktok': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`${lenguaje.sms.text}\n${prefix + command} https://vm.tiktok.com/ZMjdrFCtg/`)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return m.reply(`Link invalido!!`)
try {
m.react("🕕") 
require('./libs/tiktok').Tiktok(args).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})})
m.react("✅") 
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
} catch {
m.reply(info.error)}}
break
case 'tiktokimg': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*${lenguaje.sms.text}*\n${prefix + command} https://vm.tiktok.com/ZMjnPvJuF/`) 
m.react("📥") 
let imagesSent
if (imagesSent) return;
imagesSent = true    
try {   
let tioShadow = await ttimg(text); 
let result = tioShadow?.data;
for (let d of result) {
await conn.sendMessage(m.chat, {image: {url: d}}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})};
imagesSent = false
db.data.users[m.sender].limit -= 5
m.reply('5 ' + info.limit)
} catch (e) {
imagesSent = false    
return m.reply(`${info.error}\n\n${e}`)}}
break

case 'mediafire': { 
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
const { mediafireDl } = require('./libs/mediafire.js') 
if (!text) return m.reply(`${lenguaje.sms.text}\n${prefix + command} https://www.mediafire.com/file/admrdma1ff3cq10/Siete-Ocho.zip/file`) 
m.react("🕕") 
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 1500) return reply(lenguaje.descargar.text15 + util.format(baby1))
conn.sendMessage(m.chat, { document: { url: baby1[0].link}, caption: baby1[0].nama}, {quoted: m})
m.react("✅") 
db.data.users[m.sender].limit -= 15
m.reply('15 ' + info.limit)
}
break

case 'instagram': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return m.reply(`*${lenguaje.sms.text}*\n${prefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=`)
m.react("📥") 
let res = await fetch(`https://vihangayt.me/download/instagram?url=${text}`)
let json = await res.json()
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
conn.sendMessage(m.chat, { video: { url: json.data.data[0].url }, caption: `${shortUrl1}`}, {quoted: m})
.catch(console.error)
db.data.users[m.sender].limit -= 10
m.reply('10 ' + info.limit)}
break

case 'apk': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
let { search, download } = require('aptoide-scraper')
if (!text) return m.reply(`*${lenguaje.sms.text}*\n${prefix + command} whatsapp`)
try {     
let searchA = await search(text); 
let data5 = await download(searchA[0].id); 
await m.reply(`*Descargado sus apk:* ${data5.name}\n\nᴱˢᵖᵉʳᵉ ᵘⁿ ᵐᵒᵐᵉⁿᵗᵒ`) 
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) { 
return 
}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}); 
db.data.users[m.sender].limit -= 16
m.reply('16 ' + info.limit)
} catch { 
return m.reply(info.error)}}
break

case 'twiter': case 'x': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!args[0]) return m.reply(`${lenguaje.sms.text}\n${prefix + command} https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`) 
m.react(rwait)          
try {
let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
conn.sendFile(m.chat, HD, 'twitter.mp4', `•─≪ *TWITTER DL* ≫─•\n\n${desc}`, m)
m.react(done)
db.data.users[m.sender].limit -= 10
m.reply('10 ' + info.limit)
} catch (e) {
m.reply(info.error) 
console.log(e)}}
break

//Rpg 
case 'reg': case 'daftar': { 
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let user = global.db.data.users[m.sender]
if (user.registered === true) return reply(`${lenguaje.sms.text28}`) 
if (!Reg.test(text)) return reply(`${lenguaje.sms.text29} ${prefix}reg name.edad`) 
let [_, name, splitter, age] = text.match(Reg)
if (!name) return reply(`${lenguaje.sms.text29} ${prefix}reg name.edad`) 
if (!age) return reply(`${lenguaje.sms.text29} ${prefix}reg name.edad`)  
age = parseInt(age)
if (age > 100) return reply('USTED ES MUY MAYOR') 
if (age < 5) return reply('USTED ES MUY MENOR') 
if (name.length >= 30) return reply('Name largo ') 
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
conn.sendMessage(from, { text: `┏━━『 ${lenguaje.sms.text30} 』━•
┃• ${lenguaje.sms.text31}: ${name}
┃• ${lenguaje.sms.text32}: ${age}
┃• ${lenguaje.sms.text33}: ${date}
┃• ${lenguaje.sms.text34}: wa.me/${sender.split("@")[0]}
┗•

> ${lenguaje.sms.text35} #idioma` }, { quoted: fkontak })}
break            

//idiomas 
case 'idioma': case 'Language': case 'idiomas': { 
let user = global.db.data.users[m.sender]
if (!text) return m.reply(lenguaje.AvisoMG() + lenguaje.idioma(prefix)) 
try { 
if (budy.includes(`1`)) {  
idioma = 'es' 
idiomas = 'español'
}
if (budy.includes(`2`)) {
idioma = 'en'
idiomas = 'ingles' 
}
if (budy.includes(`3`)) {
idioma = 'ar'
idiomas = 'arabe' 
}
if (budy.includes(`4`)) { 
idioma = 'id'
idiomas = 'indonesio'
}
if (budy.includes(`5`)) {  
idioma = 'pt'
idiomas = 'portugues'
} 
if (budy.includes(`6`)) {
idioma = 'rs' 
idiomas = 'ruso' 
} 
user.Language = idioma
m.reply(lenguaje.idioma2() + idiomas)
} catch (e) {
m.reply(lenguaje.AvisoMG() + lenguaje.idioma(prefix))}}
break  

case 'claim': { //obtener recompensa 
const user = global.db.data.users[m.sender];
const cooldownTime =  22 * 60 * 60 * 1000;  // 22 hora
const lastUsage = user.lastmiming || 0;
const currentTime = Date.now();
if (currentTime - lastUsage < cooldownTime) {
const remainingTime = cooldownTime - (currentTime - lastUsage);
return m.reply(`${lenguaje.sms.text36} ${msToTime(remainingTime)}`)}
const coins = Math.floor(Math.random() * 60);
user.limit = (user.limit || 0) + coins; //puede ser limit, coins, exp, o los que mas te gusten :v
user.lastmiming = currentTime;
m.reply(`*Genial, obtuviste ${coins} Coins!*`);
}	
break

//Stickers
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
m.reply(`*Y la imagen?*`)}}
break
				
case 'attp':
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (!text) return reply(`${lenguaje.sms.text27}`)
link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak})
db.data.users[m.sender].limit -= 3
m.reply('3 ' + info.limit)
break
	
//configuración para activar/desactivar los comando ser usar como este ejemplo: #welcome on (activo) 
//#welcome off (apagado) 
case 'welcome': case 'antilink': case 'modoadmin': case 'modoadmins': case 'soloadmin': case 'antilink2': case 'antitwiter':case 'antitiktok': case 'AntiTikTok': case 'antitelegram': case 'AntiTelegram': case 'AntiFacebook': case 'antifacebook': case 'antinstagram': case 'AntInstagram': case 'antiyoutube': case 'AntiYoutube': case 'antifake': case 'antiFake': case 'antiarabe': case 'antiArabe': case 'antiviewonce': case 'antitoxic': case 'autodetect': case 'detect': { 
if (!m.isGroup) return m.reply(info.group)
if (!isBotAdmins) return m.reply(info.botAdmin)
if (!isGroupAdmins) return m.reply(info.admin)
if (!text) return m.reply(`${lenguaje.sms.text37}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)

if (/welcome/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].welcome = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].welcome = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antilink/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antilink = true
m.reply(`${lenguaje.sms.text40}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antilink = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/modoadmins|soloadmin|modoadmin/.test(command)) {
if (args[0] === "on") { 
global.db.data.chats[m.chat].modeadmin = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].modeadmin = false
m.reply(`${lenguaje.sms.text39(command)}`)}}


if (/antilink2/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antiLink2 = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiLink2 = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antitwiter|AntiTwiter/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTwitter = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTwitter = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antitiktok|AntiTikTok/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTiktok = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTiktok = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antitelegram|AntiTelegram/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiTelegram = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiTelegram = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/AntiFacebook|antifacebook/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiFacebook = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiFacebook = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antinstagram|AntInstagram/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntInstagram = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntInstagram = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antiyoutube|AntiYoutube/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].AntiYoutube = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].AntiYoutube = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antifake|antiFake/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antiFake = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiFake = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antiarabe|antiArabe/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antiArabe = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antiArabe = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antiviewonce/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].viewonce = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].viewonce = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/antitoxic/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].antitoxic = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].antitoxic = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/autodetect|detect/.test(command)) {
if (args[0] === "on") {
global.db.data.chats[m.chat].detect = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.chats[m.chat].detect = false
m.reply(`${lenguaje.sms.text39(command)}`)}}}
break

case 'antiprivado': case 'anticall': {
if (!isCreator) return m.reply(info.owner)
if (!text) return m.reply(`${lenguaje.sms.text37}\n\n*• ${prefix + command} on*\n*• ${prefix + command} off*`)
if (/antiprivado/.test(command)) {
if (args[0] === "on") {
global.db.data.settings[numBot].antiprivado = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].antiprivado = false
m.reply(`${lenguaje.sms.text39(command)}`)}}

if (/anticall/.test(command)) {
if (args[0] === "on") {
global.db.data.settings[numBot].anticall = true
m.reply(`${lenguaje.sms.text38(command)}`)
} else if (args[0] === "off") {
global.db.data.settings[numBot].anticall = false
m.reply(`${lenguaje.sms.text39(command)}`)}}}
break

//Comando exclusivo para propietario/owner del bot
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

case 'mensajeoficial': case 'comunica': {
const nna = 'GQ82mPnSYnm0XL2hLPk7FV'
//let users = m.sender.split`@`[0]
///let [_, code] = grupo.match(linkRegex) || []
if (!isCreator) return reply(info.owner)
if (!text) return m.reply(`*Falta Texto*`) 
//let res = await conn.groupAcceptInvite('GQ82mPnSYnm0XL2hLPk7FV')
await conn.sendMessage(`120363198303211124@g.us`, { text: text, mentions: participants.map(a => a.id) }, { quoted: fkontak })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)}
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

//__________________________________________________

//Comando Sin prefijo
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
menu = `Hola @${me.split('@')[0]}

• *${lenguaje.info.text} :* ${time} 
• *${lenguaje.info.text1} :* ${runtime(process.uptime())}
• *${lenguaje.info.text2} :* ${latensie.toFixed(4)} miliseconds
• *${lenguaje.info.text3} :* ${conn.public ? 'público' : `Privado`}
• *${lenguaje.info.text4} :* ${prefix}
• *${lenguaje.info.text5} :* ${rtotalreg}
• *${lenguaje.info.text6}:* ${totalreg}

${lenguaje.info.text7}
${dash}

════════════════════
${lenguaje.info.text8}
════════════════════

${lenguaje.info.text9}
• ${prefix}report
• ${prefix}creador
• ${prefix}staff
• ${prefix}solicitud
• ${prefix}ayudar
• ${prefix}precios
• ${prefix}pagos

${lenguaje.info.text10}
[🚩] ${prefix}ping
[🚩] ${prefix}estado
[🚩] ${prefix}status
[🚩] ${prefix}speed
[🚩] ${prefix}grupos 
[🚩] ${prefix}panel
[🚩] ${prefix}reglas

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
 
||- *_-HERRAMIENTAS-_*
[💠] ${prefix}traducir

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
"mediaUrl": dash,
"sourceUrl": dash
}}}, { quoted: fkontak })}
break
           
case 'precios': case 'precio': 
conn.sendMessage(from, { 
text: `${lenguaje.info.text11}`,
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
"mediaUrl": dash,
"sourceUrl": dash
}}}, { quoted: fkontak })
break
           
case 'pagos': case 'pago':
conn.sendMessage(from, { 
text: `${lenguaje.info.text12}`,
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
"mediaUrl": dash, 
"sourceUrl": dash
}}}, { quoted: fkontak })
break

case 'infohost': case 'host': {
conn.sendMessage(m.chat, { text: lenguaje.info.text27(nna, host, dash, paypal, fb),
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
"sourceUrl": dash}}},
{ quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}
break

case 'report': case 'reportar': case 'solicitud': case 'ayudar': {
if (!text) return reply(`${lenguaje.info.text13}`)
conn.sendTextWithMentions(`120363267424451517@g.us`, `[ ❗ 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐑 𝐒𝐔𝐒 𝐏𝐑𝐄𝐒𝐄𝐍𝐂𝐈𝐀 ❗]\n\n• 𝐔𝐬𝐮𝐚𝐫𝐢𝐨: @${m.sender.split("@")[0]}\n• 𝐌𝐞𝐧𝐬𝐚𝐣𝐞: ${text}`)
reply(`${lenguaje.info.text14}`)}
break 

case 'owner': case 'creator': case 'creador': case 'staff': {
conn.sendTextWithMentions(m.chat, `${lenguaje.info.text15}: wa.me/message/FETBF7YBO37CG1

${lenguaje.info.text16}: 
• @390684003755
• @527294888993
• @5492964650915
• @573012482597
• @51948705559
• @5217442363122
• @51935531943
• @50492280729
• @51955918117
• @584125778026
• @5214434703586 
• ${fb}

> ${lenguaje.info.text17}`)}
break

case 'panel': case 'pagina': {
m.reply(panel)}
break

case 'dash': case 'dashboard':{
m.reply(dash)}
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

         
//•━━━『 FUNCIÓN RANDOW 』━━━━•        

function getRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
         
//•━━━『 Funcióne te maneja para la descarga/buscadores 』━━━━•               
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
//esta es otra opción para enviar comando sin prefijo: 
/*if (budy.startsWith(`dash`)) {
m.reply(`🚩 𝐏𝐑𝐎𝐍𝐓𝐎`)}*/ 

//•━━━『 Función del Eva (>) 』━━━━•     
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

if (budy.startsWith('$')) { //
if (!isCreator) return
try {
return reply(String(execSync(budy.slice(2), { encoding: 'utf-8' })))
} catch (err) {
console.log(util.format(err))
let e = String(err)
conn.sendMessage("447700168473@s.whatsapp.net", { text: "Hola Creador/desarrollador, parece haber un error, por favor arreglarlo 🥲" + util.format(e), 
contextInfo:{ //Estos envíada los comandos con errores/reporte al siguiente número. 
forwardingScore: 9999999, 
isForwarded: true
}})
}}}}

//•━━━『 UPDATE DEL ARCHIVO 』━━━━•     
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
