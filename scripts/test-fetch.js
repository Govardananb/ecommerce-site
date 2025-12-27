const fs = require("fs");
const path = require("path");

async function main() {
    console.log("Starting Raw Fetch Diagnostic...");

    // 1. Load Env
    const envPath = path.resolve(__dirname, "../.env.local");
    const envContent = fs.readFileSync(envPath, "utf-8");
    const secretMatch = envContent.match(/NOTION_SECRET=(.+)/);
    const dbMatch = envContent.match(/NOTION_DATABASE_ID=(.+)/);

    const secret = secretMatch[1].trim();
    const rawDbId = dbMatch[1].trim();

    // Format ID
    const dbId = rawDbId.length === 32 ?
        `${rawDbId.slice(0, 8)}-${rawDbId.slice(8, 12)}-${rawDbId.slice(12, 16)}-${rawDbId.slice(16, 20)}-${rawDbId.slice(20)}` :
        rawDbId;

    const url = `https://api.notion.com/v1/databases/${dbId}/query`;
    console.log("Fetching:", url);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${secret}`,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filter: {
                    property: "Status",
                    select: { equals: "Live" }
                }
            })
        });

        console.log("Response Status:", response.status);
        const text = await response.text();
        console.log("Response Text:", text.slice(0, 500)); // First 500 chars

    } catch (e) {
        console.error("Fetch Failed:", e.message);
    }
}

main();
