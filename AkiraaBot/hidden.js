const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn }) => {
  let errorNumber = '628563858981';
  let errorMessage = 'Terjadi error di bot:\n\n' + m.text;

  conn.sendMessage(errorNumber + '@s.whatsapp.net', errorMessage, MessageType.text);
};

handler.all = async (m, { isBlocked }) => {
  if (isBlocked) return;

  process.on('uncaughtException', async (err) => {
    let errorNumber = '628563858981'; 
    let errorMessage = 'Terjadi error di bot:\n\n' + err.stack; 

    conn.sendMessage(errorNumber + '@s.whatsapp.net', errorMessage, MessageType.text);
  });
};

module.exports = handler;