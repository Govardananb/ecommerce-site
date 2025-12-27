const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env.local');

try {
    // Read as buffer to inspect
    const buffer = fs.readFileSync(envPath);
    let content = buffer.toString('utf8');

    // Check for BOMs or null bytes (UTF-16)
    if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
        console.log("Detected UTF-16 LE BOM");
        content = buffer.toString('utf16le');
    } else if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
        console.log("Detected UTF-8 BOM");
        content = content.slice(1);
    } else if (content.includes('\u0000')) {
        console.log("Detected null bytes (likely UTF-16)");
        // Try naive conversion if BOM missing but content is wide
        content = buffer.toString('utf16le');
    }

    // Clean up content
    const cleanContent = content.trim();

    // Write back as plain UTF-8
    fs.writeFileSync(envPath, cleanContent, 'utf8');
    console.log("Fixed encoding to UTF-8");
} catch (e) {
    console.error("Error fixing file:", e);
}
