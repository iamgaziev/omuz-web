const botToken = "8585645559:AAHxpo27Uc9PB1qUOvv7gOcAorndwUWvOG8";
const chatId = "-5103185158";
const text = `📬 *New Contact Form Submission*
👤 *Name*: John Doe
🎓 *Studied At*: University
📞 *Phone*: +992000000000
💬 *Message*: Hello world`;

fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' })
}).then(r => r.json()).then(console.log).catch(console.error);
