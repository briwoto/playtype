import * as path from 'path';
import * as fs from 'node:fs';

const mapFileDir = path.resolve(
  process.cwd(),
  `recordings/${process.env.AUTOMATION_TYPE!}`
);
const mapFileName = 'video-name-mapping.json';
const mapFileFullPath = `${mapFileDir}/${mapFileName}`;

export const createVideoMappingFile = () => {
  const defaultContent = JSON.stringify({});
  fs.writeFileSync(mapFileFullPath, defaultContent);
};

const mapTestIdToTestTitle = (testTitle: string, videoPath: string) => {
  const videoName = videoPath.split('/').pop();
  const fileContents = fs.readFileSync(mapFileFullPath);
  const data = JSON.parse(fileContents.toString());
  data[testTitle] = videoName;
  fs.writeFileSync(mapFileFullPath, JSON.stringify(data));
};

export const getRandomAlphaNumeric = (n: number) =>
  (Math.random() + 1).toString(36).substring(n);

export const generateRandomPhoneNumber = (length = 10) =>
  Math.ceil(Math.random() * 10 ** length);

export const generateRandomEmail = () =>
  `${getRandomAlphaNumeric(5)}@e2etest.xyz`;

export const generateRandomAddress = () =>
  `${Math.floor(Math.random() * 10)} street, ${getRandomAlphaNumeric(6)}`;

export const pause = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
