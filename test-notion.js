const { Client } = require("@notionhq/client");
const fs = require("fs");
const path = require("path");

function loadEnv() {
    try {
        const envPath = path.join(__dirname, ".env.local");
        const content = fs.readFileSync(envPath, "utf8");
        content.split("\n").forEach(line => {
            const parts = line.split("=");
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const val = parts.slice(1).join("=").trim();
                console.log("Found key:", key);
                if (key && !process.env[key]) {
                    process.env[key] = val;
                }
            }
        });
    } catch (e) {
        console.log("Could not load .env.local");
    }
}

loadEnv();

async function testConnection() {
    console.log("Testing Notion Connection...");
    console.log("Secret present:", !!process.env.NOTION_SECRET);
    console.log("Database ID present:", !!process.env.NOTION_DATABASE_ID);

    if (!process.env.NOTION_SECRET || !process.env.NOTION_DATABASE_ID) {
        console.error("MISSING CREDENTIALS. Aborting.");
        return;
    }

    const notion = new Client({
        auth: process.env.NOTION_SECRET,
    });
    console.log("Notion client keys:", Object.keys(notion));
    if (notion.databases) console.log("notion.databases keys:", Object.keys(notion.databases));

    try {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            page_size: 1,
        });
        console.log("SUCCESS! Connection established.");
        console.log(`Found ${response.results.length} items.`);
    } catch (error) {
        console.error("FAILURE. Error details:");
        console.error(error.message);
        if (error.code) console.error("Code:", error.code);
    }
}

testConnection();
