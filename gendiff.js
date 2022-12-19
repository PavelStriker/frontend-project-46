#! /usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
  .description('Utility for finding differences in configuration files.')
  .version('1.0.0', '-v, --version', 'output the current version');

program.parse();
