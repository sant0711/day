import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://tinyurl.com/2c5hk765`)).buffer()
let img = catalogo
 global.fake = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363328554424977@newsletter",
      serverMessageId: 100,
      newsletterName: '✨Twins bots✨💚❤️🩵',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: 'https://i.ibb.co/TPC7NMQ/file.jpg',
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363328554424977@newsletter",
serverMessageId: 100,
newsletterName: '✨Twins bots✨💚❤️🩵',
},
externalAdReply: { 
showAdAttribution: true,
title: '𝐁𝐨𝐭 𝐕𝐞𝐧𝐭𝐚𝐬𝐏𝐞𝐫𝐳𝐳𝐳',
body: 'Sofi La Mejor',
previewType: "PHOTO",
thumbnailUrl: 'https://i.ibb.co/TPC7NMQ/file.jpg',
sourceUrl: 'https://www.instagram.com/josssi_bot.ff',
mediaType: 1,
renderLargerThumbnail: false
},},}
	
}
