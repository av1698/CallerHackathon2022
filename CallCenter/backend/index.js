const express = require('express');

const bodyParser = require('body-parser');

const studentyRoutes = require('./routes/student');

//const errorController = require('./controllers/error');

const app = express();

//const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/student', studentRoutes);

app.listen(ports, () => console.log(`listening on port ${ports}`));
