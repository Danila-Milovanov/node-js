const fs = require('fs');

const rs = fs.createReadStream('./files/b.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/new_lorem.txt');

// rs.on('data', (dataChunk => {
//     ws.write(dataChunk);
// }))

rs.pipe(ws);