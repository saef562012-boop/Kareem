const bedrock = require('bedrock-protocol');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Geyser Bot is Running!'));
app.listen(process.env.PORT || 3000);

function createBot() {
    console.log("🔄 جاري محاولة الدخول عبر Geyser...");
    
    const client = bedrock.createClient({
        host: "العنوان.aternos.me", // ضع عنوان أثيرنوس هنا
        port: 19132,                // بورت البيدروك في Geyser (غالباً يكون هذا الرقم)
        username: "Dura_AFK",
        offline: true,
        skipPing: true             // لتجاوز أي تعليق في فحص الإصدار
    });

    client.on('spawn', () => {
        console.log("✅ نجح الأمر! البوت دخل السيرفر عبر Geyser.");
    });

    client.on('error', (err) => {
        console.log("⚠️ تنبيه: " + err.message);
    });

    client.on('close', () => {
        console.log("🔄 انقطع الاتصال، سأحاول العودة بعد قليل...");
        setTimeout(createBot, 10000);
    });
}

createBot();
