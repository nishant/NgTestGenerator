import * as fs from 'fs';

export const getWebAppDir = (): string =>
  process.argv.slice(2)[0] || 'sample-web-app';

export const getHtmlFiles = (
  webappRootDir: string = '',
  htmlFiles: Array<string> = [],
): Array<string> => {
  fs.readdirSync(webappRootDir).forEach((filename) => {
    const path = `${webappRootDir}/${filename}`;
    if (fs.statSync(path).isDirectory()) getHtmlFiles(path, htmlFiles);
    if (path.endsWith('.component.html')) htmlFiles.push(path);
  });

  return htmlFiles;
};

export const readFile = (path: string): string => {
  try {
    return fs.readFileSync(`${path}`, 'utf8');
  } catch (err) {
    console.error(err);
  }
  return '';
};
