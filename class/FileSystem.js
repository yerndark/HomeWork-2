const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class FileSystem extends EventEmitter {
  constructor() {
    super();
    this.currentPath = path.resolve(__dirname); // Получаем текущий путь до директории, где находится текущий файл
  }

  mkdir(folderName) {
    const newPath = path.join(this.currentPath, folderName);
    fs.mkdirSync(newPath);
    console.log(`Created folder '${folderName}' at '${newPath}'`);
  }

  touch(fileName, content) {
    const newPath = path.join(this.currentPath, fileName);
    fs.writeFileSync(newPath, content);
    console.log(`Created file '${fileName}' at '${newPath}' with content: ${content}`);
  }

  read(fileName) {
    const newPath = path.join(this.currentPath, fileName);
    const content = fs.readFileSync(newPath, 'utf-8');
    console.log(`Reading file '${fileName}' at '${this.currentPath}' with content: ${content}`);
  }

  cd(folderName) {
    const newPath = path.join(this.currentPath, folderName);
    if (fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()) {
      this.currentPath = newPath;
      console.log(`Changed directory to '${folderName}'`);
    } else {
      console.error(`Directory '${folderName}' does not exist at '${this.currentPath}'`);
    }
  }

  rm(name) {
    const newPath = path.join(this.currentPath, name);
    if (fs.existsSync(newPath)) {
      if (fs.statSync(newPath).isDirectory()) {
        fs.rmdirSync(newPath, { recursive: true });
        console.log(`Removed folder '${name}' at '${this.currentPath}'`);
      } else {
        fs.unlinkSync(newPath);
        console.log(`Removed file '${name}' at '${this.currentPath}'`);
      }
    } else {
      console.error(`File or folder '${name}' does not exist at '${this.currentPath}'`);
    }
  }
}

module.exports = FileSystem;