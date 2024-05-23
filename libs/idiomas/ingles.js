const lenguaje = () => { return 'en' } //inglés

//index.js 
const console = { 
text1: ` LINKING METHOD`, 
text2: ` HOW WOULD YOU LIKE TO CONNECT?`, 
text3: `⇢  Option 1:`, 
text4: ` QR code`, 
text5: `⇢  Option 2:`, 
text6: ` 8 digit code.`, 
text7: ` Write only the number of`, 
text8: ` the option to connect.`, 
text9: (chalk) => ` ONLY NUMBERS ARE ALLOWED ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, NEITHER LETTERS NOR SPECIAL SYMBOLS.\n${chalk.bold.yellowBright(" TIP: COPY THE NUMBER OF THE OPTION AND PASTE IT INTO THE CONSOLE.")}`, 
text10: `🟢 Start with the country code of your WhatsApp number, for example: +59178862672`, 
text11: `🟢 Enter the number that will be bot\nFor example: +59178862672`, 
text12: `❌ Make sure to add the country code.`, 
text13: `👑 LINKING CODE 👑:` }

//tmp "archivo basura"
const tmp = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│ The TMP folder was cleaned correctly\n╰━─━─━─≪🔆≫─━─━─━╯` } 

//detec
const smsAvisos = () => { return `[ 🔒 CLOSED GROUP ]` }// 
const smsAvisos2 = () => { return `「 GROUP SETTINGS \n\n*Now only administrators can write in the group*` }
const smsAvisos3 = () => { return `[ 🔓 OPEN GROUP ]` } 
const smsAvisos4 = () => { return `「 GROUP CONFIGURATION 」\n\n*Now all participants send messages 🗣️*` } 
const smsAvisos5 = () => { return `「 GROUP CONFIGURATION 」\n\n` }
const smsAvisos6 = () => { return `*Now only administrators can edit the group settings*` } 
const smsAvisos7 = () => { return ` Now all participants can edit the group settings` }
const smsAvisos8 = () => { return ` The group description has been changed and the new description is:` }
const smsAvisos9 = () => { return ` The group name has been changed and the new name is:*` }

//welcome
const smsWel =  () => { return `Hello` }
const smsWel2 = () => { return `Welcome` }
const smsBye = () => { return `Adios` }
const promote = () => { return ` Now you are admins of the Group\n\n> 🫵 Action to be carried out :` }
const demote = () => { return ` Stop being admins of the group\n\n> 🫵 Action taken by : ` }

//mensaje el la consola inicio
const smsConexion = () => { return `🟢 User connecting =>` }
const smsEscaneaQR = () => { return ` SCAN THE QR, EXPIRES IN 45 SECONDS...` }
const smsConectado = () => { return ` YOU ARE CONNECTED CORRECTLY` }
const smsConexionOFF = () => { return ` [ ⚠️ ] Connection closed, please delete the sessions folder and scan again.`}
const smsConexioncerrar = () => { return `⚠️ CONNECTION CLOSED, ATTEMPTING TO RECONNECT` }
const smsConexionperdida = () => { return `[⚠️ Lost connection to the server, reconnecting...`}
const smsConexionreem = () => { return `[ ⚠️ ] Connection replaced, a new session has been opened. Please close the current session first..`}
const smsConexionreinicio = () => { return `🔁 Restart required, rebooting...`}
const smsConexiontiem = () => { return `[ ⚠️ ] Connection time expired, reconnecting...`}
const smsConexiondescon = () => { return `[ ⚠️ ] `}

//call
const smscall = () => { return `You will be blocked*\n_Reason: for performing a` }
const smscall2 = () => { return `*If you accidentally called, please contact my creator to unblock you.*` }

//antiprivado
const smsAntiPv = () => { return `*It is forbidden to speak privately to the Bot, so you will be blocked.*` }

//main.js
const consola = {
text: ` TIME:`, 
text1: ` WAY:`, 
text2: ` TYPE (SMS):`, 
text3: ` USER:`, 
text4: ` GROUP CHAT:`, 
text5: ` PRIVATE CHAT:`, 
text6: ` MESSAGE:` }

//autobio
const Bio = { 
text: `🦁 ɴᴏᴠᴀʙᴏᴛ - ᴛᴇɴɢᴏ:`, 
text2: `ᴜsᴜᴀʀɪᴏs ᴜsᴀᴅᴏʀᴍᴇ ᴘᴜᴇᴅᴏ ʀᴇsᴘᴏɴᴅᴇ ʟᴇɴᴛᴀ ᴍɪ ᴠᴇʟᴏᴄɪᴅᴀᴅ ᴅᴇ ʀᴇsᴘᴜᴇsᴛᴀ ᴇs:`,
text3: `👑 ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ | ᴀᴄᴛɪᴠᴏ ✅️:`, 
text4: `ᴘᴀʀᴀ ᴠᴇᴢ ᴍɪ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏ ᴜsᴀʀ #menu`, 
text5: `ɴᴏᴠᴀʙᴏᴛ ᴘᴏʀ ʟᴏʟɪʙᴏᴛ - sᴜʙsᴄʀɪʙɪʀᴛᴇ ᴇʟ ɴᴜᴇsᴛʀᴏ ᴄᴀɴᴀʟ ᴅᴇʟ ʏᴏᴜᴛᴜʙᴇ 🔔\nhttps://www.youtube.com/@elrebelde.21`, 
text6: `✅ Actividad:`, 
text7: `👥 Usuarios:` }

//antiarabe
const smsAntiFake = () => { return `✳️ In this group, fake numbers are not allowed and will result in expulsion...` }
const smsAntiArabe = () => { return `✳️ In this group, Arabic numbers are not allowed until next time....` }

//allAntilink
const AntiLink = () => { return `*LINK DETECTED 📢*` }
const AntiLink2 = () => { return `You will be removed from this group` }
const AntiLink3 = () => { return `You are an admin of the group, so I won't forbid you from using links :)` }
const AntiLink4 = () => { return `You save yourself, I'm not an admin, I can't delete you` }
const AntiToxic = (m, isToxic) => { return `Hey @${m.sender.split('@')[0]} say the word *(${isToxic})* This is prohibited in this group, Don't be toxic

WARNING` }
const AntiToxic2 = () => { return ` You have exceeded the 4 warnings you will be removed from this group 😐...` }
const viewOnce = () => { return ` Here nothing is allowed to be hidden` }

//autosticker
const smsAutoSicker = () => { return `🤡 Hey, where the hell did you see a sticker that lasts so long, silly 🤣. (Maximum 15 seconds)` }

//info
const nivel = () => { return `[ ❇️ ] needs the level` }
const nivel2 = () => { return `To use this command, check your current level with the command` }
const admin = () => { return `[❗] This command can only be used by group administrators` }
const botAdmin = () => { return `[❗] This command can only be used when the bot becomes an administrator` }
const propietario = () => { return `[❗] This command is only for my owner` }
const group = () => { return `[❗] This command is only for groups` }
const private = () => { return `[❗] This command only works in the bot s private chat.` }
const bot = () => { return `[❗] This command is only used by the Bot` }
const error = () => { return `[❗] Error` }
const registra = () => { return `「 YOU ARE NOT REGISTERED」\n\n YOU DO NOT APPEAR IN MY DATABASE ✋🥸🤚\n\nTo be able to use me, write the following command\n\nCommand: /reg Nombre.edad` }
const limit = () => { return `*InyCoins Using*` }
const endLimit = () => { return `*😢 TO STAY WITHOUT MONEY*\n\n> *You can use the command #claim to get more InyCoins*` }
const exito = () => { return `*SUCCESSFUL ✅*` }
const result = () => { return `*Results of :*` }

const sms = {
text: `Example:`, 
text1: `Title`, 
text2: `Views`, 
text3: `Duration`, 
text4: `Uploaded`, 
text5: `Description`, 
text6: `DON T ASK FOR NONSENSE`, 
text7: `Enter a request or command to use the chatgpt (AI) function\n• Example:`, 
text8: `🚀 SPEED`, 
text9: `\`✅ BOT INFORMATION\``, 
text10: `Activity`, 
text11: `Banned groups`, 
text12: `Banned users`, 
text13: `Total users`, 
text14: `\`💻 SERVER INFO\``, 
text15: `RAM`, 
text16: `Platforms`, 
text17: `Server`, 
text18: `CPU Using`, 
text19: `Total memory`, 
text20: `\`❐ NodeJS memory usage\``, 
text21: `\`❐ Total CPU usage\``, 
text22: `⚠️ Write the rule of the Group`, 
text23: `*Action misused*\n\n*Use it this way*:*`, 
text24: `*SUCCESSFULLY OPENED GROUP*✅*`, 
text25: `*SUCCESSFULLY CLOSED GROUP✅*`, 
text26: `⚠️ Enter the text`, 
text27: `⚠️ And the image?`, 
text28: `*Hey, you are already registered 🤓*`, 
text29: `*Incorrect ❎*\n\n> The registration command is\n> Command:`, 
text30: `CHECK`, 
text31: `NAME`, 
text32: `AGE`, 
text33: `DATE`, 
text34: `NUMBER`, 
text35: `*💬 Choose your language with:*`, 
text36: `*🕕 You have already used this command. Come back later:*`, 
text37: `⚠️ Misused action`, 
text38: (command) => `❬ 🚩 ❭ The function ${command} It is enabled in this group`, 
text39: (command) => `❬ 🚩 ❭ The function ${command} this is disabled in this group`, 
text40: ` Attention to all active members of this group 📣\n\nThe antilink is active\n\nAnd only the admins of this group will be able to share the link\n\nIf any participant who is not an admin sends a link from this group or another group, they will be immediately expelled from this group` }

const idioma = (prefix) => { return `*✳️ To use:*\n${prefix}idioma 1 ( Spanish)\n${prefix}idioma 2 ( English)\n${prefix}idioma 3 ( Arab)\n${prefix}idioma 4 ( Indonesia)\n${prefix}idioma 5 ( Portuguese)\n${prefix}idioma 6 (ruso)\n\n*❗ Example:*\n• ${prefix}idioma 1` }
const idioma2 = () => { return `✅ Language successfully changed to ` }

const info = {
text: `Date`, 
text1: `Activity`, 
text2: `Speed`, 
text3: `Way`, 
text4: `Prefix`, 
text5: `Registered user`, 
text6: `Total users`, 
text7: `*ACTIVATE YOUR 24/7 ACTIVE BOT ON 𝘐𝘕𝘍𝘐𝘕𝘐𝘛𝘠-𝘏𝘖𝘚𝘛:*`, 
text8: `* Simple bot with few commands*`, 
text9: `|- *_-¿QUESTION / DOUBTS?-_*`, 
text10: `||- *_- INFORMATION-_*`, 
text11: `*🚩 Prices :*
* 1GB, 100CPU = 1 dollar
* 2GB, 120CPU = 2 dollars
* 3GB, 140CPU = 3 dollars
* 4GB, 175CPU = 4 dollars
* 5GB, 200CPU = 5 dollars`, 
text12: `*🛍️Payment method: *

*• PayPal :* paypal.me/OfcGB (🌎) 
*• Mercado pago, alias:* OficialGB (🇦🇷🇵🇪🇺🇾🇲🇽🇨🇴🇧🇷🇨🇱) 
*• Naranja x, alías:* OficialGL (🇦🇷) 
*• Yape (Perú) :* +51948705559 (🇵🇪) 
*• Nequi (Colombia):* +573027866596 (🇨🇴) 
*• Uala:* thelolibotm.uala (🇦🇷🇲🇽🇨🇴) 
*• DolarApp:* $oficialgb (🇫🇰🇱🇷🇲🇽🇨🇴) 

*• Paid link:* link.mercadopago.com.ar/h0sting 
*• Patreon:* https://patreon.com/Infinity_wa_hosting
*• Kofi:* https://ko-fi.com/infinitywa
*• I only pay with card.* wa.me/390684003755`, 
text13: `*🚩 Please enter your report or issue so that a moderator can help you*`, 
text14: `*✅ Your reports have been sent to the host's moderators, they will contact you as soon as possible.*`, 
text15: `👑 MY CREATOR IS`, 
text16: `🚩 STAFF DEL HOSTING`, 
text17: `*Contact them if you need help or have any questions. Please avoid disturbing, as they may block you. 😉*`, 
}

module.exports = { console, tmp, smscall, smscall2, smsAntiPv, smsConexion, smsEscaneaQR, smsConectado, smsConexionOFF, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsAvisos, smsAvisos2, smsAvisos3, smsAvisos4, smsAvisos5, smsAvisos6, smsAvisos7, smsAvisos8, smsAvisos9, smsWel, smsWel2, smsBye, promote, demote, consola, Bio, smsAntiFake, smsAntiArabe, smsAutoSicker, nivel, nivel2, admin, botAdmin, propietario, group, private, bot, error, registra, limit, endLimit, exito, result, sms, idioma, idioma2, info}
