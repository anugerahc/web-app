const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});