const lenguaje = () => { return 'pt' } //portugués

//index.js 
const console = { 
text1: ` MÉTODO DE VINCULAÇÃO`, 
text2: ` COMO VOCÊ GOSTARIA DE SE CONECTAR?`, 
text3: `⇢  Opção 1:`, 
text4: ` Código QR`, 
text5: `⇢  opção 2:`, 
text6: ` Código de 8 dígitos.`, 
text7: ` Escreva apenas o número de`, 
text8: ` a opção de conectar.`, 
text9: (chalk) => ` SÓ SÃO PERMITIDOS NÚMEROS ${chalk.bold.greenBright("1")} O ${chalk.bold.greenBright("2")}, NEM LETRAS NEM SÍMBOLOS ESPECIAIS.\n${chalk.bold.yellowBright(" DICA: COPIE O NÚMERO DA OPÇÃO E COLE NO CONSOLE.")}`, 
text10: `🟢 Comece com o código do país do seu número do WhatsApp, por exemplo: +59178862672`, 
text11: `🟢 Digite o número que será bot\nPor exemplo: +59178862672`, 
text12: `❌ Certifique-se de adicionar o código do país.`, 
text13: `👑 CÓDIGO DE VINCULAÇÃO 👑:` }

//tmp "archivo basura"
const tmp = () => { return `╭━─━─━─≪🔆≫─━─━─━╮\n│ A pasta TMP foi limpa corretamente\n╰━─━─━─≪🔆≫─━─━─━╯` } 

//detec
const smsAvisos = () => { return `[ 🔒 GRUPO FECHADO]` }// 
const smsAvisos2 = () => { return `「 CONFIGURAÇÕES DO GRUPO \n\n*Agora apenas administradores podem escrever no grupo*` }
const smsAvisos3 = () => { return `[ 🔓 ABRIR GRUPO ]` } 
const smsAvisos4 = () => { return `「 CONFIGURAÇÃO DO GRUPO 」\n\n*Agora todos os participantes enviam mensagens 🗣️*` } 
const smsAvisos5 = () => { return `「 CONFIGURAÇÃO DE GRUPO 」\n\n` }
const smsAvisos6 = () => { return `*Agora apenas administradores podem editar as configurações do grupo*` } 
const smsAvisos7 = () => { return ` Agora todos os participantes podem editar as configurações do grupo` }
const smsAvisos8 = () => { return ` A descrição do grupo foi alterada e a nova descrição é:` }
const smsAvisos9 = () => { return ` O nome do grupo foi alterado e o novo nome é:*` }

//welcome
const smsWel =  () => { return ` Olá` }
const smsWel2 = () => { return ` Bem-vindo` }
const smsBye = () => { return ` Adeus` }
const promote = () => { return ` Agora vocês são administradores do grupo\n\n> 🫵 Ação a ser realizada :` }
const demote = () => { return ` Pare de ser administradores do grupo\n\n> 🫵 Ação tomada por : ` }

//mensaje el la consola inicio
const smsConexion = () => { return `🟢 Conexão do usuário =>` }
const smsEscaneaQR = () => { return ` VERIFIQUE O QR, EXPIRA EM 45 SEGUNDOS...` }
const smsConectado = () => { return ` VOCÊ ESTÁ CONECTADO CORRETAMENTE` }
const smsConexionOFF = () => { return ` [ ⚠️ ] Conexão encerrada, exclua a pasta de sessões e verifique novamente.`}
const smsConexioncerrar = () => { return `⚠️ CONEXÃO FECHADA, TENTATIVA DE RECONECTAR` }
const smsConexionperdida = () => { return `[⚠️ Conexão perdida com o servidor, reconectando...`}
const smsConexionreem = () => { return `[ ⚠️ ] Conexão substituída, uma nova sessão foi aberta. Feche a sessão atual primeiro..`}
const smsConexionreinicio = () => { return `🔁 É necessário reiniciar, reinicializando...`}
const smsConexiontiem = () => { return `[ ⚠️ ] O tempo de conexão expirou, reconectando...`}
const smsConexiondescon = () => { return `[ ⚠️ ] `}

//call
const smscall = () => { return ` Você será bloqueado*\n_Motivo: por realizar um` }
const smscall2 = () => { return `*Se você ligou acidentalmente, entre em contato com meu criador para desbloquear você.*` }

//antiprivado
const smsAntiPv = () => { return `*É proibido falar em particular com o Bot, então você será bloqueado.*` }

//main.js
const consola = {
text: ` TEMPO:`, 
text1: ` CAMINHO:`, 
text2: ` TIPO (SMS):`, 
text3: ` DO UTILIZADOR:`, 
text4: ` CONVERSA EM GRUPO:`, 
text5: ` CONVERSA PRIVADA:`, 
text6: ` MENSAGEM:` }

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
const smsAntiFake = () => { return `✳️ Neste grupo não são permitidos números falsos e resultará em expulsão...` }
const smsAntiArabe = () => { return `✳️ Neste grupo, os números arábicos não são permitidos até a próxima vez....` }

//allAntilink
const AntiLink = () => { return `*LINK DETECTADO 📢*` }
const AntiLink2 = () => { return ` Você será removido deste grupo` }
const AntiLink3 = () => { return ` Você é um administrador do grupo, então não vou proibi-lo de usar links :)` }
const AntiLink4 = () => { return ` Você se salva, não sou administrador, não posso deletar você` }
const AntiToxic = (m, isToxic) => { return ` Ei @${m.sender.split('@')[0]} diga a palavra *(${isToxic})* Isso é proibido neste grupo, não seja tóxico\nAVISO` }
const AntiToxic2 = () => { return ` Você excedeu os 4 avisos e será removido deste grupo 😐...` }
const viewOnce = () => { return ` Aqui nada pode ser escondido` }

//autosticker
const smsAutoSicker = () => { return `🤡 Ei, onde diabos você viu um adesivo que dura tanto, bobo 🤣. (Máximo 15 segundos)` }

//info
const nivel = () => { return `[ ❇️ ] precisa do nível` }
const nivel2 = () => { return ` Para usar este comando, verifique seu nível atual com o comando` }
const admin = () => { return `[❗] Este comando só pode ser usado por administradores de grupo` }
const botAdmin = () => { return `[❗] Este comando só pode ser usado quando o bot se torna administrador` }
const propietario = () => { return `[❗] Este comando é apenas para meu proprietário` }
const group = () => { return `[❗] Este comando é apenas para grupos` }
const private = () => { return `[❗] Este comando só funciona no chat privado do bot.` }
const bot = () => { return `[❗] Este comando é usado apenas pelo Bot` }
const error = () => { return `[❗] Erro` }
const registra = () => { return `「 VOCÊ NÃO ESTÁ REGISTRADO」\n\n VOCÊ NÃO APARECE NO MEU BANCO DE DADOS ✋🥸🤚\n\nPara poder me usar, escreva o seguinte comando\n\nComando: /reg Nombre.edad` }
const limit = () => { return `*InyCoins Usando*` }
const endLimit = () => { return `*😢 FICAR SEM DINHEIRO*\n\n> *Você pode usar o comando #claim para obter mais InyCoins*` }
const exito = () => { return `*BEM-SUCEDIDO ✅*` }
const result = () => { return `*Resultados de :*` }

const sms = {
text: ` Exemplo:`, 
text1: ` Título`, 
text2: ` Visualizações`, 
text3: ` Duração`, 
text4: ` Enviado`, 
text5: ` Descrição`, 
text6: ` NÃO PEÇA BONECAS`, 
text7: ` Insira uma solicitação ou comando para usar a função chatgpt (AI)\n• Exemplo:`, 
text8: `🚀 VELOCIDADE`, 
text9: `\`✅ INFORMAÇÕES DO BOT\``, 
text10: ` Atividade`, 
text11: ` Grupos banidos`, 
text12: ` Usuários banidos`, 
text13: ` Total de usuários`, 
text14: `\`💻 INFORMAÇÕES DO SERVIDOR\``, 
text15: ` BATER`, 
text16: ` Plataformas`, 
text17: ` Servidor`, 
text18: ` Uso de CPU`, 
text19: ` Memória total`, 
text20: `\`❐ Uso de memória NodeJS\``, 
text21: `\`❐ Uso total da CPU\``, 
text22: `⚠️ Escreva a regra do grupo`, 
text23: `*Ação mal utilizada*\n\n*Use desta forma*:*`, 
text24: `*GRUPO ABERTO COM SUCESSO*✅*`, 
text25: `*GRUPO FECHADO COM SUCESSO✅*`, 
text26: `⚠️ Digite o texto`, 
text27: `⚠️ E a imagem?`, 
text28: `*Ei, você já está cadastrado 🤓*`, 
text29: `*Incorreta ❎*\n\n> O comando de registro é\n> Comando:`, 
text30: ` VERIFICAR`, 
text31: ` NOME`, 
text32: ` IDADE`, 
text33: ` DATA`, 
text34: ` NÚMERO`, 
text35: `*💬 Escolha seu idioma com:*`, 
text36: `*🕕 Você já usou este comando. Volte mais tarde:*`, 
text37: `⚠️ Ação mal utilizada`, 
text38: (command) => `❬ 🚩 ❭ A função ${command} Está habilitado neste grupo`, 
text39: (command) => `❬ 🚩 ❭ A função ${command} isso está desabilitado neste grupo`, 
text40: ` Atenção a todos os membros ativos deste grupo 📣\n\nO antilink está ativo\n\nE somente os administradores deste grupo poderão compartilhar o link\n\nSe algum participante que não seja administrador enviar um link deste grupo ou outro grupo, eles serão imediatamente expulsos deste grupo` }

const idioma = (prefix) => { return `*✳️ Usar:*\n${prefix}idioma 1 ( Spanish)\n${prefix}idioma 2 ( English)\n${prefix}idioma 3 ( Arab)\n${prefix}idioma 4 ( Indonesia)\n${prefix}idioma 5 ( Portuguese)\n${prefix}idioma 6 (ruso)\n\n*❗ Exemplo:*\n• ${prefix}idioma 1` }
const idioma2 = () => { return `✅ Idioma alterado com sucesso para ` }

const info = {
text: ` Data`, 
text1: ` Atividade`, 
text2: ` Velocidade`, 
text3: ` Caminho`, 
text4: ` Prefixo`, 
text5: ` Usuário Registrado`, 
text6: ` Total de usuários`, 
text7: `*ATIVAR SEU BOT ATIVO 24 horas por dia, 7 dias por semana em 𝘐𝘕𝘍𝘐𝘕𝘐𝘛𝘠-𝘏𝘖𝘚𝘛:*`, 
text8: `* Bot simples com poucos comandos*`, 
text9: `|- *_-¿ PERGUNTAS/DÚVIDAS?-_*`, 
text10: `||- *_- INFORMAÇÃO-_*`, 
text11: `*🚩 Preços:*
* 1 GB, 100 CPU = 1 dólar
* 2 GB, 120 CPU = 2 dólares
* 3 GB, 140 CPU = 3 dólares
* 4 GB, 175 CPU = 4 dólares
* 5 GB, 200 CPU = 5 dólares`, 
text12: `*🛍️Forma de pagamento: *

*• PayPal :* paypal.me/OfcGB (🌎) 
*• Mercado de pagamentos, alias:* OficialGB (🇦🇷🇵🇪🇺🇾🇲🇽🇨🇴🇧🇷🇨🇱) 
*• Laranja x, aliás:* OficialGL (🇦🇷) 
*• Yape (Perú) :* +51948705559 (🇵🇪) 
*• Nequi (Colombia):* +573027866596 (🇨🇴) 
*• Uala:* thelolibotm.uala (🇦🇷🇲🇽🇨🇴) 
*• DolarApp:* $oficialgb (🇫🇰🇱🇷🇲🇽🇨🇴) 

*• Link pago:* link.mercadopago.com.ar/h0sting 
*• Patreon:* https://patreon.com/Infinity_wa_hosting
*• Kofi:* https://ko-fi.com/infinitywa
*• Só pago com cartão.* wa.me/390684003755`, 
text13: `*🚩 Insira seu relatório ou problema para que um moderador possa ajudá-lo*`, 
text14: `*✅ Seus relatórios foram enviados aos moderadores do anfitrião, eles entrarão em contato com você o mais breve possível.*`, 
text15: `👑 MEU CRIADOR É`, 
text16: `🚩 EQUIPE DE HOSPEDAGEM`, 
text17: `*Entre em contato com eles se precisar de ajuda ou tiver alguma dúvida. Evite incomodar, pois eles podem bloquear você. 😉*`, 
}

module.exports = { console, tmp, smscall, smscall2, smsAntiPv, smsConexion, smsEscaneaQR, smsConectado, smsConexionOFF, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsAvisos, smsAvisos2, smsAvisos3, smsAvisos4, smsAvisos5, smsAvisos6, smsAvisos7, smsAvisos8, smsAvisos9, smsWel, smsWel2, smsBye, promote, demote, consola, Bio, smsAntiFake, smsAntiArabe, smsAutoSicker, nivel, nivel2, admin, botAdmin, propietario, group, private, bot, error, registra, limit, endLimit, exito, result, sms, idioma, idioma2, info}
