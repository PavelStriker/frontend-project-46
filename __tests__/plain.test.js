import { buildData } from '../src/index.js';
import { test, expect } from '@jest/globals';
import path from 'path';
import url from 'url';
import { readFileSync } from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultpath = getFixturePath('resultPlain.txt');
const result = readFileSync(resultpath, 'utf-8');

test('plainTest', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    expect(buildData(filepath1, filepath2)).toBe(result);
});
