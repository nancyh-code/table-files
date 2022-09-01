const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'It is the base of the multiplication table',
  })
  .option('u', {
    alias: 'until',
    type: 'number',
    default: 10,
    describe: 'Number up to where you want the table',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Show table in console',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'The base must be a number';
    }
    return true;
  }).argv;

module.exports = argv;
