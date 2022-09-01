const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 5, list = false, until = 10) => {
  // return new Promise((resolve, reject) => {
  try {
    let result,
      consola = '';

    for (let i = 1; i <= until; i++) {
      result += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (list) {
      console.log('==============='.green);
      console.log('Table del', colors.blue(base));
      console.log('==============='.green);
      console.log(consola);
    }

    // fs.writeFile(`table-${base}.txt`, result, (err) => {
    //   if (err) throw err;
    //   console.log(`table-${base}.txt created successfully`);
    // });
    fs.writeFileSync(`./exit/table-${base}.txt`, result);

    return `table-${base}.txt`;
    // });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  // function: createFile,
  //createFile: createFile,
  createFile,
};
