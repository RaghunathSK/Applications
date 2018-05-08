const express = require('express');
const app = express();
var path = require('path');
var indexRouter = require('./routes/indexrouter');
var userRouter = require('./routes/userrouter');
var mangoose = require('./db');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use('/', indexRouter);
app.use('/users', userRouter);


app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
