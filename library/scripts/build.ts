import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cp, copyFile } from 'fs/promises';
import { build } from 'vite';

import viteConfig from '../vite.config.ts';

const dirname = fileURLToPath(new URL('.', import.meta.url));
const rootPath = path.resolve(dirname, '..');

const iconsSourceDirectoryPath = path.resolve(rootPath, 'icons');

const buildDirectoryPath = path.resolve(rootPath, 'dist');
const iconsBuildDirectoryPath = path.resolve(buildDirectoryPath, 'icons');

const packageJsonPath = path.resolve(rootPath, 'package.json');

await build({
  ...viteConfig,
  root: rootPath,
});

await cp(iconsSourceDirectoryPath, iconsBuildDirectoryPath, { recursive: true });
await copyFile(packageJsonPath, path.resolve(buildDirectoryPath, 'package.json'));