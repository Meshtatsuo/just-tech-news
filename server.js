const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const path = require('path');

const routes = require('./controllers');
const sequelize = require('./config/connection');


const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({
  force: false
}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});