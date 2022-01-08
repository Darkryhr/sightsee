const express = require('express');
const cors = require('cors');
const sequelize = require('./utils/database');

const app = express();
sequelize
  .sync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('*', (req, res) => {
  res.send('path not found');
});

app.listen(3000, () => console.log('listening on port 3000'));
