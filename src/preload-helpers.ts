import * as fs from 'fs';

export const getWebAppDir = () => {
  const args = process.argv.slice(2);
  return args[0];
};

export const getHtmlFiles = (
  webappRootDir: string,
  files_: Array<string> = [],
) => {
  const files = fs.readdirSync(webappRootDir);

  files.forEach((filename) => {
    const path = `${webappRootDir}/${filename}`;

    if (fs.statSync(path).isDirectory()) {
      getHtmlFiles(path, files_);
    } else if (path.endsWith('.component.html')) {
      files_.push(path);
    }
  });

  return files_;
};

export const readFile = (path: string) => {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.error(err);
  }
  return '';
};
