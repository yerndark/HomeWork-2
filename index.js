const FileSystem = require('./class/FileSystem');
const Folder = require('./class/Folder');

const root = new Folder('root');
const fileSystem = new FileSystem();

root.on('mkdir', (folderName) => fileSystem.mkdir(folderName));
root.on('touch', (fileName, content) => fileSystem.touch(fileName, content));
root.on('read', (fileName) => fileSystem.read(fileName));
root.on('cd', (folderName) => fileSystem.cd(folderName));
root.on('rm', (name) => fileSystem.rm(name));

root.emitEvent('mkdir', 'новая папка');
root.emitEvent('cd', 'новая папка');
root.emitEvent('mkdir', 'Доп папка');
root.emitEvent('cd', 'Доп папка');
root.emitEvent('touch', 'Humble.txt', 'Be Humble, Sit down!');
root.emitEvent('cd', '..');
root.emitEvent('cd', '..');
root.emitEvent('mkdir', 'новая папка 2');
root.emitEvent('touch', 'bang.txt', 'Bang, Bang!');