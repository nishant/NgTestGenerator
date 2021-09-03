import { HTMLElement, parse } from 'node-html-parser';
import { logger } from '../utils/logger';
import { getHtmlFiles, getWebAppDir, readFile } from './preload-helpers';

logger.info('Running Parser...\n');

const webappRootDir: string = getWebAppDir();
const htmlFiles: Array<string> = getHtmlFiles(webappRootDir);
const fileContents: Map<string, string> = new Map();

htmlFiles.forEach((file) => {
  fileContents.set(file, readFile(file));
});

logger.info(`Webapp Root Directory: ${webappRootDir}\n`);
logger.info(`HTML Files Found:\n* ${htmlFiles.join('\n')}`);
logger.info([...fileContents.entries()]);

htmlFiles.forEach((file) => {
  const root: HTMLElement = parse(fileContents.get(file)!);
  logger.info(`Parsed structure for '${file}'`);
  logger.info(`\n${(root.firstChild as HTMLElement).structure}`);
});
