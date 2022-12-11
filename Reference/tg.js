const fs = require('fs');

var fuckingdata = "";

function cf(pathx, dir)
{
    fs.mkdir(`${pathx}\\${dir}`, {}, (err) => {
        if (err) throw err;
        console.log(`Created ${dir} folder.`);
    });
}

function wf(pathx, filename, content)
{
    fs.writeFile(`${pathx}\\${filename}`, content, err => {
        if (err) throw err;
        console.log(`${filename} created.\n${content}\nwas written to file.`);
    });
}

function rfa(pathx, filename, callback)
{
    fs.readFile(`${pathx}\\${filename}`, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`Read ${filename}:`)
        fuckingdata = data.toString();
        callback();
    });
}

function result()
{
    console.log(fuckingdata);
};

function rf(pathx, file)
{
    var contents = fs.readFileSync(pathx, file);
    return contents;
}

module.exports = { result, cf, wf, rfa, rf };
