#!/usr/bin/env node
// При запуске исполняемого файла такая запись (строка выше с шебангом)
// позволит выполнить код, который в нём расположен

import gameArProgression from '../games/game-progression.js';
import { engineBrainGames } from '../src/index.js';

engineBrainGames(gameArProgression, 3);
