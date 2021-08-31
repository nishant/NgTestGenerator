import { getHtmlFiles, getWebAppDir, readFile } from './preload-helpers';

console.log('Running Parser...\n');

const webappRootDir: string = getWebAppDir();
const htmlFiles: Array<string> = getHtmlFiles(webappRootDir);
const fileMap: Map<string, string> = new Map();

htmlFiles.forEach((file) => {
  fileMap.set(file, readFile(file));
});

console.log(`Webapp Root Directory: ${webappRootDir}\n`);
console.log(`HTML Files Found:\n* ${htmlFiles.join('\n')}`);
console.log(fileMap);
