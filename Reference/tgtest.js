TG = require('./tg');
const rpath = require('path')
const path = rpath.dirname(__filename);
const filename = '/hello.txt';
const dir = '/test';
const text = 'Hello Node.js Im going to write some serious stuff in you... lol';
const result = TG.result;

TG.cf(path, dir);
TG.wf(path + dir, filename, text);
TG.rfa(path + dir, filename, result);


var data = TG.rf("file.txt");
console.log("the fucking data:" + data.toString());
