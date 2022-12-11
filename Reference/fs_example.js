const fs = require('fs');
const path = require('path')
const filename = 'hello.txt';
const dir = '/test';
const text = 'Hello Node.js Im going to write some serious stuff in you... lol';

fs.mkdir(path.join(__dirname, dir), {}, err => {
    if (err) throw err;
    console.log('Folder Created');
});

fs.writeFile(path.join(__dirname, dir, filename), text, err => {
    if (err) throw err;
    console.log(`${filename} created.\n${text}\nwas written to file.`);
});

fs.readFile(path.join(__dirname, dir, filename), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`Read ${filename}:`)
    console.log(data);
});

fs.rename(path.join(__dirname, dir, filename), path.join(__dirname, dir, "hello.txt"), err => {
    if (err) throw err;
    console.log(`Renamed ${filename}:`);
});

