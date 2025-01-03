const express = require('express');
const mongoose=require('mongoose');
require('dotenv').config()
const { resolve } = require('path');

const app = express();
const port = 3010;
const mongoURL=process.env.MONGO_URL
app.use(express.static('static'));
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.error('Error connecting to database:', error.message);
});

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
