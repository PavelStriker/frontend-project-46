import { buildData } from '../src/index.js';
import { buildTree } from '../src/buildTree.js';
import { renderDifference } from '../src/buildTree.js';
import { test, expect } from '@jest/globals';
import path from 'path';
import url from 'url';
import fs from 'fs';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultpath = getFixturePath('resultPlain.txt');
const result = readFileSync(resultpath, 'utf-8').trim();

test('plainTest', () => {
  const file1 = 'file1.json';
  const file2 = 'file2.json';
    expect(buildData(file1, file2)).toEqual(result);
});
