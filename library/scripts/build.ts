import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { copyFile } from 'fs/promises';
import { build } from 'vite';

import viteConfig from '../vite.config.ts';

const dirname = fileURLToPath(new URL('.', import.meta.url));
const rootPath = path.resolve(dirname, '..');

const buildDirectoryPath = path.resolve(rootPath, 'dist');

const packageJsonPath = path.resolve(rootPath, 'package.json');

await build({
  ...viteConfig,
  root: rootPath,
});

await copyFile(packageJsonPath, path.resolve(buildDirectoryPath, 'package.json'));