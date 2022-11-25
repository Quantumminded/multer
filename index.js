const express = require('express');
const app = express();
const multer = require('multer');
const port = process.env.PORT || 5000;
const path = require('path');


const storage = multer.diskStorage({
    destination: './uploads',
    filname: (req,file,cb) => {
        const extension = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${extension}`);
    }
});

const upload = multer({storage});


app.post('/upload-profile-pic', (req, res) => {
    res.send(`<h1>Page</h1>`)
})

app.listen(port, () => console.log(`Connected to port ${port}`));