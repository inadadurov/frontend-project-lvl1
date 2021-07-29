#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

import gamePrimeNumbers from '../games/game-prime.js';
import { engineBrainGames } from '../src/index.js';

engineBrainGames(gamePrimeNumbers, 3);
