const fs = require('fs').promises
// process 跑起來程序 argv[2] 跑起來第二個參數
console.log(process.argv[2]);
const filename = process.argv[2];
if (!filename) {
  console.error("Please provide json filename");
  process.exit(127)
}

async function main(jsonFilename) {

  const jsonContent = await fs.readFile(jsonFilename,{encoding:'utf8'})
  const json = JSON.parse(jsonContent);
  //stdout 終端機 write寫入
  process.stdout.write(JSON.stringify(json,null,2))
  // let's start coding
}

main(filename);

// run node pretty-print-json.js posts.json

