#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

import gameEvenNumbers from '../games/game-even.js';
import { engineBrainGames } from '../src/index.js';

engineBrainGames(gameEvenNumbers, 3);
