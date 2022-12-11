const path = require('path');
console.log('Path Examples')
// Directory name
console.log(path.dirname(__filename));

// Base file name
console.log(path.basename(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object (shows root(drive) + all of the above + filename )
console.log(path.parse(__filename));
// Extract root drive from path object
console.log(path.parse(__filename).root);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

