#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/path.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const diff = gendiff(filepath1, filepath2);
    console.log(diff);
  });

program.parse();
