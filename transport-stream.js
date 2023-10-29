"use strict";

const FileStreamRotator = require("file-stream-rotator");

const loggingPath = process.env.LOGGING_PATH || process.cwd();

const otherOptions = {
  ...(process.env.MAX_LOGS && { max_logs: process.env.MAX_LOGS }),
  ...(process.env.EXTENSION && { extension: process.env.EXTENSION }),
  ...(process.env.DATE_FORMAT && { date_format: process.env.DATE_FORMAT }),
  ...(process.env.UTC && { utc: true }),
};

var rotatingLogStream = FileStreamRotator.getStream({
  filename: `${loggingPath}/${process.env.APP_NAME || "File"}-%DATE%`,
  frequency: process.env.LOGGING_INTERVAL || "daily",
  date_format: "YYYY-MM-DD",
  size: process.env.LOGGING_FILE_SIZE || "1g",
  audit_file: `${loggingPath}/audit.json`,
  extension: ".log",
  ...otherOptions,
});

module.exports = function (options) {
  return rotatingLogStream;
};
