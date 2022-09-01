const { createFile } = require('./helpers/product');
const argv = require('./config/yargs');

require('colors');

console.clear();

createFile(argv.b, argv.l, argv.u)
  .then((nameFile) => console.log(nameFile.rainbow, 'created'))
  .catch((err) => console.error(err));
