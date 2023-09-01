const express = require('express');
const fileProcessor = require('./routes/fileProcessor');
const path = require('path')

const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use views directory for all ejs templates
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('upload');
});

app.use('/processFiles', fileProcessor);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});