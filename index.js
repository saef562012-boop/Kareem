const bedrock = require('bedrock-protocol');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot is Running on 1.21.1'));
app.listen(process.env.PORT || 3000);

function createBot() {
    console.log("🔄 جاري محاولة الدخول بإصدار 1.21.1...");
    
    const client = bedrock.createClient({
        host: "kareem56u.aternos.me", // ضع عنوان سيرفرك هنا
        port: 25710,                // تأكد من البورت في أثيرنوس
        username: "Dura_AFK",
        offline: true,
        version: "1.21.11"           // قمنا بتحديد الإصدار بدقة هنا
    });

    client.on('spawn', () => {
        console.log("✅ أخيراً! البوت دخل سيرفر أثيرنوس بنجاح.");
    });

    client.on('error', (err) => {
        console.log("⚠️ تنبيه: " + err.message);
    });

    client.on('close', () => {
        setTimeout(createBot, 10000);
    });
}

createBot();
