#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом) позволит выполнить код, который в нём расположен

import { welcomeDialog } from "../src/cli.js";

console.log("Welcome to the Brain Games!");

console.log(welcomeDialog());