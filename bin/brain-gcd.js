#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

import gameGreatestCommonDivisor from '../games/game-gcd.js';
import { engineBrainGames } from '../src/index.js';

engineBrainGames(gameGreatestCommonDivisor, 3);
