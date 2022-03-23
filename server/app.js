const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/build/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/herohub', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));
