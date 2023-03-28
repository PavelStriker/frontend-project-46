import _ from 'lodash';
import { buildTree } from './buildTree.js'
import path from 'node:path';
import fs from 'fs';
import parse from './parse.js';
import { renderDifference } from './buildTree.js';
import process from 'process';

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getTypeFile = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), getTypeFile(filepath));

export const buildData = (filepath1, filepath2) => {
const fileData1 = getData(buildFullPath(filepath1));
const fileData2 = getData(buildFullPath(filepath2));
const diff = buildTree(fileData1, fileData2);
return renderDifference(diff);
};
