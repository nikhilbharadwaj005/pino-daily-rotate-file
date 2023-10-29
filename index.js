'use strict';
const path = require('path')
const pino = require('pino');

// DEBUG < INFO < WARN < ERROR < FATAL

const log = pino({
  level: process.env.LOGGING_LEVEL || 'info',
  mixin(_context, level) {
    return { 'level-label': log.levels.labels[level] }
  },
  transport: {
    targets: [
      { level: process.env.LOGGING_LEVEL || 'info',
        target: path.resolve(__dirname+'/transport-stream.js')
      }
    ]
  }
});


module.exports = log