const express = require('express');
const morgan = require('morgan');

const taskRoutes = require('./routes/taskRoutes');

var app = express();
app.use(express.json())
app.use(morgan('dev'));
app.use(taskRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)

module.exports = app;
