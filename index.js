const mongoose = require('mongoose');
const app = require('./src/app');

const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('App listening on port 3000');
  });
});
