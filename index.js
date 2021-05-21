import { getMovingAverage } from './indicators.js';
import { createMarketOrder, getPriceByTicker } from './exchange.js';

global.fetch = require('node-fetch');
require('dotenv').config();
