import { getHtmlFiles, getWebAppDir } from './preload-helpers';

console.log('Running Parser...\n');

const webappRootDir = getWebAppDir();
const htmlFiles = getHtmlFiles(webappRootDir);

console.log(`Webapp Root Directory: ${webappRootDir}\n`);
console.log(`HTML Files Found:\n* ${htmlFiles.join('\n')}`);
