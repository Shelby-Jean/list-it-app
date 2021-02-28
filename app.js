const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const listsRouter = require('./routers/lists');
const categoriesRouter = require('./routers/categories');
const itemsRouter = require('./routers/items');
const { logger } = require('./middleware/auth');

const app = express();
// require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(logger);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/lists', listsRouter);
app.use('/categories', categoriesRouter);
app.use('/items', itemsRouter);

app.get('/', (req, res) => {
  res.send('List It Server!')
})

app.listen(port, () => {
 console.log(`Server started on port ${port}!`);
});