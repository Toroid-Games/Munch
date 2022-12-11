const url = require('url');
const urlx = new URL('http://somesite.com:5432/index.html?id=badidea&status=active');

// Serialized URL
console.log(urlx.href);

// Host (root domain)
console.log(urlx.host);

// Hostname
console.log(urlx.hostname);

// Pathname
console.log(urlx.pathname);

// Serialised query
console.log(urlx.search);

// Params object
console.log(urlx.searchParams);

// Append params
urlx.searchParams.append('abc', '123');

// Create object from url
console.log(url.parse(urlx.href));

// Loop through params
urlx.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
