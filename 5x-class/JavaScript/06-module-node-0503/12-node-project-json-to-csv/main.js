const { readFile } = require('fs').promises;

const { createWriteStream } = require('fs');
// https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options

const csv = require('fast-csv');
// https://c2fo.io/fast-csv/docs/introduction/example#formatting

const argJsonFilename = process.argv[2];
const argCsvFilename = process.argv[3];
if (!(argJsonFilename && argCsvFilename)) {
  console.error("Please provide json and csv filename");
  process.exit(127)
}

async function main(jsonFilename, csvFilename) {
  const jsonContent = await readFile(jsonFilename,{encoding:'utf8'})
  const json = JSON.parse(jsonContent);

  // 建機器
  // format 放入機器
  const csvStream = csv.format({ headers: true });
  const fileStream = createWriteStream(csvFilename);

  // pipe串接
  csvStream.pipe(fileStream).on('end', () => process.exit());
  // 一個個輸出
  json.forEach(post => {
    csvStream.write(post);
  });
  csvStream.end();
  // console.log(cvs,jsonFilename, csvFilename);
  // let's start coding
}

main(argJsonFilename, argCsvFilename);
