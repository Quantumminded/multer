const express = require('express');
const app = express();
const multer = require('multer');
const port = process.env.PORT || 5000;

app.post('/upload-profile-pic', (req, res) => {
    res.send(`<h1>Page</h1>`)
})

app.listen(port, () => console.log(`Connected to port ${port}`));