const mongoose = require('mongoose');
const app = require('./src/app');

const { PORT } = process.env;
mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log('App listening on port', PORT);
  });
});
