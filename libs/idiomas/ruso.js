const lenguaje = () => { return 'rs' } // ruso  

//index.js 
const console = { 
text1: ` МЕТОД СВЯЗАНИЯ`, 
text2: ` КАК ВЫ ХОТЕЛИ БЫ ПОДКЛЮЧИТЬСЯ?`, 
text3: `⇢  Опция 1:`, 
text4: ` QR код`, 
text5: `⇢  Вариант 2:`, 
text6: ` 8-значный код.`, 
text7: ` Напишите только номер`, 
text8: ` возможность подключения.`, 
text9: (chalk) => `ТОЛЬКО ЧИСЛА РАЗРЕШЕНЫ ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, НИ БУКВ, НИ СПЕЦИАЛЬНЫХ СИМВОЛОВ.\n${chalk.bold.yellowBright(" КОНЧИК: СКОПИРУЙТЕ НОМЕР ВАРИАНТА И ВСТАВЬТЕ ЕГО В КОНСОЛЬ.")}`, 
text10: `🟢 Начните с кода страны вашего номера WhatsApp, например: +59178862672`, 
text11: `🟢 Введите число, которое будет ботом\nНапример: +59178862672`, 
text12: `❌ Убедитесь, что добавить код страны.`, 
text13: `👑 СВЯЗАННЫЙ КОД 👑:` }

//tmp "archivo basura"
const tmp = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│ Папка TMP была очищена правильно\n╰━─━─━─≪🔆≫─━─━─━╯` } 

//detec
const smsAvisos = () => { return `[ 🔒 ЗАКРЫТАЯ ГРУППА ]` }// 
const smsAvisos2 = () => { return `「 Настройки группы \n\n*Теперь только администраторы могут писать в группе*` }
const smsAvisos3 = () => { return `[ 🔓 ОТКРЫТАЯ ГРУППА ]` } 
const smsAvisos4 = () => { return `「 КОНФИГУРАЦИЯ ГРУППЫ」\n\n*Теперь все участники отправляют сообщения 🗣️*` } 
const smsAvisos5 = () => { return `「 КОНФИГУРАЦИЯ ГРУППЫ 」\n\n` }
const smsAvisos6 = () => { return `*Теперь только администраторы могут редактировать настройки группы*` } 
const smsAvisos7 = () => { return ` Теперь все участники могут редактировать настройки группы` }
const smsAvisos8 = () => { return ` Описание группы было изменено, и новое описание -:` }
const smsAvisos9 = () => { return ` Название группы было изменено, и новое название: *` }

//welcome
const smsWel =  () => { return ` Привет` }
const smsWel2 = () => { return ` Добро пожаловать` }
const smsBye = () => { return ` Прощайте` }
const promote = () => { return ` Теперь вы администраторы группы\n\n> Указания к выполнению :` }
const demote = () => { return ` Прекратите быть администраторами группы\n\n> Действие, принятое : ` }

//mensaje el la consola inicio
const smsConexion = () => { return `🟢 Пользователь подключается =>` }
const smsEscaneaQR = () => { return ` СКАНИРУЙТЕ QR, ИСТЕКАЕТ ЧЕРЕЗ 45 СЕКУНД...` }
const smsConectado = () => { return ` ВЫ ПОДКЛЮЧЕНЫ ПРАВИЛЬНО` }
const smsConexionOFF = () => { return ` [ ⚠️ ] Соединение закрыто, пожалуйста, удалите папку сеансов и отсканируйте снова.`}
const smsConexioncerrar = () => { return `⚠️ СОЕДИНЕНИЕ ЗАКРЫТО, ПОПЫТКА ПЕРЕПОДКЛЮЧЕНИЯ` }
const smsConexionperdida = () => { return `[⚠️ Потеряно соединение с сервером, повторное подключение...`}
const smsConexionreem = () => { return `[ ⚠️ ] Соединение заменено, открыта новая сессия. Пожалуйста, сначала закройте текущую сессию...`}
const smsConexionreinicio = () => { return `🔁 Требуется перезапуск, перезагрузка...`}
const smsConexiontiem = () => { return `[ ⚠️ ] Время соединения истекло, происходит повторное подключение...`}
const smsConexiondescon = () => { return `[ ⚠️ ] `}

//call
const smscall = () => { return ` Вы будете заблокированы*\n_Причина: за выполнение` }
const smscall2 = () => { return `*Если вы случайно позвонили, пожалуйста, свяжитесь с моим создателем, чтобы разблокировать вас.*` }

//antiprivado
const smsAntiPv = () => { return `*Запрещено общаться с ботом лично, в противном случае вы будете заблокированы.*` }

//main.js
const consola = {
text: ` ВРЕМЯ:`, 
text1: ` СПОСОБ:`, 
text2: ` ТИП (СМС):`, 
text3: ` ПОЛЬЗОВАТЕЛЬ:`, 
text4: ` ГРУППОВОЙ ЧАТ:`, 
text5: ` ЛИЧНАЯ ПЕРЕПИСКА:`, 
text6: ` СООБЩЕНИЕ:` }

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
const smsAntiFake = () => { return `✳️ В этой группе запрещены фальшивые номера и приведут к исключению..` }
const smsAntiArabe = () => { return `✳️ В этой группе арабские цифры не допускаются до следующего раза....` }

//allAntilink
const AntiLink = () => { return `*ССЫЛКА ОБНАРУЖЕНА 📢*` }
const AntiLink2 = () => { return ` Вы будете удалены из этой группы` }
const AntiLink3 = () => { return ` Вы являетесь администратором группы, поэтому я не запрещу вам использовать ссылки :)` }
const AntiLink4 = () => { return ` Ты спасаешь себя, я не администратор, я не могу удалить тебя` }
const AntiToxic = (m, isToxic) => { return ` Привет @${m.sender.split('@')[0]} скажи слово *(${isToxic})* Это запрещено в этой группе, не будь токсичным\nПРЕДУПРЕЖДЕНИЕ` }
const AntiToxic2 = () => { return ` Вы превысили 4 предупреждения, вас удалят из этой группы 😐...` }
const viewOnce = () => { return ` Здесь ничто не разрешено скрываться` }

//autosticker
const smsAutoSicker = () => { return `🤡 Привет, где ты видел наклейку, которая держится так долго, дурачок 🤣. (Максимум 15 секунд))` }

//info
const nivel = () => { return `[ ❇️ ] нуждается в уровне` }
const nivel2 = () => { return ` Для использования этой команды проверьте свой текущий уровень с помощью команды` }
const admin = () => { return `[❗] Эта команда может использоваться только администраторами группы` }
const botAdmin = () => { return `[❗] Эта команда может быть использована только тогда, когда бот становится администратором` }
const propietario = () => { return `[❗] Эта команда предназначена только для моего владельца` }
const group = () => { return `[❗] Эта команда предназначена только для групп` }
const private = () => { return `[❗] Эта команда работает только в личных сообщениях ботаt.` }
const bot = () => { return `[❗] Эта команда используется только ботом` }
const error = () => { return `[❗] Ошибка` }
const registra = () => { return `「 ВЫ НЕ ЗАРЕГИСТРИРОВАНЫ」\n\n ВЫ НЕ ПОЯВЛЯЕТЕСЬ В МОЕЙ БАЗЕ ДАННЫХ ✋🥸🤚\n\nЧтобы воспользоваться мной, напишите следующую команду\n\nКоманда: /reg Nombre.edad` }
const limit = () => { return `*InyCoins С использованием*` }
const endLimit = () => { return `*😢 ОСТАТЬСЯ БЕЗ ДЕНЕГ*\n\n> *Вы можете использовать команду* #claim чтобы получить больше InyCoins*` }
const exito = () => { return `*УСПЕШНЫЙ ✅*` }
const result = () => { return `*Результаты :*` }

const sms = {
text: ` Пример:`, 
text1: ` Заголовок`, 
text2: ` Взгляды`, 
text3: ` Продолжительность`, 
text4: ` Загружено`, 
text5: ` Описание`, 
text6: ` НЕ ПРОСИТЕ НЕВЕРОЯТНЫЙ`, 
text7: ` Введите запрос или команду для использования функции чатгпт (искусственный интеллект)\n• Пример:`, 
text8: `🚀 СКОРОСТЬ`, 
text9: `\`✅ ИНФОРМАЦИЯ О БОТЕ\``, 
text10: ` Активность`, 
text11: ` Запрещенные группы`, 
text12: ` Забаненные пользователи`, 
text13: ` Всего пользователей`, 
text14: `\`💻 ИНФОРМАЦИЯ О СЕРВЕРЕ\``, 
text15: ` БАРАН`, 
text16: ` Платформы`, 
text17: ` Сервер`, 
text18: ` Использование процессора`, 
text19: ` Общая память`, 
text20: `\`❐ Использование памяти NodeJS\``, 
text21: `\`❐ Общая загрузка процессора\``, 
text22: `⚠️ Напишите правило группы`, 
text23: `*Действие злоупотребляется*\n\n*Используйте это таким образом**:*`, 
text24: `*ГРУППА УСПЕШНО ОТКРЫТА*✅*`, 
text25: `*УСПЕШНО ЗАКРЫТАЯ ГРУППА✅*`, 
text26: `⚠️ Введите текст`, 
text27: `⚠️ А изображение?`, 
text28: `*Привет, ты уже зарегистрирован 🤓*`, 
text29: `*Неправильно ❎*\n\n> Команда регистрации -\n> Команда:`, 
text30: ` ПРОВЕРЯТЬ`, 
text31: ` ИМЯ`, 
text32: ` ВОЗРАСТ`, 
text33: ` ДАТА`, 
text34: ` ЧИСЛО`, 
text35: `*💬 Выберите свой язык с:*`, 
text36: `*🕕 Вы уже использовали эту команду. Вернитесь позже.*`, 
text37: `⚠️ Неправильное действие`, 
text38: (command) => `❬ 🚩 ❭ Функция ${command} Это включено в этой группе`, 
text39: (command) => `❬ 🚩 ❭ Функция ${command} это отключено в этой группе`, 
text40: ` Внимание всем активным участникам этой группы 📣\n\nАнтилинк активен\n\nИ только администраторы этой группы смогут делиться ссылкой\n\nЕсли какой-либо участник, который не является администратором, отправит ссылку из этой группы или другой группы, его немедленно исключат из этой группы` }

const idioma = (prefix) => { return `*✳️ Использовать:*\n${prefix}idioma 1 ( Spanish)\n${prefix}idioma 2 ( English)\n${prefix}idioma 3 ( Arab)\n${prefix}idioma 4 ( Indonesia)\n${prefix}idioma 5 ( Portuguese)\n${prefix}idioma 6 (ruso)\n\n*❗ Пример:*\n• ${prefix}idioma 1` }
const idioma2 = () => { return `✅ Язык успешно изменен на ` }

const info = {
text: ` Дата`, 
text1: ` Активность`, 
text2: ` Скорость`, 
text3: ` Способ`, 
text4: ` Префикс`, 
text5: ` Зарегистрированный пользователь`, 
text6: ` Всего пользователей`, 
text7: `*АКТИВИРУЙТЕ СВОГО 24/7 АКТИВНОГО БОТА НА 𝘐𝘕𝘍𝘐𝘕𝘐𝘛𝘠-𝘏𝘖𝘚𝘛:*`, 
text8: `* Простой бот с несколькими командами*`, 
text9: `|- *_-¿ ВОПРОСЫ / СОМНЕНИЯ?-_*`, 
text10: `||- *_- ИНФОРМАЦИЯ-_*`, 
text11: `*🚩 Цены :*
* 1GB, 100CPU = 1 доллар
* 2GB, 120CPU = 2 доллара
* 3GB, 140CPU = 3 доллара
* 4GB, 175CPU = 4 доллара
* 5GB, 200CPU = 5 долларов`, 
text12: `*Метод оплаты: 🛍️*

*• PayPal :* paypal.me/OfcGB (🌎) 
*• Меркадо паго, псевдоним:* OficialGB (🇦🇷🇵🇪🇺🇾🇲🇽🇨🇴🇧🇷🇨🇱) 
*• Апельсин x, псевдоним:* OficialGL (🇦🇷) 
*• Япе (Перу):*  51948705559 (🇵🇪) 
*• Nequi (Колумбия):*  573027866596 (🇨🇴) 
*• Uala:* thelolibotm.uala (🇦🇷🇲🇽🇨🇴) 
*• DolarApp:* $oficialgb (🇫🇰🇱🇷🇲🇽🇨🇴)

*• Платная ссылка:* link.mercadopago.com.ar/h0sting 
*• Патреон:* https://patreon.com/Infinity_wa_hosting
*• Кофи:* https://ko-fi.com/infinitywa
*• Я плачу только картой.* wa.me/390684003755`, 
text13: `*🚩 Пожалуйста, введите свой отчет или проблему, чтобы модератор мог вам помочь*`, 
text14: `*✅ Ваши отчеты были отправлены модераторам хоста, они свяжутся с вами как можно скорее.*`, 
text15: `👑 МОЙ СОЗДАТЕЛЬ`, 
text16: `🚩 Персонал хостинга`, 
text17: `*Свяжитесь с ними, если вам нужна помощь или есть какие-либо вопросы. Пожалуйста, избегайте беспокоить, так как они могут заблокировать вас. 😉*`, 
}

module.exports = { console, tmp, smscall, smscall2, smsAntiPv, smsConexion, smsEscaneaQR, smsConectado, smsConexionOFF, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsAvisos, smsAvisos2, smsAvisos3, smsAvisos4, smsAvisos5, smsAvisos6, smsAvisos7, smsAvisos8, smsAvisos9, smsWel, smsWel2, smsBye, promote, demote, consola, Bio, smsAntiFake, smsAntiArabe, smsAutoSicker, nivel, nivel2, admin, botAdmin, propietario, group, private, bot, error, registra, limit, endLimit, exito, result, sms, idioma, idioma2, info}
