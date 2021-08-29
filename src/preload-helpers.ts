import { glob } from 'glob';

export const getWebAppDir = () => {
  const args = process.argv.slice(2);
  return args[0];
};

export const getHtmlFiles = (webappRootDir: string) =>
  glob.sync(`${webappRootDir}/src/**/*.component.html`);
