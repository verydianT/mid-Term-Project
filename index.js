require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbURL = process.env.DB_URL ?? '';

mongoose.connect(dbURL);
const db = mongoose.connection;
db.on('error', (error) => { console.log(error); })
db.once('connected', () => { console.log('Database Connected'); })

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Tugas Mid-Term, Mohon sesuaikan dengan API yang telah dibuat')
})

const vidioRouter = require('./routes/vidioRoutes');
const productRouter = require('./routes/productRoutes');
const commentRouter = require('./routes/commentRoutes');

app.use('/', vidioRouter);
app.use('/', productRouter);
app.use('/', commentRouter);
app.listen(3000, () => {
  console.log(`Server running at ${3000}`)
});