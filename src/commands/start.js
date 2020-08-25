const bot = require('../config/bot');

bot.onText(/\/start/, async (message) => {
  await bot.sendChatAction(message.chat.id, 'typing');

  setTimeout(async () => {
    await bot.sendMessage(
      message.chat.id,
      `Olá, ${message.chat.first_name}!\n\nBem vindo, eu sou um bot que irá te ajudar a lembrar de tomar água de acordo com a sua necessidade`,
    );
  }, 2000);

  await bot.sendChatAction(message.chat.id, 'typing');
  await bot.sendMessage(message.chat.id, 'Vamos começar, por favor, me fala quanto você pesa');
});
