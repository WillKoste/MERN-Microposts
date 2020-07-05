const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const connectDB = require('./config/db');
const cors = require('cors');
const colors = require('colors');
const morgan = require('morgan');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/posts', require('./routes/posts'));

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Your express server is rinning on port ${port}, sire... Oh and it's in ${process.env.NODE_ENV} mode lolol`.cyan.underline.bold);
});