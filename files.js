const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const dataValidator = require("./helpers/dataValidator.js");
const checkExtension = require("./helpers/checkExtension.js");

async function createFile(filename, content) {
  const file = { content, filename };
  const { error } = dataValidator(file);
  //   console.log(result.error.details[0]);

  if (error) {
    console.log(
      chalk.red(`please specify parameter ${error.details[0].path[0]}`)
    );
    return;
  }

  const { extension, result } = checkExtension(filename);

  if (!result) {
    console.log(
      chalk.red(
        `sorry application doesn't support files with ${extension} extention`
      )
    );
    return;
  }

  try {
    await fs.writeFile(
      path.join(__dirname, "./files", filename),
      content,
      "utf-8"
    );
    console.log(chalk.blue("File was created succesfully!"));
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  createFile,
};
