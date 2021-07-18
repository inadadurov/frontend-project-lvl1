#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

// eslint-disable-next-line import/named
import welcomeDialog from '../src/cli.js';

console.log('Welcome to the Brain Games!');

console.log(welcomeDialog());
