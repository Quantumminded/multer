const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.post('/upload-profile-pic', (req, res) => {
    res.send(`<h1>Hello there</h1>`)
})

app.listen(port, () => console.log(`Connected to port ${port}`));