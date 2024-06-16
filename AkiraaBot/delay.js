const delay = 1000;

module.exports = {

  fixDelay: (conn, message) => {

    setTimeout(() => {

      conn.sendMessage(message.chat, message.content, message);

    }, delay);

  }

};

