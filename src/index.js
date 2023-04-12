import _ from 'lodash';
import { buildTree } from './buildTree.js'
import path from 'node:path';
import fs from 'fs';
import parse from './parse.js';
import { renderDifference } from './buildTree.js';
import process from 'process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getTypeFile = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getTypeFile(filepath));

const getFixturesPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

export const buildData = (filepath1, filepath2) => {
const fileData1 = getData(getFixturesPath(filepath1));
const fileData2 = getData(getFixturesPath(filepath2));

const diff = buildTree(fileData1, fileData2);
return renderDifference(diff);
};
