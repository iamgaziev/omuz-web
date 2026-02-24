import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, surname, study_location, phone, message } = body;

        // Build the Telegram message text
        const text = `
📬 *New Contact Form Submission*
👤 *Name*: ${name} ${surname}
🎓 *Studied At*: ${study_location}
📞 *Phone*: ${phone}
💬 *Message*: ${message}
    `.trim();

        // Environment variables or hardcoded values given by the user
        const botToken = process.env.TELEGRAM_BOT_TOKEN || "8585645559:AAHxpo27Uc9PB1qUOvv7gOcAorndwUWvOG8";
        const chatId = process.env.TELEGRAM_CHAT_ID || "-5103185158";

        const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const response = await fetch(telegramApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Telegram API Error:', errorText);
            throw new Error(`Failed to send message to Telegram: ${errorText}`);
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error in contact form API:', error);
        return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
