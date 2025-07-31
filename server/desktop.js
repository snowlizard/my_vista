const fs = require("fs/promises");

const getDesktopApps = async () => {
    let files = [];
    const DESKTOP = "../client/public/C:/Users/Snowlizard/Desktop";
    let temp = await fs.readdir(DESKTOP);
    
    for(const file of temp){
        let filePath = DESKTOP + "/" + file;
        files.push(JSON.parse(await fs.readFile(filePath, "utf-8")))
    }
    return files;
}

module.exports = {
    getDesktopApps
}