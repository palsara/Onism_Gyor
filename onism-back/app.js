const config = require('./config/config');
const app = require('./config/express');
require('./config/mysql');


app.listen(config.port, () => {
  console.info(`server started on port ${config.port}`);
});

module.exports = app;