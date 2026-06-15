/*
   ✦ ✦ ✦   S M D - M I N I   ✦ ✦ ✦

─────────────────────────────────────────────────────────────
📛 Project   : ZENIT-X BOT
👤 Creator   : ZENIT
🌐 GitHub    : https://github.com/iTx-Sarkar
📱 Contact   : t.me/Babesanya4
📢 Channel   : https://whatsapp.com/channel/0029Vb8GLHTEgGfI2C0m2Q3N
🗓 Release   : 12 • Aprail • 2026 | 12:00 PM
─────────────────────────────────────────────────────────────
 
//   ⭐ PROUDLY MADE IN INDIA ⭐
*/

// Bnao Dost Aur Dushman Ko Dhnwan Tb Hoja Asli Ke Pehchan
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cdn = "https://bandaheali-cdn.koyeb.app";

const LOCAL_FILE = path.join(__dirname, "cdn-smd-mini.js");

(async () => {
  try {
    const url = `https://bandaheali-cdn.koyeb.app/bandaheali/smd-mini.js`;
    
    const { data } = await axios.get(url, {
      timeout: 15000
    });

    if (!data) throw new Error("Empty script received");
    fs.writeFileSync(LOCAL_FILE, data);
    if (require.cache[require.resolve(LOCAL_FILE)]) {
      delete require.cache[require.resolve(LOCAL_FILE)];
    }

    require(LOCAL_FILE);

  } catch (err) {
    console.error("❌ CDN Loader Error:", err.message);
    if (fs.existsSync(LOCAL_FILE)) {
      
      require(LOCAL_FILE);
    }
  }
})();
