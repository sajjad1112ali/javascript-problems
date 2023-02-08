const fs = require("fs");

let existAsync = function (filePath) {
  return new Promise(function (resolve) {
    fs.access(filePath, fs.constants.F_OK, function (err) {
      if (!err) {
        resolve(1);
      } else {
        resolve(0);
      }
    });
  });
};

let createFileAsync = function (folderName) {
  return new Promise(function (resolve) {
    fs.mkdir(folderName, function (err) {
      if (err) {
        if (err.code == "EEXIST") resolve(1);
        else resolve(0);
      } else resolve(1);
    });
  });
};

const createEmptyJsonFile = (fname, data) => {
  return new Promise(function (resolve) {
    if (!fs.existsSync(fname)) {
      fs.writeFile(fname, data, { flag: "wx" }, (err) => {
        if (err) throw err;
        resolve(1);
      });
    }
  });
};
const createFileIfNotExist = async (folderName, fname, data) => {
  try {
    const fileName = folderName + fname;
    const dataToWrite = data ? data : JSON.stringify([]);
    const isDirExist = await existAsync(folderName);
    if (!isDirExist) {
      await createFileAsync(folderName);
      await createEmptyJsonFile(fileName, dataToWrite);
    } else {
      const isCreated = await createEmptyJsonFile(fileName, dataToWrite);
    }
  } catch (error) {
    console.log(error);
  }
};

const fileArr = ["abc.json", "pqr.json", "xyz.json", "11.json", "22.json"];

(async function selfCalling() {
  const rootDir = "./translatedContent/";
  const ddd = {test: 'hello world'}
  const dd = JSON.stringify(ddd);
  await Promise.all(fileArr.map((item) => createFileIfNotExist(rootDir, item, dd)));
})();
