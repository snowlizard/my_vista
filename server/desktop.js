const fs = require("fs/promises");

const getDesktopApps = async () => {
    const filePath = "../client/public/C:/Users/Snowlizard/Desktop/apps.json";
    let data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
}

module.exports = {
    getDesktopApps
}