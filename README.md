# pino-daily-rotate-file

[![NPM version][npm-image]][npm-url]

[![NPM](https://nodei.co/npm/pino-daily-rotate-file.png)](https://nodei.co/npm/pino-daily-rotate-file/)

A daily log rotating [pino](https://github.com/nikhilbharadwaj005/pino-daily-rotate-file) package which logs to a rotating file.
Logs can be rotated based on a size limit, date and old logs can be removed based on count or elapsed days.

## Install

```
npm install pino-daily-rotate-file
```

- Ready to use pino rotating file logger. Just install and use.

## Options

You can provide the below keys in as your environment variables,

- If any env variable is not provided, their **default** values are used.
  <br>

| Environment Variables | values                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LOGGING_LEVEL         | You can mention your log level, <br>valid values are debug, info, error, warn, fatal <br>Default: info                                                                                                                                                                                                                                                                                |
| LOGGING_PATH          | Give a path, where log file should be created. <br> Default: current directory where process is running                                                                                                                                                                                                                                                                               |
| MAX_LOGS              | Max number of logs to keep. <br>If not set, it won't remove past logs. <br> It uses its own log audit file to keep track of the log files in a json format. It won't delete any file not contained in it. <br>It can be a number of files or number of days. <br>If using days, add 'd' as the suffix. e.g., '10d' for 10 days. If no value is provide, old log file won't be deleted |
| EXTENSION             | The extension of the log file generated<br> Default: ".log"                                                                                                                                                                                                                                                                                                                           |
| DATE_FORMAT           | Use 'Y' for full year, 'M' for month, 'D' for day, 'H' for hour, 'm' for minutes, 's' for seconds .<br> If using 'date' frequency, it is used to trigger file change when the string representation changes.<br> It will be used to replace %DATE% in the filename. All replacements are numeric only. <br> Default: "YYYY-MM_DD"                                                     |
| UTC                   | Use UTC time for date in filename <br>Default: false                                                                                                                                                                                                                                                                                                                                  |
| LOGGING_INTERVAL      | How often to rotate. <br> Options are <br>'daily' for daily rotation, <br>'date' based on date_format, <br>'[1-12]h' to rotate every 1-12 hours, <br>'[1-30]m' to rotate every 1-30 minutes. <br> Default: "daily"                                                                                                                                                                    |
| APP_NAME              | Name of the log file along the date string.<br> Eg: "YourServiceName-YYYY-MM-DD.log" <br> Default: "File"                                                                                                                                                                                                                                                                             |
| LOGGING_FILE_SIZE     | Max size of the file after which it will rotate. <br> It can be combined with frequency or date format. <br> The size units are 'k', 'm' and 'g'. <br> Units need to directly follow a number e.g. 1g, 100m, 20k. Default: '1g'                                                                                                                                                       |

## Usage

```js
var logger = require("pino-daily-rotate-file");

logger.info("Hello World!");
```

### ES6

```js
import logger from "pino-daily-rotate-file";

logger.info("Hello World!");
```

## LICENSE

MIT

##### AUTHOR: [Nikhil Bharadwaj](https://github.com/nikhilbharadwaj005/pino-daily-rotate-file)

[npm-image]: https://badge.fury.io/js/pino-daily-rotate-file.svg
[npm-url]: https://npmjs.org/package/pino-daily-rotate-file
