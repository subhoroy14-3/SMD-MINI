const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {

    // =============================
    // DATABASE
    // =============================
    DATABASE_URL:
        process.env.MONGODB_URI ||
        process.env.DATABASE_URL ||
        "",

    // =============================
    // BOT CORE SETTINGS
    // =============================
    OWNER_NUMBER:
        process.env.OWNER_NUMBER ||
        "918945999655",
    
    PREFIX: process.env.PREFIX || ".",

    // =============================
    // GLOBAL BRANDING
    // =============================
    BOT_NAME:
        process.env.BOT_NAME ||
        "ZENIT-X BOT",

    OWNER_NAME:
        process.env.OWNER_NAME ||
        "ZENIT",

    CAPTION:
        process.env.CAPTION ||
        "POWERED BY ZENIT",

    STATUS_MSG:
        process.env.STATUS_MSG ||
        "Hello From Team-Bandaheali",

    NEWSLETTER_JID:
        process.env.NEWSLETTER_JID ||
        "120363175375282051@newsletter",

    MENU_IMG:
        process.env.MENU_IMG ||
        "https://i.postimg.cc/TwGkCTQd/6d221863-dd6f-4200-9caf-bc8072103ef8.png",

    // =============================
    // SITE URL FOR PAIR CMD
    // =============================
    SITE_URL:
        process.env.SITE_URL ||
        "https://mr-shaban.vercel.app",

    PORT:
        process.env.PORT ||
        "21604"
};
