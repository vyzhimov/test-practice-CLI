const { createFile, getFiles, getInfo } = require("./files.js");

// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, filename, content }) {
  switch (action) {
    case "create":
      createFile(filename, content);
      break;

    case "get":
      getFiles();
      break;

    case "getInfo":
      getInfo(filename);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
